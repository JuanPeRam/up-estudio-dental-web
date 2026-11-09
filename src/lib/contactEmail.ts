import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from "astro:env/server";
import { clinic, contact } from "@/constants/personal";

/**
 * Envío del formulario de contacto por correo con la API de Resend (https://resend.com).
 * El correo sale de un remitente del dominio verificado en Resend y llega al buzón de la
 * clínica con «Responder a» apuntando al paciente, así se le contesta directamente.
 */

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

/** Limpia espacios y comillas que se cuelan al pegar valores en el panel de Vercel. */
const clean = (value?: string) => value?.trim().replace(/^["']|["']$/g, "").trim() || undefined;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContactEmail(msg: ContactMessage): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = clean(RESEND_API_KEY);
  if (!apiKey) return { ok: false, error: "Falta la variable de entorno RESEND_API_KEY" };

  const to = clean(CONTACT_TO) ?? contact.email;
  const from = clean(CONTACT_FROM) ?? `Web ${clinic.name} <web@upestudiodental.es>`;
  const subject = `${msg.subject || "Consulta"} · ${msg.name}`;

  const rows: [string, string | undefined][] = [
    ["Nombre", msg.name],
    ["Correo", msg.email],
    ["Teléfono", msg.phone],
    ["Motivo", msg.subject],
  ];
  const text = [...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), "", msg.message].join("\n");
  const html = `
    <table style="font:15px/1.5 sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#666">${k}</td><td><b>${escapeHtml(v!)}</b></td></tr>`)
        .join("")}
    </table>
    <p style="font:15px/1.5 sans-serif;white-space:pre-wrap">${escapeHtml(msg.message)}</p>
    <p style="font:13px/1.5 sans-serif;color:#888">Enviado desde el formulario de contacto de la web. Responde a este correo para contestar al paciente.</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: msg.email, subject, text, html }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as { name?: string; message?: string } | null;
      return { ok: false, error: `Resend (${res.status}): ${[body?.name, body?.message].filter(Boolean).join(": ") || res.statusText}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
