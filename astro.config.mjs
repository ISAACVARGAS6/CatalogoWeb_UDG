import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

export default defineConfig({
  integrations: [
    tailwind(), 
    sanity({
      projectId: 'r2vtbuc8',
      dataset: 'production',
      apiVersion: '2025-01-01',
      useCdn: true,
    })
  ],
  output: 'static',
  site: 'https://tu-sitio.com',
  publicDir: './assets',
  srcDir: './src',
});