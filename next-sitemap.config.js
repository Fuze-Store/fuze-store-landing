/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXTAUTH_URL || 'https://fuze-store.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000, // optional
  exclude: ['/open-app', '/api', '/api/*'],
};

export default config;
