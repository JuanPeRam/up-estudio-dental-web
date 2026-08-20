/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_Chrp7w36.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$SteticTreatment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SteticTreatment;
  const { image, text, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center gap-10 backdrop-blur-md  rounded-md px-10 py-7 shadow-md border"> <img${addAttribute(image, "src")}${addAttribute(`Imagen de ${title}`, "alt")} class="rounded-full transition "> <h2 class="text-xl text-blackTitle font-bold">${title}</h2> <p class="max-w-[40ch] text-base text-blackBodyText">${text}</p> </article>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Services/SteticTreatment.astro", void 0);

const $$Astro$1 = createAstro();
const $$SteticMedicine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SteticMedicine;
  const data = [
    {
      image: "https://static.wixstatic.com/media/d47f72_8c917bab172e4a74b2b3e2a25c98d647~mv2.jpg/v1/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/236a56a9-b8ae-4d28-aeb2-0c5e4f62d9ff.jpg",
      title: "Rejuvenecimiento Facial",
      text: "Es un relleno d\xE9rmico que se aplica en el rostro para rellenar arrugas, l\xEDneas de expresi\xF3n y pliegues, adem\xE1s, estimula la generaci\xF3n del col\xE1geno natural devolviendo la elasticidad y luminosidad a la piel, obteniendo resultados naturales durante largos periodos de tiempo."
    },
    {
      image: "https://static.wixstatic.com/media/d47f72_e253b93cd8e84ffa8d6735ad3d53d8bc~mv2.jpg/v1/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/33149c9b-fafa-4cd1-9578-f0ee68d80120.jpg",
      title: "Tratamiento para eliminar arrugas",
      text: "En la actualidad, eliminar arrugas y l\xEDneas de expresi\xF3n en cuesti\xF3n de segundos es m\xE1s que posible. Lo que hace a\xF1os parec\xEDa una utop\xEDa, hoy es un sue\xF1o hecho realidad gracias a la medicina est\xE9tica."
    },
    {
      image: "https://static.wixstatic.com/media/d47f72_667407e82a1a40d5a28302715497d902~mv2.jpg/v1/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-04-25%20at%2013_52_12%20(1).jpg",
      title: "Aumento de labios con \xE1cido hialur\xF3nico",
      text: "El aumento de labios con \xE1cido hialur\xF3nico es un tratamiento que consiste en aportar volumen al labio y darle forma. Cuando es necesario, tambi\xE9n nos permite corregir peque\xF1as imperfecciones como pueden ser los labios asim\xE9tricos. Este procedimiento es uno de los m\xE1s naturales que podemos encontrar, ya que el \xE1cido hialur\xF3nico es generado por nuestro organismo de manera natural. "
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="column-center gap-5 py-10 px-5 bg-black/30 text-blackTitle bg-primary min-h-screen" id="stetic-medicine-section"> <h1 class="text-2xl font-bold">MEDICINA ESTÉTICA</h1> <p class="max-w-[80ch] text-base text-blackBodyText">Ofrecemos una amplia gama de tratamientos de medicina estética 
        para ayudarte a lograr la apariencia que deseas. Desde rellenos faciales y botox 
        hasta tratamientos corporales, nuestro equipo de expertos te ayudará a sentirte seguro 
        y hermoso/a en tu propia piel.
</p> <section class="gap-5 flex flex-wrap justify-center"> ${data.map((item) => renderTemplate`${renderComponent($$result, "SteticTreatment", $$SteticTreatment, { "title": item.title, "image": item.image, "text": item.text })}`)} </section> </section>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Services/SteticMedicine.astro", void 0);

const $$Astro = createAstro();
const $$MedicinaEstetica = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MedicinaEstetica;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Medicina Est\xE9tica", "description": "Rejuvenecimiento facial, tratamiento de arrugas y aumento de labios con \xE1cido hialur\xF3nico en Up Estudio Dental, M\xF3stoles." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/services" class="block text-center text-sm py-4 bg-primary text-blackBodyText/70 hover:text-corporative transition">← Volver a Servicios</a> ${renderComponent($$result2, "SteticMedicine", $$SteticMedicine, {})} ` })}`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/medicina-estetica.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/medicina-estetica.astro";
const $$url = "/services/medicina-estetica";

export { $$MedicinaEstetica as default, $$file as file, $$url as url };
