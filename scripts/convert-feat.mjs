import sharp from "sharp";
import fs from "fs";
import path from "path";

const srcDir = path.join("..", "photos", "images");
const outDir = path.join("public", "images");
const files = fs
  .readdirSync(srcDir)
  .filter((f) => /\.(jpe?g|png|jfif|webp)$/i.test(f))
  .sort((a, b) => a.localeCompare(b));

console.log("found", files.length);

let i = 1;
const mapping = [];

for (const file of files) {
  const src = path.join(srcDir, file);
  const destName = `feat-${String(i).padStart(2, "0")}.webp`;
  const dest = path.join(outDir, destName);
  try {
    await sharp(src)
      .rotate()
      .resize({
        width: 1200,
        height: 1600,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(dest);
    const kb = Math.round(fs.statSync(dest).size / 1024);
    console.log(destName, kb + "KB", "<-", file.slice(0, 55));
    mapping.push({ destName, file });
    i++;
  } catch (e) {
    console.log("FAIL", file, e.message);
  }
}

fs.writeFileSync("feat-map.json", JSON.stringify(mapping, null, 2));
console.log("done", mapping.length);
