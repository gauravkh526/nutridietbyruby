/** @type {import('next-sitemap').IConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteUrl: isProd ? 'https://www.nutridietbyruby.com' : 'http://localhost:3000',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/server-error'], // Optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
