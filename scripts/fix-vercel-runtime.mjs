// @astrojs/vercel only recognizes the Node majors listed in its own table
// (18-24 in v11). On any newer Node running the build, such as the 26.x set
// in "engines.node", it falls back to an older runtime in .vc-config.json.
//
// This runs after `astro build` (see the "vercel-build" script) and rewrites
// the generated runtime to the Node major that ran the build, which Vercel
// takes from "engines.node" in package.json, so build and functions always
// use the same version.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const TARGET_RUNTIME = `nodejs${process.versions.node.split(".")[0]}.x`;
const configPath = fileURLToPath(
    new URL(
        "../.vercel/output/functions/_render.func/.vc-config.json",
        import.meta.url,
    ),
);

try {
    const raw = await readFile(configPath, "utf-8");
    const config = JSON.parse(raw);

    if (config.runtime === TARGET_RUNTIME) {
        console.log(`.vc-config.json runtime already ${TARGET_RUNTIME}, nothing to patch.`);
    } else {
        const previousRuntime = config.runtime;
        config.runtime = TARGET_RUNTIME;
        await writeFile(configPath, `${JSON.stringify(config, null, "\t")}\n`, "utf-8");
        console.log(`Patched .vc-config.json runtime: ${previousRuntime} -> ${TARGET_RUNTIME}`);
    }
} catch (error) {
    console.error(`Could not patch ${configPath}:`, error.message);
    process.exit(1);
}
