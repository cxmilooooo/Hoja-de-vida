// @ts-check
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify"; // Cambiar a Netlify

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(), // Cambiar a Netlify
});
