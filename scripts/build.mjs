import { execSync } from "child_process";

const isCloudflare = Boolean(
  process.env.CF_PAGES ||
  process.env.CLOUDFLARE_BUILD ||
  process.env.HOME === "/opt/buildhome" ||
  (process.env.USER === "buildhome")
);

if (isCloudflare) {
  console.log("☁️ Detected Cloudflare environment. Running opennextjs-cloudflare build...");
  execSync("npx opennextjs-cloudflare build", { stdio: "inherit" });
} else {
  console.log("▲ Running standard Next.js build (for Vercel, Node, and local)...");
  execSync("npx next build", { stdio: "inherit" });
}
