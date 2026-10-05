// Downloads the chosen Pexels photos and writes WebP files to public/photos. Prints dimensions.
import sharp from "sharp";
const list = [
  ["houston-skyline-daylight", 34261544], ["reroof-brick-house-texas", 37677476], ["tearoff-brick-house-texas", 34304714],
  ["roofers-loading-shingles", 33404080], ["roofer-nailing-shingles", 33404248], ["roofer-installing-shingles", 37677394],
  ["roofer-repairing-shingle-roof", 38028508], ["roofers-flat-roof-membrane", 39238311], ["roofer-rolling-flat-roof-membrane", 39238328],
  ["metal-roof-with-skylight", 18513462], ["skylights-living-room", 20111726], ["chimney-flashing-repair", 37704237],
  ["attic-rafters-and-vents", 9043415], ["water-dripping-roof-edge", 9554086], ["hail-on-lawn", 8804585],
  ["storm-uprooted-tree", 32394146], ["storm-branch-down-street", 38239815], ["storm-clouds-over-city", 36554432],
  ["roofer-climbing-ladder-gutter", 38346725], ["brick-suburban-home", 31602311], ["brick-colonial-home-houston", 36086367],
  ["aerial-suburban-neighborhood", 17286412], ["galveston-pleasure-pier", 37906632],
  ["before-worn-roof", 6931459],
];
for (const [name, id] of list) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  const info = await sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 72 }).toFile(`public/photos/${name}.webp`);
  console.log(name, id, info.width, info.height, Math.round(info.size / 1024) + "KB");
}
