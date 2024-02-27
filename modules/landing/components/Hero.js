import { useRouter } from 'next/navigation';
import Gallery from './Gallery';
import Score from './Score';
import Logos from './Logos';
import Link from 'next/link';

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Gallery />
      <div className="hero">
        <div className="hero-content max-w-3xl flex-col space-y-8 text-center">
          <div>
            <h1 className="text-3xl md:text-6xl font-black">
              Get a stunning logo for your brand in 12 hours or less! 🔥
            </h1>
            <h2 className="lg:py-6 py-4 text-lg md:text-xl">
              Take a quick quiz and let us design a custom logo that reflects
              your style, colors, and vision. No hassle, no hidden fees, just
              100% satisfaction guaranteed.
            </h2>
            <Link href="/quiz">
              <button
                onClick={() => router.push('/photos')}
                className="btn btn-primary text-lg"
              >
                Make my logo now ✨
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
