/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXTAUTH_URL || 'https://fuze-store.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000, // optional
  // ...other options
};
