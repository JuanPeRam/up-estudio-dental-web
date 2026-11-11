import { sendContactEmail } from "@/lib/contactEmail";

export const subjects = ["Pedir cita", "Primera revisión gratuita", "Limpieza bucal", "Blanqueamiento dental", "Otra consulta"];

/**
 * - "invalid": faltan datos o están mal.
 * - "limited": demasiados envíos seguidos desde la misma dirección.
 * - "failed": los datos están bien pero el correo no salió.
 */
export type ContactStatus = "idle" | "sent" | "invalid" | "limited" | "failed";
export interface ContactFormState {
  status: ContactStatus;
  /** Lo que escribió la persona, para no perderlo si hay que mostrar el formulario otra vez. */
  values: Record<string, string>;
}

/**
 * Tras un envío correcto se redirige a esta dirección (patrón POST → redirección → GET), así
 * recargar no reenvía el mensaje. Va en la URL y no en una cookie para que la confirmación se vea
 * también con las cookies bloqueadas.
 */
export const SENT_URL = "/contacto?enviado=1#contact-form";
export const SENT_PARAM = "enviado";

/**
 * Límite de envíos por dirección IP: cada envío válido es un correo de Resend.
 * Vive en la memoria de cada instancia de Vercel, así que frena a quien insiste desde un mismo
 * sitio, no un ataque repartido. Para eso haría falta un captcha (p. ej. Cloudflare Turnstile).
 */
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const sends = new Map<string, number[]>();

function allowSend(ip: string, now = Date.now()): boolean {
  if (sends.size > 1000) {
    for (const [key, times] of sends) if (times.every((t) => now - t > WINDOW_MS)) sends.delete(key);
  }
  const recent = (sends.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= LIMIT) {
    sends.set(ip, recent);
    return false;
  }
  recent.push(now);
  sends.set(ip, recent);
  return true;
}

export async function handleContactForm(request: Request, ip: string): Promise<ContactFormState> {
  let values: Record<string, string> = {};
  try {
    const data = await request.formData();
    const get = (key: string, max: number) => (data.get(key)?.toString() ?? "").trim().slice(0, max);
    values = {
      name: get("name", 120),
      email: get("email", 200),
      phone: get("phone", 40),
      subject: get("subject", 60),
      message: get("message", 5000),
      privacy: data.get("privacy") ? "on" : "",
    };

    // Campo trampa: invisible para personas, los bots lo rellenan. Se finge éxito sin enviar.
    if (get("website", 200)) return { status: "sent", values: {} };

    if (!values.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || !values.message || !values.privacy) {
      return { status: "invalid", values };
    }
    if (!allowSend(ip)) return { status: "limited", values };

    const result = await sendContactEmail({
      name: values.name,
      email: values.email,
      phone: values.phone || undefined,
      subject: subjects.includes(values.subject) ? values.subject : undefined,
      message: values.message,
    });
    if (result.ok) return { status: "sent", values: {} };
    console.error(`Formulario de contacto: ${result.error}`);
    return { status: "failed", values };
  } catch (error) {
    console.error("Formulario de contacto:", error);
    return { status: "invalid", values };
  }
}
