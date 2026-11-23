// make.fun entry: news-image-20261122 — "Sum up 22 November's world news in one image"
// Writes the entry image to /output/entry.png.
// Deterministic: copies the fixed entry.png shipped in this repo. No network.
import { copyFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
const out = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error("entry.png missing next to main.ts");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, out);

// Verify the copy is byte-identical.
const a = readFileSync(src);
const b = readFileSync(out);
if (!a.equals(b)) {
  throw new Error("entry.png copy mismatch");
}
console.log(`wrote ${out} (${b.length} bytes)`);
