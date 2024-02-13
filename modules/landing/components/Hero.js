import { useRouter } from 'next/navigation';
import Gallery from './Gallery';
import Score from './Score';
import Logos from './Logos';

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Gallery />
      <div className="hero">
        <div className="hero-content flex-col space-y-8 text-center">
          <div>
            <h1 className="text-3xl md:text-6xl font-black">
              Turn your photos <br /> into interior designs ✨
            </h1>
            <h2 className="lg:py-6 py-4 text-lg md:text-xl">
              Upload a photo of any interior and transform it into a new style!
            </h2>
            <button
              onClick={() => router.push('/photos')}
              className="btn btn-primary"
            >
              Upload a photo now! ✨
            </button>
          </div>
          <Score />
        </div>
      </div>
      <Logos />
    </>
  );
};
export default Hero;
