/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_Chrp7w36.mjs';
import 'clsx';
import { $ as $$Header } from './blanqueamiento-dental_iaNAS4c9.mjs';
/* empty css                           */

const images_path = 'img/UP-Gallery';

const gallery = [
    {
        name: 'Bathroom of the clinic',
        src: `${images_path}/Bathroom.jpg`
    },
    {
        name: 'Bathroom2.jpg',
        src: `${images_path}/Bathroom2.jpg`
    },
    {
        name: 'Bathroom3.jpg',
        src: `${images_path}/Bathroom3.jpg`
    },
    {
        name: 'Box1.jpg',
        src: `${images_path}/Box1.jpg`
    },
    {
        name: 'Box2.jpg',
        src: `${images_path}/Box2.jpg`
    },
    {
        name: 'Box12.jpg',
        src: `${images_path}/Box12.jpg`
    },
    {
        name: 'Box22.jpg',
        src: `${images_path}/Box22.jpg`
    },
    {
        name: 'Box23.jpg',
        src: `${images_path}/Box23.jpg`
    },
    {
        name: 'Boxes.jpg',
        src: `${images_path}/Boxes.jpg`
    },
    {
        name: 'Entry2.jpg',
        src: `${images_path}/Entry2.jpg`
    },
    {
        name: 'Entry3.jpg',
        src: `${images_path}/Entry3.jpg`
    },
    {
        name: 'Kitchen.jpg',
        src: `${images_path}/Kitchen.jpg`
    },
    {
        name: 'Kitchen2.jpg',
        src: `${images_path}/Kitchen2.jpg`
    },
    {
        name: 'Kitchen3.jpg',
        src: `${images_path}/Kitchen3.jpg`
    },
    {
        name: 'Kitchen4.jpg',
        src: `${images_path}/Kitchen4.jpg`
    },
    {
        name: 'Office.jpg',
        src: `${images_path}/Office.jpg`
    },
    {
        name: 'Office2.jpg',
        src: `${images_path}/Office2.jpg`
    },
    {
        name: 'Rest-room.jpg',
        src: `${images_path}/Rest-room.jpg`
    },
    {
        name: 'Up-Board.jpg',
        src: `${images_path}/Up-Board.jpg`
    },
    {
        name: 'Up-Boxes.jpg',
        src: `${images_path}/Up-Boxes.jpg`
    },
    {
        name: 'Up-Cabin.jpeg',
        src: `${images_path}/Up-Cabin.jpeg`
    },
    {
        name: 'Up-Entry.jpg',
        src: `${images_path}/Up-Entry.jpg`
    },
    {
        name: 'Up-Machine.jpg',
        src: `${images_path}/Up-Machine.jpg`
    },
    {
        name: 'Up-WaitRoom.jpg',
        src: `${images_path}/Up-WaitRoom.jpg`
    }
];

const $$Astro$1 = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gallery;
  const spanOverrides = {
    "Bathroom.jpg": "big",
    "Kitchen2.jpg": "big",
    "Kitchen4.jpg": "tall",
    "Up-Board.jpg": "tall",
    "Box2.jpg": "wide",
    "Entry2.jpg": "wide",
    "Office2.jpg": "wide",
    "Up-Entry.jpg": "wide"
  };
  const spanClasses = {
    big: "col-span-2 row-span-2",
    wide: "col-span-2 row-span-1",
    tall: "col-span-1 row-span-2",
    normal: "col-span-1 row-span-1"
  };
  function cleanLabel(name) {
    return name.replace(/\.(jpe?g|png|webp)$/i, "").replace(/-/g, " ").replace(/(\d+)$/, " $1").trim();
  }
  const items = gallery.map((image, index) => ({
    src: image.src,
    index,
    span: spanClasses[spanOverrides[image.name] ?? "normal"],
    alt: `${cleanLabel(image.name)} \u2014 Cl\xEDnica Up Estudio Dental`
  }));
  return renderTemplate`${maybeRenderHead()}<section class="w-full px-4 sm:px-6 lg:px-10 py-6" id="gallery-section"> <div id="gallery-grid" class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-[170px] gap-2 sm:gap-3 grid-flow-dense max-w-6xl mx-auto"> ${items.map((item) => renderTemplate`<button type="button"${addAttribute(`group relative overflow-hidden rounded-md bg-contrast focus-visible:outline focus-visible:outline-2 focus-visible:outline-corporative ${item.span}`, "class")}${addAttribute(item.index, "data-index")}${addAttribute(`Ampliar imagen: ${item.alt}`, "aria-label")}> <img${addAttribute(item.src, "src")}${addAttribute(item.alt, "alt")} loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110 group-hover:brightness-90"> <span class="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition group-hover:opacity-100"> <svg class="h-7 w-7 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path> </svg> </span> </button>`)} </div> </section> <div id="lightbox" class="fixed inset-0 z-[100] hidden items-center justify-center bg-secondary/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Visor de imágenes de la galería"> <button id="lightbox-close" type="button" aria-label="Cerrar visor" class="absolute right-3 top-3 rounded-full p-3 text-white/80 transition hover:bg-white/10 hover:text-white md:right-6 md:top-6"> <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"></path> </svg> </button> <button id="lightbox-prev" type="button" aria-label="Imagen anterior" class="absolute left-1 top-1/2 -translate-y-1/2 rounded-full p-3 text-white/80 transition hover:bg-white/10 hover:text-white sm:left-3 md:left-6"> <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6"></path> </svg> </button> <figure class="flex max-w-[92vw] flex-col items-center gap-3"> <img id="lightbox-image" src="" alt="" class="max-h-[76vh] max-w-[92vw] rounded-md object-contain shadow-2xl sm:max-h-[82vh]"> <figcaption class="flex items-center gap-3 text-sm text-white/70"> <span id="lightbox-caption"></span> <span aria-hidden="true">·</span> <span id="lightbox-counter"></span> </figcaption> </figure> <button id="lightbox-next" type="button" aria-label="Imagen siguiente" class="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-3 text-white/80 transition hover:bg-white/10 hover:text-white sm:right-3 md:right-6"> <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6"></path> </svg> </button> </div> `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Gallery/Gallery.astro", void 0);

const $$Astro = createAstro();
const $$Clinic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clinic;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cl\xEDnica", "description": "Recorre nuestras instalaciones en M\xF3stoles: gabinetes, sala de espera y equipamiento de Up Estudio Dental y Est\xE9tica.", "data-astro-cid-ed5l3uc7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="clinic-section" data-astro-cid-ed5l3uc7> ${renderComponent($$result2, "Header", $$Header, { "title": "Nuestra Cl\xEDnica", "description": "Un espacio pensado para que te sientas como en casa, con la \xFAltima tecnolog\xEDa en cada gabinete.", "data-astro-cid-ed5l3uc7": true })} </section> <section class="bg-secondary pb-16" data-astro-cid-ed5l3uc7> ${renderComponent($$result2, "Gallery", $$Gallery, { "data-astro-cid-ed5l3uc7": true })} </section> ` })} `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/clinic.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/clinic.astro";
const $$url = "/clinic";

export { $$Clinic as default, $$file as file, $$url as url };
