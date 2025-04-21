// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import agdalang from "./public/agadalang.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://fernandochu.github.io",
  // Despite the name, this is also working with mdx, see
  // https://github.com/expressive-code/expressive-code/issues/56
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    icon(),
    expressiveCode({
      themes: ["github-light"],
      shiki: {
        bundledLangs: ["lean4"],
        // langs: [agdalang], ## See notes in agdalang.ts
      },
    }),
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
