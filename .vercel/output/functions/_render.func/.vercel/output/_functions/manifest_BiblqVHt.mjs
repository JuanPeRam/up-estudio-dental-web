import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_DXoMm21L.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#not-found-section[data-astro-cid-zetdm5md]{background-image:linear-gradient(to top right,#0000005d,#ffffffab),url(img/UP-Gallery/Kitchen3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CDdcRUqL.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#clinic-section[data-astro-cid-ed5l3uc7]{background-image:linear-gradient(to bottom left,#0000005d,#ffffff57),url(img/UP-Gallery/Kitchen.jpg);background-repeat:no-repeat;background-size:cover;background-position:center}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/clinic","isIndex":false,"type":"page","pattern":"^\\/clinic\\/?$","segments":[[{"content":"clinic","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clinic.astro","pathname":"/clinic","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"textarea[data-astro-cid-bosmunrk]{field-sizing:content;max-height:150px;resize:none}input[data-astro-cid-bosmunrk][type=checkbox]:checked:before{content:\"✓\";display:block;text-align:center;font-size:12px}#form-section[data-astro-cid-uw5kdbxl]{background-image:linear-gradient(to top right,#1313135d,#585858ab),url(img/UP-Gallery/Rest-room.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"section[data-astro-cid-x3vkudht]{background-image:linear-gradient(to top right,#1313135d,#58585842),url(img/UP-Gallery/Office2.jpg);background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/member/[id]","isIndex":false,"type":"page","pattern":"^\\/member\\/([^/]+?)\\/?$","segments":[[{"content":"member","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/member/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#opinions-section[data-astro-cid-f5dhcptz]{background-image:linear-gradient(to top right,#1313135d,#585858ab),url(img/UP-Gallery/Box23.jpg);background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-position:center}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/messages","isIndex":false,"type":"page","pattern":"^\\/messages\\/?$","segments":[[{"content":"messages","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/messages.astro","pathname":"/messages","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/privacy-policy","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.astro","pathname":"/privacy-policy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#service-hero[data-astro-cid-qxhfxrhi]{background-image:linear-gradient(to top right,#1313135d,#585858ab),url(img/UP-Gallery/Box22.jpg);background-repeat:no-repeat;background-size:cover;background-position:center}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/services/blanqueamiento-dental","isIndex":false,"type":"page","pattern":"^\\/services\\/blanqueamiento-dental\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"blanqueamiento-dental","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/blanqueamiento-dental.astro","pathname":"/services/blanqueamiento-dental","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#service-hero[data-astro-cid-lrhqdr5i]{background-image:linear-gradient(to top right,#1313135d,#585858ab),url(img/UP-Gallery/Box12.jpg);background-repeat:no-repeat;background-size:cover;background-position:center}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/services/limpieza-bucal","isIndex":false,"type":"page","pattern":"^\\/services\\/limpieza-bucal\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"limpieza-bucal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/limpieza-bucal.astro","pathname":"/services/limpieza-bucal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/services/medicina-estetica","isIndex":false,"type":"page","pattern":"^\\/services\\/medicina-estetica\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"medicina-estetica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/medicina-estetica.astro","pathname":"/services/medicina-estetica","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#service-hero[data-astro-cid-veivntnr]{background-image:linear-gradient(to top right,#1313135d,#585858ab),url(img/UP-Gallery/Boxes.jpg);background-repeat:no-repeat;background-size:cover;background-position:center}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/services/revisiones-dentales","isIndex":false,"type":"page","pattern":"^\\/services\\/revisiones-dentales\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"revisiones-dentales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/revisiones-dentales.astro","pathname":"/services/revisiones-dentales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#services-list[data-astro-cid-ufyqpfus]{display:grid;gap:1.25rem;grid-template-columns:repeat(auto-fit,minmax(18rem,.75fr));place-content:center}#services-section[data-astro-cid-ucd2ps2b]{background-image:linear-gradient(to top right,#1313135d,#585858ab),url(img/UP-Gallery/Boxes.jpg);background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-position:center}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHrC8mcO.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#member-description[data-astro-cid-42id6day]{transition:opacity .2s ease}@keyframes grow{0%{transform:scale(0);opacity:50%}to{transform:scale(1);opacity:1}0%{transform:scale(0);opacity:50%}}.team-card[data-astro-cid-42id6day]{animation:grow both linear;animation-timeline:view();animation-range:entry -100% cover 50%}section[data-astro-cid-6sqsh2pf]{background-image:linear-gradient(to top right,#13131311,#58585846),url(img/UP-Gallery/Office2.jpg);background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/team","isIndex":false,"type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6c35vknR.js"}],"styles":[{"type":"external","src":"/_astro/clinic.Ca517FLI.css"},{"type":"inline","content":"#hero-section[data-astro-cid-ocrortkz]{background-image:linear-gradient(to top right,#1313135d,#585858ab),url(img/UP-Gallery/Up-Board.jpg);background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-position:center}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.sectionShown[data-astro-cid-sgs3yujs]{animation:fade-in .6s ease-in both}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Common/NavBar.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/clinic.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/clinic@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/member/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/member/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/messages.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/messages@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/privacy-policy.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/privacy-policy@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/blanqueamiento-dental.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/blanqueamiento-dental@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/limpieza-bucal.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/limpieza-bucal@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/medicina-estetica.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/medicina-estetica@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/services/revisiones-dentales.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/revisiones-dentales@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/pages/team.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/team@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Common/ContactInfo.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/Home/Hero.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/src/components/OurTeam.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/clinic.astro":"chunks/pages/clinic_BY1eyIOY.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CnhbQ1Mb.mjs","/src/pages/services/limpieza-bucal.astro":"chunks/pages/limpieza-bucal_CxeVjN5z.mjs","/src/pages/services/medicina-estetica.astro":"chunks/pages/medicina-estetica_C5g0084R.mjs","/src/pages/messages.astro":"chunks/pages/messages_BlJNNwRr.mjs","/src/pages/privacy-policy.astro":"chunks/pages/privacy-policy_DRwU99O0.mjs","/src/pages/services/revisiones-dentales.astro":"chunks/pages/revisiones-dentales_Dy5dwaoT.mjs","/src/pages/services.astro":"chunks/pages/services_oXlxQhVT.mjs","/src/pages/team.astro":"chunks/pages/team_BMPgZnsX.mjs","\u0000@astrojs-manifest":"manifest_BiblqVHt.mjs","C:/Users/Pere/Documents/GitHub/up-estudio-dental-web/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Bwl5bxnk.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_D6F1RoV7.mjs","\u0000@astro-page:src/pages/clinic@_@astro":"chunks/clinic_DGBC8FOx.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_BaxehE2N.mjs","\u0000@astro-page:src/pages/member/[id]@_@astro":"chunks/_id__QVgwKv7C.mjs","\u0000@astro-page:src/pages/messages@_@astro":"chunks/messages_BNKiaAv5.mjs","\u0000@astro-page:src/pages/privacy-policy@_@astro":"chunks/privacy-policy_DH3CX7Qs.mjs","\u0000@astro-page:src/pages/services/blanqueamiento-dental@_@astro":"chunks/blanqueamiento-dental_CwOJYknC.mjs","\u0000@astro-page:src/pages/services/limpieza-bucal@_@astro":"chunks/limpieza-bucal_BdcD8UIR.mjs","\u0000@astro-page:src/pages/services/medicina-estetica@_@astro":"chunks/medicina-estetica_Bndl2Txu.mjs","\u0000@astro-page:src/pages/services/revisiones-dentales@_@astro":"chunks/revisiones-dentales_dPLJftOF.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_COwzLgaK.mjs","\u0000@astro-page:src/pages/team@_@astro":"chunks/team_C5K6OnL3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BTlP7ejs.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CDdcRUqL.js","/astro/hoisted.js?q=1":"_astro/hoisted.6c35vknR.js","/astro/hoisted.js?q=2":"_astro/hoisted.DHrC8mcO.js","@astrojs/react/client.js":"_astro/client.CwWKiGVO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/libre-baskerville-latin-400-normal.jJI4ANT2.woff2","/_astro/libre-baskerville-latin-ext-400-normal.BQxDBgAe.woff2","/_astro/juan-carlos.ZNaxCYbk.webp","/_astro/up-entry.PEv5gQQd.webp","/_astro/libre-baskerville-latin-400-normal.DY5EiaPJ.woff","/_astro/libre-baskerville-latin-ext-400-normal.DUVX6EAV.woff","/_astro/up-logo-white.CrdHkq_s.png","/_astro/clinic.Ca517FLI.css","/favicon.svg","/star.svg","/img/algo.jpg","/img/nature.jpg","/img/up-entry.webp","/img/up-logo-white.png","/img/up-logo.jpg","/img/up-logo.png","/img/up-logo.webp","/img/up-table.webp","/_astro/client.CwWKiGVO.js","/_astro/hoisted.6c35vknR.js","/_astro/hoisted.CDdcRUqL.js","/_astro/hoisted.DHrC8mcO.js","/img/Team/claudia.webp","/img/Team/cristina.webp","/img/Team/isabel.webp","/img/Team/juan-carlos.webp","/img/Team/nilyam.webp","/img/Team/rafael-dario.webp","/img/UP-Gallery/Bathroom.jpg","/img/UP-Gallery/Bathroom2.jpg","/img/UP-Gallery/Bathroom3.jpg","/img/UP-Gallery/Box1.jpg","/img/UP-Gallery/Box12.jpg","/img/UP-Gallery/Box2.jpg","/img/UP-Gallery/Box22.jpg","/img/UP-Gallery/Box23.jpg","/img/UP-Gallery/Boxes.jpg","/img/UP-Gallery/Entry2.jpg","/img/UP-Gallery/Entry3.jpg","/img/UP-Gallery/Kitchen.jpg","/img/UP-Gallery/Kitchen2.jpg","/img/UP-Gallery/Kitchen3.jpg","/img/UP-Gallery/Kitchen4.jpg","/img/UP-Gallery/Office.jpg","/img/UP-Gallery/Office2.jpg","/img/UP-Gallery/Rest-room.jpg","/img/UP-Gallery/Up-Board.jpg","/img/UP-Gallery/Up-Boxes.jpg","/img/UP-Gallery/Up-Cabin.jpeg","/img/UP-Gallery/Up-Chairs.jpg","/img/UP-Gallery/Up-Entry.jpg","/img/UP-Gallery/Up-Machine.jpg","/img/UP-Gallery/Up-WaitRoom.jpg","/img/UP-Gallery/Uplogo.webp"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
