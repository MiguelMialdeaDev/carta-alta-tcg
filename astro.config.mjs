import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://miguelmialdeadev.github.io',
  base: '/carta-alta-tcg',
  trailingSlash: 'always',
  compressHTML: true,
});
