import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    tailwind(), 
    sanity({
      projectId: import.meta.env.SANITY_PROJECT_ID || 'your-project-id',
      dataset: import.meta.env.SANITY_DATASET || 'production',
      apiVersion: import.meta.env.SANITY_API_VERSION || '2025-01-01',
      useCdn: import.meta.env.SANITY_USE_CDN === 'true' || true,
    })
  ],
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://catalogo-web-udg.vercel.app',
});