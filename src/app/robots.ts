import { siteBasics } from '@/data/meta-data';
import { MetadataRoute } from 'next';

/**
 * Generates the robots.txt configuration for Savanna Designs website
 * Controls how search engines can access the site
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteBasics.url
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/*.json$',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/admin/', '/dashboard/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
