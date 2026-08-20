/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_Chrp7w36.mjs';
import { $ as $$Header } from './blanqueamiento-dental_iaNAS4c9.mjs';
import { $ as $$NavButton } from './index_CSpV8g2m.mjs';
/* empty css                             */

const $$Astro$2 = createAstro();
const $$ServiceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { href, image, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-start justify-center shadow-md group"> <div class="w-full relative"> <img${addAttribute(image, "src")}${addAttribute(`Fotograf\xEDa de ${title}`, "alt")} class="object-cover w-full h-full group-hover:brightness-110 transition" loading="lazy"> </div> <div class="p-5 flex flex-col items-start justify-center w-full backdrop-blur-md group-hover:bg-contrast/20 transition h-full"> <h2 class="py-5 text-xl text-left">${title}</h2> <p>${description}</p> ${renderComponent($$result, "NavButton", $$NavButton, { "path": href, "styles": "bg-secondary text-sm" }, { "default": ($$result2) => renderTemplate` + Info ` })} </div> </article>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Services/ServiceCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${maybeRenderHead()}<section class="m-auto px-16 md:px-48 py-5" id="services-list" data-astro-cid-ufyqpfus> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "href": "/services/revisiones-dentales", "image": "https://static.wixstatic.com/media/d47f72_58d407acbe4e47c5b3a37110e6532bb1~mv2.jpg/v1/fill/w_270,h_270,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d47f72_58d407acbe4e47c5b3a37110e6532bb1~mv2.jpg", "title": "Revisiones Dentales", "description": "Revisi\xF3n, estudio radiogr\xE1fico y presupuesto totalmente gratuitos.", "data-astro-cid-ufyqpfus": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "href": "/services/medicina-estetica", "image": "https://static.wixstatic.com/media/d47f72_69631898962e4582a00520badd9d366a~mv2.jpg/v1/fill/w_270,h_270,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d47f72_69631898962e4582a00520badd9d366a~mv2.jpg", "title": "Medicina Est\xE9tica", "description": "Rejuvenecimiento facial, tratamiento de arrugas y aumento de labios.", "data-astro-cid-ufyqpfus": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "href": "/services/blanqueamiento-dental", "image": "https://static.wixstatic.com/media/d47f72_d531ca276c3d4e7f815e860b8b547db4~mv2.png/v1/fill/w_270,h_270,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d47f72_d531ca276c3d4e7f815e860b8b547db4~mv2.png", "title": "Blanqueamiento Dental", "description": "Aclara el tono natural de tu sonrisa con un gel profesional supervisado.", "data-astro-cid-ufyqpfus": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "href": "/services/limpieza-bucal", "image": "https://static.wixstatic.com/media/d47f72_19a34f9516a64c46868fa4c2d1283d34~mv2.png/v1/fill/w_270,h_270,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d47f72_19a34f9516a64c46868fa4c2d1283d34~mv2.png", "title": "Limpieza Bucal", "description": "Elimina el sarro y la placa bacteriana con ultrasonidos y pulido.", "data-astro-cid-ufyqpfus": true })} </section> `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Services/index.astro", void 0);

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios", "description": "Descubre todos los servicios de Up Estudio Dental y Est\xE9tica: revisiones, medicina est\xE9tica, blanqueamiento dental y limpieza bucal, cada uno con su ficha detallada.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen" id="services-section" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Header", $$Header, { "title": "Nuestros Servicios", "description": "Descubre todos nuestros servicios y ent\xE9rate de todo lo que ofrecemos en Up \u{1F60E}", "data-astro-cid-ucd2ps2b": true })} ${renderComponent($$result2, "Index", $$Index, { "data-astro-cid-ucd2ps2b": true })} </section> ` })} `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
