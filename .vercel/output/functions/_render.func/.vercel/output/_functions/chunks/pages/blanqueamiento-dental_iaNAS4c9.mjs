/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from './404_Chrp7w36.mjs';
import 'clsx';
/* empty css                                          */

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, description, styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`${styles} min-h-[20vh] column-center w-full pt-20 pb-5 px-10 gap-5 *:max-w-[80ch] `, "class")}> <h1 class="text-3xl md:text-5xl text-center uppercase animate-slide-in-bottom"> ${title} </h1> <p class="text-pretty animate-slide-in-bottom"> ${description} </p> </header>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Common/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$TeethWhitening = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeethWhitening;
  return renderTemplate`${maybeRenderHead()}<section class="bg-contrast/30 backdrop-blur-md min-h-screen row-center" id="teeth-whitening-section"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">Blanqueamiento Dental</h2> <p class="">Recupera el blanco natural de tu sonrisa con un tratamiento seguro y supervisado por profesionales.</p> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0"> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "euro" })} </div> <h3 class="mb-2 text-xl font-bold text-white">Precio</h3> <p>Consúltalo sin compromiso en tu cita de valoración.</p> </div> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "clock" })} </div> <h3 class="mb-2 text-xl font-bold text-white">Tiempo estimado</h3> <p>45-60 min por sesión (orientativo)</p> </div> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bquoteleft" })} </div> <h3 class="mb-2 text-xl font-bold dark:text-white">Descripción del servicio</h3> <p>Aplicamos un gel blanqueador de uso profesional que elimina las manchas superficiales y aclara el tono natural del diente. Antes de comenzar, valoramos el estado de tus encías y esmalte para adaptar el tratamiento a tu caso y minimizar la sensibilidad dental.
</p> </div> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "book" })} </div> <h3 class="mb-2 text-xl font-bold dark:text-white">Política de cancelación
</h3> <p>Se ruega contactar telefónicamente con nuestra recepción previamente en el número 91 993 13 29 o en el 649039327 (también por whastapp), para confirmar la viabilidad de la cita. En caso de no confirmar cita no podemos garantizar el servicio prestado </p> </div> </div> </div> </section>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Services/TeethWhitening.astro", void 0);

const $$Astro = createAstro();
const $$BlanqueamientoDental = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlanqueamientoDental;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blanqueamiento Dental", "description": "Blanqueamiento dental profesional y supervisado para recuperar el tono natural de tu sonrisa en Up Estudio Dental, M\xF3stoles.", "data-astro-cid-qxhfxrhi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="service-hero" data-astro-cid-qxhfxrhi> ${renderComponent($$result2, "Header", $$Header, { "title": "Blanqueamiento Dental", "description": "", "styles": "bg-secondary/80", "data-astro-cid-qxhfxrhi": true })} <a href="/services" class="block text-center text-sm text-white/70 hover:text-corporative pb-8 transition" data-astro-cid-qxhfxrhi>← Volver a Servicios</a> </section> ${renderComponent($$result2, "TeethWhitening", $$TeethWhitening, { "data-astro-cid-qxhfxrhi": true })} ` })} `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/blanqueamiento-dental.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/blanqueamiento-dental.astro";
const $$url = "/services/blanqueamiento-dental";

const blanqueamientoDental = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlanqueamientoDental,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, blanqueamientoDental as b };
