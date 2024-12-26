import SEO from 'common/components/layout/SEO';
import Gallery from 'modules/landing/components/Gallery';
import { formatPathAndLabel, getPages } from 'modules/landing/lib';
import Link from 'next/link';

const Page = async () => {
  const pages = getPages('(pages)');

  const CONTENT = {
    metadata: {
      title:
        'Buy A Logo | Professional Logo Design Service in less than 24 Hours',
      description:
        'Get a professional logo in minutes. Start with our simple quiz. Get 3 custom designs in 24 hours. Full ownership rights included.',
    },
  };

  const { metadata } = CONTENT;

  return (
    <>
      <SEO title={metadata.title} description={metadata.description} />
      <Gallery />
      <div className="hero">
        <div className="hero-content flex-col space-y-8 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl max-w-2xl font-black">
              Browse all pages 👀
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 max-w-screen-lg mb-8 mx-auto">
        {pages.map((page, index) => {
          const { cleanedPath, label } = formatPathAndLabel(page);
          return (
            <Link
              key={index}
              className="bg-gray-200 p-4 text-center ease-in-out duration-150 hover:bg-gray-300 rounded-xl"
              href={cleanedPath}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Page;
