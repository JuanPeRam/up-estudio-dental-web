/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_DXoMm21L.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_Chrp7w36.mjs';

const $$Astro = createAstro();
const $$PrivacyPolicy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrivacyPolicy;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pol\xEDtica de privacidad", "description": "Pol\xEDtica de privacidad de Up Estudio dental" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>sadf</p> ` })}`;
}, "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/privacy-policy.astro", void 0);

const $$file = "C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

export { $$PrivacyPolicy as default, $$file as file, $$url as url };
