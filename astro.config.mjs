import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.psycho-sante74.com',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
