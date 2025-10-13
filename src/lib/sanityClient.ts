import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'r2vtbuc8',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION || '2025-01-01',
  useCdn: import.meta.env.SANITY_USE_CDN === 'true' || true,
})
