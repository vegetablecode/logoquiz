import Gallery from './Gallery';
import Score from './Score';
import Logos from './Logos';
import PrimaryButton from './PrimaryButton';

const Hero = ({ h1, h2 }) => {
  return (
    <>
      <Gallery />
      <div className="hero">
        <div className="hero-content flex-col space-y-8 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl max-w-2xl font-black">{h1}</h1>
            <h2 className="lg:py-6 py-4 text-gray-600 max-w-lg mx-auto text-xl">
              {h2}
            </h2>
            <PrimaryButton
              href="https://www.goodlogoai.com"
              title="Take a Logo Quiz! ✨"
            />
          </div>
          <Score />
        </div>
      </div>
      <Logos />
    </>
  );
};
export default Hero;
