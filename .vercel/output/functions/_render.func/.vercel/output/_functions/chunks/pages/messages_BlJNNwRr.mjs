/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, k as Fragment, h as addAttribute } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { $ as $$Header } from './blanqueamiento-dental_iaNAS4c9.mjs';
import { $ as $$NavButton } from './index_CSpV8g2m.mjs';
import 'clsx';
/* empty css                             */
import { $ as $$Layout } from './404_Chrp7w36.mjs';

const $$Astro$4 = createAstro();
const $$Star = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Star;
  return renderTemplate`${maybeRenderHead()}<svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" fill="currentColor"></path> </svg>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Comments/Star.astro", void 0);

const $$Astro$3 = createAstro();
const $$Stars = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Stars;
  const { rating } = Astro2.props;
  const starsRating = [0, 0, 0, 0, 0];
  let index = 0;
  let currentRating = rating;
  const decimalValue = rating % 1;
  while (index < starsRating.length && currentRating > 0) {
    currentRating--;
    if (currentRating < 0) starsRating[index] = decimalValue;
    else starsRating[index] = 1;
    index++;
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center text-[yellow]"> <p class="mr-2 font-bold">${rating}</p> ${starsRating.map((rating2) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${rating2 == 1 && renderTemplate`${renderComponent($$result2, "Star", $$Star, {})}`}` })}`)} </div>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Comments/Stars.astro", void 0);

const $$Astro$2 = createAstro();
const $$ReviewCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReviewCard;
  const {
    author_name,
    author_url,
    language,
    original_language,
    profile_photo_url,
    rating,
    relative_time_description,
    text,
    time,
    translated
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="backdrop-blur-md maw-w-[80ch] rounded-md border flex flex-col items-center justify-start p-5 gap-2"> <h2 class="text-xl font-bold">${author_name}</h2> <img${addAttribute(profile_photo_url, "src")} alt="Foto de perfil de " +author_name> <div class="flex flex-wrap items-end gap-2 justify-center"> ${renderComponent($$result, "Stars", $$Stars, { "rating": rating })} <div class="text-xs text-primary/80">${relative_time_description}</div> </div> <p class="max-w-[50ch] flex-1 flex items-start text-left p-2 text-base">
"${text}"
</p> ${renderComponent($$result, "NavButton", $$NavButton, { "path": "https://www.google.com/search?client=opera-gx&hs=B1S&sa=X&sca_esv=4a03b7477bdd569e&sca_upv=1&hl=es-ES&tbm=lcl&sxsrf=ADLYWIKKqNj7DCb5RTc_SMU70KjLp0Uaxw:1723205518691&q=Up+Estudio+Dental+Rese\xF1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDczNjMxNTA1NjcwMTa3NDC2MNjAyPiKUSq0QMG1uKQ0JTNfwSU1ryQxRyEotTj18MbE4kWseCQBMZ9zCVUAAAA&rldimm=17636450537043790380&ved=2ahUKEwiu7cPm8OeHAxUUVKQEHedAPbkQ9fQKegQISBAF&biw=1879&bih=969&dpr=1#lkt=LocalPoiReviews", "styles": "bg-secondary", "newPage": true }, { "default": ($$result2) => renderTemplate`Ver Reseña` })} </article>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Comments/ReviewCard.astro", void 0);

const mockData = [
  {
    author_name: "Sergiu Alex",
    author_url: "https://www.google.com/maps/contrib/114453174686327150848/reviews",
    language: "es",
    original_language: "es",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXw7jz16vwe_s9oz2VNnhTmOzsGytl_0-E8jx9bS16FZOHxXeM=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 2 meses",
    text: "Gracias por vuestros servicios. Recomendable 100%. La Dra Isabel me trato de maravilla y tienen un zona para los peques que se entretengan. Lo mejor que tiene pinta de caro pero es mas barato que Vivanta o Vitaldent. Probadlo y me contais 😉",
    time: 1716400592,
    translated: false
  },
  {
    author_name: "Lázaro Guerrero Izquierdo",
    author_url: "https://www.google.com/maps/contrib/115036854768515827900/reviews",
    language: "es",
    original_language: "es",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocI7AEbQw74Sz0Z9H2qlM6-ktryu9zld88-7apXGCW5Ck5ZsOg=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Fui a la clínica para informarme sobre la posibilidad de un tratamiento de ortodoncia, y la doctora Cristina la ortodoncista, me comentó una oferta que había el 23 y 24 de mayo. Si me hacía el tratamiento de invisalign, me REGALABAN  UN BLANQUEAMIENTO Y UNA LIMPIEZA, GRATIS.\nEncantado con el trato.",
    time: 1714488929,
    translated: false
  },
  {
    author_name: "Mónica Baro Fernández",
    author_url: "https://www.google.com/maps/contrib/113540615182610964469/reviews",
    language: "es",
    original_language: "es",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUbo5OkX-SqoEhvFF13RLCXrAItCJva9IO8JR6jUS6uLJFN9nhG=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "Hace 2 meses",
    text: "Encantada con todos los profesionales con los que he tenido el placer de tratar en la clínica. La ortodoncista una maravilla, voy a iniciar un tratamiento con invisalign y de momento todo bien. Toda mi familia vendrá aquí también para odontología general, muy contenta con el servicio :)",
    time: 1716488616,
    translated: false
  },
  {
    author_name: "Marta Olmos",
    author_url: "https://www.google.com/maps/contrib/105212646112855473610/reviews",
    language: "es",
    original_language: "es",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLmM8WFCB5DKOwhjznM6gkWLhnUkrbJLCCHHaLwXMN_SNVkEA=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 4 meses",
    text: "Estupendos profesionales.\nTratamientos a muy buen precio.\nTrabajo estupendo tanto conmigo como con mis hijos.\nA partir de ahora será nuestra clínica dental.",
    time: 1710957478,
    translated: false
  },
  {
    author_name: "Eduardo Caballero",
    author_url: "https://www.google.com/maps/contrib/110342793504439757060/reviews",
    language: "es",
    original_language: "es",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJfH2lAcjbCeCCsw_9cLHVrci8je_m8VGg5QDdxPVQRacwxhg=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Salí muy contento con el trato y la calidad del servicio, volveré pronto!",
    time: 1714216935,
    translated: false
  }
];
const getReviews = async () => {
  return mockData;
};

const $$Astro$1 = createAstro();
const $$Opinions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Opinions;
  const reviews = await getReviews();
  return renderTemplate`${maybeRenderHead()}<section class="pb-20" id="opinions-section" data-astro-cid-f5dhcptz> ${renderComponent($$result, "Header", $$Header, { "title": "Opiniones", "description": "Aqu\xED puedes ver las \xFAltimas opiniones de nuestros clientes", "data-astro-cid-f5dhcptz": true })} <section class="flex gap-5 justify-center w-full flex-wrap p-2" data-astro-cid-f5dhcptz> ${reviews.map((review) => renderTemplate`${renderComponent($$result, "ReviewCard", $$ReviewCard, { "author_name": review.author_name, "author_url": review.author_url, "language": review.language, "original_language": review.original_language, "profile_photo_url": review.profile_photo_url, "rating": review.rating, "relative_time_description": review.relative_time_description, "text": review.text, "time": review.time, "translated": review.translated, "data-astro-cid-f5dhcptz": true })}`)} </section> </section> `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Comments/Opinions.astro", void 0);

const $$Astro = createAstro();
const $$Messages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Messages;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Opiniones", "description": "Opiniones de nuestros clientes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Opinions", $$Opinions, {})} ` })}`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/messages.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/messages.astro";
const $$url = "/messages";

export { $$Messages as default, $$file as file, $$url as url };
