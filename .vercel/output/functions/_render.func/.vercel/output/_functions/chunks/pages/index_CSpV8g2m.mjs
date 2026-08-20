/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderSlot, j as renderComponent } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { b as $$Image, $ as $$Layout } from './404_Chrp7w36.mjs';
import 'clsx';
import { $ as $$ContactInfo } from './contact_Cq8YbPN1.mjs';
/* empty css                          */

const $$Astro$7 = createAstro();
const $$NavButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NavButton;
  const { path, styles, newPage = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(path, "href")}${addAttribute(`${styles} py-3 px-6 shadow-md rounded-full font-bold hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 md:text-base text-sm transition-all duration-200 hover:opacity-100 opacity-90 inline-block`, "class")}${addAttribute(`${newPage ? "_blank" : "_self"}`, "target")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Templates/NavButton.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="bg-no-repeat bg-cover bg-center w-full min-h-dvh text-white text-pretty flex justify-center flex-col text-left bg-contrast pt-24 pb-10" id="hero-section" data-astro-cid-ocrortkz> <article class="p-5 flex justify-evenly flex-wrap gap-8 items-center w-full" data-astro-cid-ocrortkz> <section class="animate-fade-in-down md:animate-fade-in-right border border-white/15 bg-black/20 rounded-xl p-6 md:p-8 backdrop-blur-sm max-w-xl" data-astro-cid-ocrortkz> <header data-astro-cid-ocrortkz> <p class="font-bold text-sm md:text-base tracking-widest uppercase text-corporative" data-astro-cid-ocrortkz>¡Bienvenid@s!</p> <h1 class="text-3xl md:text-5xl font-[900] leading-tight my-4" data-astro-cid-ocrortkz>
Up Estudio Dental y Estética
</h1> </header> <article class="font-medium text-sm text-pretty md:text-base text-white/85" data-astro-cid-ocrortkz> <p class="max-w-[60ch] leading-relaxed" data-astro-cid-ocrortkz>
Cuidamos de tu sonrisa y tu bienestar con todo el corazón. Un
          espacio pensado para toda la familia, con áreas para los más
          peques, música relajante y un ambiente cálido que te hará sentir
          como en casa.
</p> </article> <ul class="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-xs md:text-sm text-white/75 font-semibold" data-astro-cid-ocrortkz> <li class="flex items-center gap-1.5" data-astro-cid-ocrortkz> <span class="text-corporative" data-astro-cid-ocrortkz>★★★★★</span> 5.0 en Google
</li> <li class="flex items-center gap-1.5 before:content-['·'] before:text-white/30" data-astro-cid-ocrortkz>
Desde 2022 en Móstoles
</li> <li class="flex items-center gap-1.5 before:content-['·'] before:text-white/30" data-astro-cid-ocrortkz>
Urgencias 24h
</li> </ul> <nav class="flex mt-7 flex-wrap items-center gap-4" data-astro-cid-ocrortkz> ${renderComponent($$result, "NavButton", $$NavButton, { "path": "/contact", "styles": "bg-corporative text-secondary", "data-astro-cid-ocrortkz": true }, { "default": ($$result2) => renderTemplate`
Pide tu cita
` })} ${renderComponent($$result, "NavButton", $$NavButton, { "path": "/clinic", "styles": "bg-transparent border border-white/30 text-white", "data-astro-cid-ocrortkz": true }, { "default": ($$result2) => renderTemplate`
Descubre nuestra clínica
` })} </nav> </section> ${renderComponent($$result, "ContactInfo", $$ContactInfo, { "data-astro-cid-ocrortkz": true })} </article> </section> `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Home/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$TrustBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TrustBar;
  const stats = [
    { value: "5.0 \u2605", label: "Valoraci\xF3n en Google" },
    { value: "2022", label: "A\xF1o de fundaci\xF3n" },
    { value: "24h", label: "Urgencias odontol\xF3gicas" },
    { value: "100%", label: "Atenci\xF3n familiar" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-secondary border-t border-white/10 px-5 py-8"> <ul class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center"> ${stats.map((stat, i) => renderTemplate`<li${addAttribute(`flex flex-col gap-1 ${i > 0 ? "md:border-l md:border-white/10" : ""}`, "class")}> <span class="text-2xl md:text-3xl font-[900] text-corporative">${stat.value}</span> <span class="text-xs md:text-sm text-white/60 font-medium">${stat.label}</span> </li>`)} </ul> </section>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Home/TrustBar.astro", void 0);

const entryPhoto = new Proxy({"src":"/_astro/up-entry.PEv5gQQd.webp","width":250,"height":166,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/img/up-entry.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$ClinicIntro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClinicIntro;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-5 bg-[#fdfdfd]" id="introSection" data-astro-cid-sgs3yujs> <article class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center p-6 md:p-10 shadow-md gap-y-10 rounded-xl bg-primary border" id="introArticle" data-astro-cid-sgs3yujs> ${renderComponent($$result, "Image", $$Image, { "src": entryPhoto, "alt": "Entrada de Up Estudio Dental y Est\xE9tica", "class": "w-full h-72 md:h-[26rem] object-cover rounded-lg shadow-md order-1 md:order-2", "data-astro-cid-sgs3yujs": true })} <div class="flex flex-col gap-7 order-2 md:order-1" data-astro-cid-sgs3yujs> <header data-astro-cid-sgs3yujs> <p class="text-xs font-bold uppercase tracking-widest text-corporative/80 mb-2" data-astro-cid-sgs3yujs>Sobre nosotros</p> <h2 class="font-bold text-3xl md:text-4xl text-black leading-tight" data-astro-cid-sgs3yujs>
Dientes sanos y piel radiante
</h2> </header> <div class="flex flex-col gap-5 leading-relaxed" data-astro-cid-sgs3yujs> <p class="text-black/75" data-astro-cid-sgs3yujs> <strong class="text-black" data-astro-cid-sgs3yujs>Desde 2022</strong> somos más que una clínica
          dental: unimos odontología y medicina estética facial con un enfoque
          único y cercano, en un espacio donde cada paciente se siente como en
          casa.
</p> <p class="text-black/75" data-astro-cid-sgs3yujs>
Con la experiencia combinada de la <a href="/member/cristina" class="font-bold text-black hover:text-corporative transition-colors" data-astro-cid-sgs3yujs>Dra. Cristina Umerez</a>, odontopediatra y ortodoncista, y <a href="/member/juan" class="font-bold text-black hover:text-corporative transition-colors" data-astro-cid-sgs3yujs>Juan Carlos Pereira</a>, experto en ingeniería industrial y gestión empresarial, creamos
          tratamientos personalizados con tecnología de vanguardia y un
          enfoque compasivo.
</p> <p class="text-black/75" data-astro-cid-sgs3yujs>
Nos comprometemos a ayudarte a lograr una <strong class="text-black" data-astro-cid-sgs3yujs>sonrisa saludable</strong>
y una <strong class="text-black" data-astro-cid-sgs3yujs>piel radiante</strong>, porque tu bienestar es nuestra prioridad.
</p> </div> ${renderComponent($$result, "NavButton", $$NavButton, { "path": "/team", "styles": "text-white bg-secondary w-fit", "data-astro-cid-sgs3yujs": true }, { "default": ($$result2) => renderTemplate`
Conócenos
` })} </div> </article> </section>  `;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Home/ClinicIntro.astro", void 0);

const $$Astro$3 = createAstro();
const $$ServicesPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesPreview;
  const services = [
    {
      title: "Revisiones Dentales",
      description: "Chequeos peri\xF3dicos para cuidar tu salud bucal a largo plazo.",
      href: "/services#dental-checkups"
    },
    {
      title: "Medicina Est\xE9tica",
      description: "Tratamientos faciales para realzar tu belleza natural.",
      href: "/services#stetic-medicine-section"
    },
    {
      title: "Blanqueamiento Dental",
      description: "Recupera el brillo de tu sonrisa con total seguridad.",
      href: "/services"
    },
    {
      title: "Limpieza Bucal",
      description: "Higiene profesional para una boca sana y radiante.",
      href: "/services"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-5 bg-[#fdfdfd]"> <div class="max-w-6xl mx-auto flex flex-col gap-10"> <header class="text-center max-w-2xl mx-auto"> <p class="text-xs font-bold uppercase tracking-widest text-corporative/80 mb-2">Qué ofrecemos</p> <h2 class="font-bold text-3xl md:text-4xl text-black">Nuestros servicios</h2> <p class="text-black/70 mt-3">
Un cuidado integral para tu sonrisa y tu piel, con un enfoque cercano
        en cada visita.
</p> </header> <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"> ${services.map((service) => renderTemplate`<a${addAttribute(service.href, "href")} class="group flex flex-col gap-3 p-6 rounded-xl border border-black/10 bg-primary shadow-sm hover:shadow-lg hover:border-corporative/50 hover:-translate-y-1 transition-all"> <span class="w-10 h-10 rounded-full bg-corporative/15 text-corporative font-bold flex items-center justify-center group-hover:bg-corporative group-hover:text-primary transition-colors">
+
</span> <h3 class="font-bold text-black text-lg">${service.title}</h3> <p class="text-sm text-black/65 leading-relaxed">${service.description}</p> <span class="text-sm font-bold text-corporative mt-auto group-hover:underline">
Saber más →
</span> </a>`)} </div> </div> </section>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Home/ServicesPreview.astro", void 0);

const JuanCarlosTiti = new Proxy({"src":"/_astro/juan-carlos.ZNaxCYbk.webp","width":420,"height":635,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/img/Team/juan-carlos.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$TextImageSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextImageSection;
  const { imageSrc, imageAlt, sectionStyles, articleStyles, imageStyles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`row-center px-5 min-h-[60vh] py-10 flex-wrap min-[1210px]:gap-0 gap-5 ${sectionStyles}`, "class")}> <article${addAttribute(`h-full p-10 leading-8 flex flex-col items-center justify-between min-h-[60vh] border ${articleStyles}`, "class")}> ${renderSlot($$result, $$slots["title"])} ${renderSlot($$result, $$slots["text"])} ${renderSlot($$result, $$slots["button"])} </article> ${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": imageAlt, "class": `w-auto min-[1210px]:h-[60vh] ${imageStyles}` })} </section>`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Templates/TextImageSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$FamiliarTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FamiliarTeam;
  return renderTemplate`${renderComponent($$result, "TextImageSection", $$TextImageSection, { "imageSrc": JuanCarlosTiti, "imageAlt": "Juan Carlos & Cristina", "articleStyles": "min-[1210px]:border-r-0 rounded-l-md min-[1210px]:shadow-none shadow-md min-[1210px]:rounded-r-none rounded-r-md bg-primary", "imageStyles": "rounded-r-md min-[1210px]:rounded-l-none rounded-l-md min-[1210px]:shadow-none shadow-md" }, { "button": ($$result2) => renderTemplate`${renderComponent($$result2, "NavButton", $$NavButton, { "slot": "button", "path": "/team", "styles": "bg-secondary text-white" }, { "default": ($$result3) => renderTemplate`Nuestro Equipo` })}`, "text": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-5"> <p class="max-w-[60ch] text-black/75 leading-relaxed">
Profesionalidad y dedicación son nuestra seña de identidad. Nos
      mantenemos actualizados con las últimas técnicas y tecnologías,
      garantizando tratamientos de alta calidad y resultados excepcionales,
      con una atención basada en la empatía y el cuidado compasivo.
</p> <ul class="flex flex-col gap-2 text-sm md:text-base text-black/80 font-medium"> <li class="flex items-center gap-2"> <span class="text-corporative font-bold">✓</span> Especialistas cualificados en odontología y estética facial
</li> <li class="flex items-center gap-2"> <span class="text-corporative font-bold">✓</span> Tecnología de vanguardia en cada tratamiento
</li> <li class="flex items-center gap-2"> <span class="text-corporative font-bold">✓</span> Trato cercano, seguro y personalizado
</li> </ul> </div>`, "title": ($$result2) => renderTemplate`<div> <p class="text-xs font-bold uppercase tracking-widest text-corporative/80 mb-2">Nuestro equipo</p> <h2 class="font-bold text-2xl md:text-3xl">Un equipo familiar</h2> </div>` })}`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Home/FamiliarTeam.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "description": "P\xE1gina web oficial de Up estudio dental y est\xE9tica, tu dentista de confianza en M\xF3stoles, Madrid." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TrustBar", $$TrustBar, {})} ${maybeRenderHead()}<section class="bg-[#fdfdfd] text-black"> ${renderComponent($$result2, "ClinicIntro", $$ClinicIntro, {})} ${renderComponent($$result2, "ServicesPreview", $$ServicesPreview, {})} ${renderComponent($$result2, "FamiliarTeam", $$FamiliarTeam, {})} </section> ` })}`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$NavButton as $, index as i };
