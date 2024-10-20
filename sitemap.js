const { generateSitemap } = require('next-sitemap');
const fs = require('fs');
const path = require('path');
const { POSTS } = require('modules/blog/posts');

async function generateSitemapFile() {
  const config = {
    siteUrl: process.env.SITE_URL || 'https://www.buyalogo.co',
    generateRobotsTxt: true,
    outDir: 'public',
  };

  const staticPages = ['/', '/blog', '/tos', '/privacy-policy'];

  const staticSitemap = staticPages.map((page) => ({
    loc: `${config.siteUrl}${page}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: page === '/' ? 1.0 : 0.8,
  }));

  const blogPosts = POSTS;
  const blogSitemap = blogPosts.map((post) => ({
    loc: `${config.siteUrl}/blog/${post.id}`,
    lastmod: post.updatedAt,
    changefreq: 'monthly',
    priority: 0.6,
  }));

  const sitemap = [...staticSitemap, ...blogSitemap];
  const sitemapXML = await generateSitemap(config, sitemap);

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemapXML
  );

  console.log('Sitemap generated successfully!');
}

generateSitemapFile();
