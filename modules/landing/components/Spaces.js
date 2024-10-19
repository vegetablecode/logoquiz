import TextBorder from 'common/components/layout/TextBorder';
import Heading from './Heading';

const Frame = ({ src, alt, title }) => (
  <div className="relative ease-in-out transform hover:scale-[102%] rounded-xl duration-150 overflow-hidden">
    <div className="absolute p-4 text-white md:text-xl font-black">
      <TextBorder borderColor="#2b2b2b">{title}</TextBorder>
    </div>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const Spaces = ({ h1, h2 }) => {
  return (
    <div className="py-12 mx-auto">
      <Heading title={h1} subtitle={h2} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <Frame
          title="Startups"
          src="/landing/groups/startups.jpeg"
          alt="a group of people working together in a startup"
        />
        <Frame
          title="Local Businesses"
          src="/landing/groups/local-businesses.jpeg"
          alt="a man working in a bakery"
        />
        <Frame
          title="E-commerce"
          src="/landing/groups/e-commerce.jpeg"
          alt="a person shopping online on a laptop"
        />
        <Frame
          title="Fitness"
          src="/landing/groups/fitness.jpeg"
          alt="a group of people exercising in a gym"
        />
        <Frame
          title="Medical"
          src="/landing/groups/medical.jpeg"
          alt="a doctor examining a patient in a clinic"
        />
        <Frame
          title="Pet Care"
          src="/landing/groups/pet.jpeg"
          alt="a veterinarian examining a dog"
        />
        <Frame
          title="Real Estate"
          src="/landing/groups/real-estate.jpeg"
          alt="a realtor showing a house to a couple"
        />
        <Frame
          title="Restaurants"
          src="/landing/groups/restaurants.jpeg"
          alt="a chef preparing food in a restaurant kitchen"
        />
        <Frame
          title="Photographers"
          src="/landing/groups/photography.jpeg"
          alt="a person with a camera in a photo studio"
        />
      </div>
      <div className="w-full h-64 -mt-64 transform bg-gradient-to-b from-transparent to-[#f8f9fb]" />
    </div>
  );
};

export default Spaces;
