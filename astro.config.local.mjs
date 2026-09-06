import { defineConfig } from 'astro/config';

// Solo para generar la copia que se abre haciendo doble clic desde el disco.
// La web publicada sigue usando astro.config.mjs.
export default defineConfig({
  base: '/',
  trailingSlash: 'always',
  compressHTML: false,
  outDir: './dist-local',
  build: { assets: 'recursos' },
});
