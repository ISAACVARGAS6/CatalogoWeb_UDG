import { createClient } from '@sanity/client'

const env = (import.meta as any).env;

export const client = createClient({
  projectId: env.SANITY_PROJECT_ID || 'your-project-id',
  dataset: env.SANITY_DATASET || 'production',
  apiVersion: env.SANITY_API_VERSION || '2025-01-01',
  useCdn: env.SANITY_USE_CDN === 'true' || true,
})
