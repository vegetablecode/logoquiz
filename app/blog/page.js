import SEO from 'common/components/layout/SEO';
import { POSTS } from 'modules/blog/posts';
import Link from 'next/link';

const Section = ({ title, subtitle }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-gray-600 mt-0.5 max-w-md mx-auto">{subtitle}</p>
  </section>
);

const PostCard = ({ title, img, description, slug }) => (
  <div className="card bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <img
      src={img}
      alt={`Image for ${title}`}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 pt-2">{description}</p>
      <div className="pt-4">
        <Link href={`/blog/${slug}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <SEO
        title="Decoratly Blog - Expert Tips, Trends & Inspiration for AI-Powered Interior Design"
        description="Discover the latest tips, trends, and inspiration for transforming your home with AI-powered interior design. Decoratly's blog offers expert advice and insights to help you create stunning spaces effortlessly."
      />
      <header>
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            AI Interior Design Blog 🧑‍💻
          </h1>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {POSTS.map((post) => (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <PostCard
                img={post.img}
                title={post.title}
                description={post.description}
                slug={post.id}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
