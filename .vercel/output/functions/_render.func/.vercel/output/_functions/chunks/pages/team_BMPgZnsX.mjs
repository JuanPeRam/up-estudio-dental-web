/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderTransition, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_Chrp7w36.mjs';
import 'clsx';
import { t as team } from './_id__Dzs-TVsI.mjs';
/* empty css                         */
/* empty css                          */
import { $ as $$Header } from './blanqueamiento-dental_iaNAS4c9.mjs';

const $$Astro$1 = createAstro();
const $$OurTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OurTeam;
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex justify-center pt-20 flex-col relative" id="team-section" data-astro-cid-42id6day> <section class="flex flex-wrap gap-32 justify-center my-10 animate-slide-in-top" data-astro-cid-42id6day> ${team.map((row) => renderTemplate`<a class="w-[20rem] sm:w-[25rem] team-card flex-col justify-center rounded-lg transition-shadow overflow-hidden backdrop-blur-sm items-center h-fit shadow-lg flex hover:shadow-2xl group"${addAttribute(`member/${row.id}`, "href")} data-astro-cid-42id6day> <div class="h-[29rem] w-full relative" data-astro-cid-42id6day> <img${addAttribute(row.picture, "src")}${addAttribute(`${row.name} picture`, "alt")} class="object-cover w-full h-full group-hover:brightness-110 transition" loading="lazy" data-astro-cid-42id6day${addAttribute(renderTransition($$result, "rosdaoef", "", `${row.id}-image`), "data-astro-transition-scope")}> </div> <div class="h-[10rem] p-5 flex flex-col items-start justify-between w-full bg-contrast/80 group-hover:bg-contrast transition" data-astro-cid-42id6day> <h2 class="text-2xl font-bold" data-astro-cid-42id6day>${row.name}</h2> <div class="flex justify-between w-full items-center" data-astro-cid-42id6day> <div class="flex gap-2" data-astro-cid-42id6day> ${row.roles?.map((role) => renderTemplate`<div class=" text-xs" data-astro-cid-42id6day>${role}</div>`)} </div> <div class="text-sm group-hover:underline" data-astro-cid-42id6day>${`Mostrar m\xE1s`}</div> </div> </div> </a>`)} </section> </section> `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/OurTeam.astro", "self");

const $$Astro = createAstro();
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Team;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestro Equipo", "description": "Les presentamos a nuestro maravilloso equipo. Compuesto por grandes profesionales con gran experiencia en el sector.", "data-astro-cid-6sqsh2pf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-6sqsh2pf> ${renderComponent($$result2, "Header", $$Header, { "title": "Nuestro Equipo", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus veniam nam explicabo minus assumenda ea, placeat harum? Expedita blanditiis vel cum, velit quam nam. Saepe placeat numquam aliquam eveniet?", "styles": "bg-secondary/80", "data-astro-cid-6sqsh2pf": true })} ${renderComponent($$result2, "OurTeam", $$OurTeam, { "data-astro-cid-6sqsh2pf": true })} </section> ` })} `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/team.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/team.astro";
const $$url = "/team";

export { $$Team as default, $$file as file, $$url as url };
