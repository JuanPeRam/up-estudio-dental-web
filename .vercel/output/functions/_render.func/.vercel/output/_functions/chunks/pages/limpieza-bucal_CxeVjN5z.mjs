/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from './404_Chrp7w36.mjs';
import { $ as $$Header } from './blanqueamiento-dental_iaNAS4c9.mjs';
/* empty css                                   */

const $$Astro$1 = createAstro();
const $$DentalCleaning = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DentalCleaning;
  return renderTemplate`${maybeRenderHead()}<section class="bg-contrast/30 backdrop-blur-md min-h-screen row-center" id="dental-cleaning-section"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">Limpieza Bucal</h2> <p class="">Elimina el sarro y la placa bacteriana acumulada para mantener una boca sana.</p> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0"> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "euro" })} </div> <h3 class="mb-2 text-xl font-bold text-white">Precio</h3> <p>Consúltalo sin compromiso en tu cita de valoración.</p> </div> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "clock" })} </div> <h3 class="mb-2 text-xl font-bold text-white">Tiempo estimado</h3> <p>30-45 min (orientativo)</p> </div> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bquoteleft" })} </div> <h3 class="mb-2 text-xl font-bold dark:text-white">Descripción del servicio</h3> <p>Mediante ultrasonidos y pulido, retiramos el sarro y la placa bacteriana de la superficie del diente y de la línea de la encía, previniendo la aparición de caries, gingivitis y otras enfermedades periodontales. Se recomienda realizarla al menos una vez al año.
</p> </div> <div> <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-14 lg:w-14 bg-corporative/20 text-corporative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "book" })} </div> <h3 class="mb-2 text-xl font-bold dark:text-white">Política de cancelación
</h3> <p>Se ruega contactar telefónicamente con nuestra recepción previamente en el número 91 993 13 29 o en el 649039327 (también por whastapp), para confirmar la viabilidad de la cita. En caso de no confirmar cita no podemos garantizar el servicio prestado </p> </div> </div> </div> </section>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Services/DentalCleaning.astro", void 0);

const $$Astro = createAstro();
const $$LimpiezaBucal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LimpiezaBucal;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Limpieza Bucal", "description": "Limpieza bucal profesional con ultrasonidos y pulido para eliminar el sarro y la placa bacteriana en Up Estudio Dental, M\xF3stoles.", "data-astro-cid-lrhqdr5i": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="service-hero" data-astro-cid-lrhqdr5i> ${renderComponent($$result2, "Header", $$Header, { "title": "Limpieza Bucal", "description": "", "styles": "bg-secondary/80", "data-astro-cid-lrhqdr5i": true })} <a href="/services" class="block text-center text-sm text-white/70 hover:text-corporative pb-8 transition" data-astro-cid-lrhqdr5i>← Volver a Servicios</a> </section> ${renderComponent($$result2, "DentalCleaning", $$DentalCleaning, { "data-astro-cid-lrhqdr5i": true })} ` })} `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/limpieza-bucal.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/limpieza-bucal.astro";
const $$url = "/services/limpieza-bucal";

export { $$LimpiezaBucal as default, $$file as file, $$url as url };
