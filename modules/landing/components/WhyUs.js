import { useRouter } from 'next/navigation';
import Heading from './Heading';
import HorizontalHero from './HorizontalHero';
import Screenshot from './Screenshot';

const WhyUs = ({ h1, h2 }) => {
  const router = useRouter();
  return (
    <div className="py-12 flex flex-col space-y-5 mx-auto">
      <Heading title={h1} subtitle={h2} />
      <HorizontalHero
        bg="from-cyan-700 to-cyan-500"
        img={
          <Screenshot
            img="/landing/screenshots/builder.png"
            bg="from-cyan-700 to-cyan-500"
          />
        }
        title="Unleash Your Creativity 🌈"
        description="With Decoratly, you can experiment with various styles and ideas without any commitment. Perfect for homeowners, renters, and interior design enthusiasts."
        buttonText="Upload a photo now ✨"
        buttonAction={() => router.push('/photos')}
      />
      <HorizontalHero
        img={
          <Screenshot
            img="/landing/screenshots/result.png"
            bg="from-teal-700 to-teal-500"
          />
        }
        title="Advanced AI Technology 🤖"
        description="Our state-of-the-art AI ensures realistic and breathtaking transformations, making your interior design dreams a reality."
        buttonText="Try it now ✨"
        buttonAction={() => router.push('/photos')}
        right
      />
      <HorizontalHero
        img={
          <Screenshot
            img="/landing/screenshots/prompts.png"
            bg="from-yellow-700 to-yellow-500"
          />
        }
        title="User-Friendly Experience 😊"
        description="Simple, intuitive, and accessible to everyone. No prior design experience required."
        buttonText="Try it by yourself 🙌"
        buttonAction={() => router.push('/photos')}
      />
      <HorizontalHero
        img={
          <Screenshot
            img="/landing/screenshots/styles.png"
            bg="from-purple-700 to-purple-500"
          />
        }
        title="Over 30 different designs to choose from 🎨"
        description="️We have hand-crafted 30 unique presets for you to redesign your interiors in seconds. All popular styles are included, such as Scandinavian Design and Mid-Century Modern. 🛋️"
        buttonText="Try it now ✨"
        buttonAction={() => router.push('/photos')}
        right
      />
    </div>
  );
};

export default WhyUs;
