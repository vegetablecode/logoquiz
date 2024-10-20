const fs = require('fs');
const path = require('path');
const { POSTS } = require('./modules/blog/posts'); // Ensure the path is correct

async function generateSitemapFile() {
  const BASE_URL = 'https://www.buyalogo.co';

  const staticPages = ['/', '/blog', '/tos', '/privacy-policy'];
  const staticSitemap = staticPages
    .map(
      (page) => `
    <url>
      <loc>${BASE_URL}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '/' ? 1.0 : 0.8}</priority>
    </url>`
    )
    .join('');

  const blogPosts = POSTS;
  const blogSitemap = blogPosts
    .map(
      (post) => `
    <url>
      <loc>${BASE_URL}/blog/${post.id}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`
    )
    .join('');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticSitemap}
    ${blogSitemap}
  </urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemapContent
  );

  console.log('Sitemap generated successfully!');
}

generateSitemapFile();
