import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import SpeedInsights  from "@vercel/speed-insights/astro"
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jar.tf",
  integrations: [mdx(), sitemap(), solidJs(), icon(), tailwind({ applyBaseStyles: false })],
})