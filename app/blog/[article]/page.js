import { POSTS } from 'modules/blog/posts';
import fs from 'fs';
import path from 'path';
import BlogPostContent from 'modules/blog/components/BlogPostContent';

export async function generateMetadata({ params }) {
  const postData = POSTS.find((post) => post.id === params.article);

  if (!postData) {
    return {
      title: 'Post not found',
      description: 'This post could not be found.',
    };
  }

  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      images: [
        {
          url: 'https://www.decoratly.com' + postData.img,
        },
      ],
      url: `/blog/${postData.id}`,
    },
  };
}

export default function BlogPost({ params }) {
  console.log('art:', params.article);
  const postData = POSTS.find((post) => post.id === params.article);
  console.log(postData);

  if (!postData) {
    return <p>Post not found</p>;
  }

  const filePath = path.join(
    process.cwd(),
    'public/_posts',
    `${params.article}.html`
  );
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="container mx-auto px-4">
      <BlogPostContent content={content} />
    </div>
  );
}
