import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.biomedicadayanna.com.br'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/procedimentos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mentorias`,
      lastModified: new Date(),
    },
  ]
}