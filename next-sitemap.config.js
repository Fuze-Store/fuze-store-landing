/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXTAUTH_URL || 'https://fuze-store.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000, // optional
};

export default config;
