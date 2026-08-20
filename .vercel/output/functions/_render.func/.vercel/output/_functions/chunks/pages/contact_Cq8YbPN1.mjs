/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderTransition, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from './404_Chrp7w36.mjs';
import 'clsx';
/* empty css                            */
import { $ as $$Header } from './blanqueamiento-dental_iaNAS4c9.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Form;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const email = data.get("email");
      const message = data.get("message");
      console.log(email);
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  }
  return renderTemplate`${maybeRenderHead()}<form method="POST" class="border p-5 flex flex-col items-start justify-center backdrop-blur-md gap-5 max-w-[550px] w-[100%] animate-slide-in-top" data-astro-cid-bosmunrk> <h2 class="font-bold text-center text-xl w-full" data-astro-cid-bosmunrk>Formulario de contacto</h2> <label class="flex flex-col gap-2 items-start w-full" data-astro-cid-bosmunrk> <p class="text-xs text-white/80" data-astro-cid-bosmunrk>Tu e-mail:</p> <input placeholder="ejemplo@gmail.com" type="email" name="email" id="email" required class="bg-black/30 rounded-md px-3 py-2 w-full focus-visible:outline-none" data-astro-cid-bosmunrk> </label> <label class="flex flex-col gap-2 items-start w-full" data-astro-cid-bosmunrk> <p class="text-xs text-white/80" data-astro-cid-bosmunrk>Mensaje</p> <textarea placeholder="EJ: Me gustaría solicitar información sobre...." name="message" id="message" class="bg-black/30 w-full px-3 py-2 h-[150px] focus-visible:outline-none" required data-astro-cid-bosmunrk></textarea> </label> <label class="row-center gap-2 hover:cursor-pointer" data-astro-cid-bosmunrk> <input type="checkbox" name="privacy" id="privacy" class="appearance-none border w-5 h-5 hover:cursor-pointer" required data-astro-cid-bosmunrk> <p class="select-none" data-astro-cid-bosmunrk>
Acepto la <a href="/privacy-policy" class="text-white underline" data-astro-cid-bosmunrk>política de privacidad</a> </p> </label> <button type="submit" class="p-5 py-3 border hover:bg-corporative/80 transition w-full" data-astro-cid-bosmunrk>Enviar</button> </form> `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Contact/Form.astro", void 0);

const phoneNumber = 649039327;
const fixedNumber = 913464344;

const $$Astro$1 = createAstro();
const $$ContactInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  return renderTemplate`${maybeRenderHead()}<article class="max-w-[60ch] flex flex-col gap-4 text-center justify-center items-center text-sm md:text-base md:animate-delay-300 animate-delay-300 animate-fade-in-up md:animate-fade-in-left border border-white/15 bg-contrast/40 rounded-xl p-6 backdrop-blur-md"${addAttribute(renderTransition($$result, "jzso6gmb", "", `contact-info`), "data-astro-transition-scope")}> <div class="flex flex-col gap-1 text-white/80 font-medium"> <p>Lun - Vie: 10:00–13:30 / 16:00–20:30</p> <p>Sábados: 10:00–14:00</p> </div> <div class="w-full h-px bg-white/10"></div> <h3 class="text-xs md:text-sm font-bold uppercase tracking-widest text-corporative">Urgencias odontológicas 24h</h3> <div class="flex flex-col gap-1 w-full"> <a${addAttribute(`tel:${phoneNumber}`, "href")} class="flex gap-3 font-bold hover:bg-secondary/80 rounded-md p-2 transition-colors items-center justify-center" aria-label="Link para llamar al número de teléfono de la clínica">${renderComponent($$result, "Icon", $$Icon, { "name": "telephone", "height": 22, "width": 22 })}${phoneNumber}</a> <a${addAttribute(`tel:${fixedNumber}`, "href")} class="flex gap-3 font-bold hover:bg-secondary/80 rounded-md p-2 transition-colors items-center justify-center" aria-label="Link para llamar al número de teléfono de la clínica">${renderComponent($$result, "Icon", $$Icon, { "name": "home", "height": 22, "width": 22 })}${fixedNumber}</a> </div> </article>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Common/ContactInfo.astro", "self");

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "description": "Formulario de contacto para poder concretar tu cita con nosotros", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="form-section" class="min-h-screen flex flex-col gap-10 p-5" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Header", $$Header, { "title": "Informaci\xF3n de contacto", "description": "Habla con nuestro equipo para que podamos atenderte lo antes posible \u{1F60A}", "styles": "bg-transparent", "data-astro-cid-uw5kdbxl": true })} <section class="flex items-center justify-center gap-5 w-full flex-wrap" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Form", $$Form, { "data-astro-cid-uw5kdbxl": true })} ${renderComponent($$result2, "ContactInfo", $$ContactInfo, { "data-astro-cid-uw5kdbxl": true })} </section> </section> ` })} `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactInfo as $, contact as c };
