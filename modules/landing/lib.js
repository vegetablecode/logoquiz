import fs from 'fs';
import path from 'path';

export function getPages(directory) {
  const pagesDirectory = path.join(process.cwd(), 'app', directory); // Path to the (pages) directory
  const files = fs.readdirSync(pagesDirectory);
  const pages = [];

  files.forEach((file) => {
    const fullPath = path.join(pagesDirectory, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && file !== 'glossary') {
      pages.push(`/${path.join(directory, file).replace(/\\/g, '/')}`);

      pages.push(...getPages(path.join(directory, file)));
    }
  });

  return pages;
}

export const formatPathAndLabel = (pagePath) => {
  const cleanedPath = pagePath.replace('/(pages)/', '/').replace('/page', '');

  const label = cleanedPath
    .split('/')
    .filter(Boolean)
    .map((part) => part.replace(/-/g, ' '))
    .join(' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bai\b/gi, 'AI');

  return { cleanedPath, label };
};
