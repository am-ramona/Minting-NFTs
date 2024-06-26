import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://imintnfts.vercel.app',
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       es: 'https://imintnfts.vercel.app/es',
    //       de: 'https://imintnfts.vercel.app/de',
    //     },
    //   },
    }
  ]
}