import { siteBasics } from '@/data/meta-data';
import { MetadataRoute } from 'next';

/**
 * Generates the robots.txt configuration for Savanna Designs website
 * Controls how search engines can access the site
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteBasics.url
  
// User-agent: Googlebot
// Allow: /

// User-agent: Bingbot
// Allow: /

// User-agent: Twitterbot
// Allow: /

// User-agent: facebookexternalhit
// Allow: /

// User-agent: *
// Allow: /

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
