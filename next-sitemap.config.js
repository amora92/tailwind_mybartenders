/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mybartenders.co.uk',
  generateRobotsTxt: true,
  exclude: ['/admin*', '/admin/*', '/admin/**'], // <-- important
  outDir: './public'
}
