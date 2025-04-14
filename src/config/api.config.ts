export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  endpoints: {
    releases: '/anime/releases',
    search: '/app/search/releases',
    catalog: '/anime/catalog/releases'
  }
} as const; 