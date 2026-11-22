// Ajusta las rutas con la Content-Security-Policy de las páginas estáticas que escribe
// @astrojs/vercel (opción `staticHeaders`) en .vercel/output/config.json.
//
// El adaptador las escribe como { "src": "/tratamientos", "headers": {…} }: sin anclar y sin
// "continue". Las rutas de Vercel son expresiones regulares, así que "/" sin anclar casa con
// cualquier dirección, y sin "continue" la primera que casa corta la fase de rutas. Para no depender
// de cómo lo interprete Vercel, aquí se dejan igual que las cabeceras de vercel.json:
// { "src": "^/tratamientos$", "headers": {…}, "continue": true }. Así cada página recibe solo su
// cabecera y /contacto, /keystatic y las islas siguen con la que pone la función.
//
// Se ejecuta después de `astro build` en el script "vercel-build".
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const configPath = fileURLToPath(new URL("../.vercel/output/config.json", import.meta.url));
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

try {
    const config = JSON.parse(await readFile(configPath, "utf-8"));
    let fixed = 0;
    for (const route of config.routes ?? []) {
        const headers = Object.keys(route.headers ?? {}).map((h) => h.toLowerCase());
        const onlyCsp = headers.length === 1 && headers[0] === "content-security-policy";
        if (!onlyCsp || route.dest || route.status || typeof route.src !== "string") continue;
        if (!route.src.startsWith("^")) route.src = `^${escapeRegex(route.src)}$`;
        route.continue = true;
        fixed++;
    }
    if (fixed === 0) {
        console.error("No CSP routes found in config.json: is `staticHeaders` still enabled in astro.config.mjs?");
        process.exit(1);
    }
    await writeFile(configPath, `${JSON.stringify(config, null, "\t")}\n`, "utf-8");
    console.log(`Anchored ${fixed} CSP header routes in .vercel/output/config.json.`);
} catch (error) {
    console.error(`Could not patch ${configPath}:`, error.message);
    process.exit(1);
}
