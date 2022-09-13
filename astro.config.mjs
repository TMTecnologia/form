import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tmtecnologia.dev.br',
  // base: '/form',
  integrations: [tailwind()]
});