'use client';

export default function BlogPostContent({ content }) {
  return (
    <article className="prose max-w-none">
      <div className="pt-4">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <style jsx global>{`
        div {
          font-weight: 300;
          font-size: 1.25rem;
          line-height: 1.6;
        }
        article img {
          margin-left: auto;
          margin-right: auto;
          border-radius: 0.75rem;
          display: block;
        }
      `}</style>
    </article>
  );
}
