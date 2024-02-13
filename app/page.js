'use client';

import Metadata from 'common/components/layout/Metadata';
import Footer from 'modules/landing/components/Footer';
import Hero from 'modules/landing/components/Hero';
import Navbar from 'modules/landing/components/Navbar';
import Showcase from 'modules/landing/components/Showcase';
import Link from 'next/link';

const About = () => (
  <div className="hero py-4 bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src="/makeover-example.jpg"
        className="sm:max-w-sm max-w-64 card shadow-2xl sm:m-12"
      />
      <div>
        <h1 className="text-3xl sm:text-5xl font-bold">
          AI-Enhanced Design for Your Interior & Exterior
        </h1>
        <div className="py-6">
          Create amazing images of any space in seconds with our revolutionary
          AI design tool. It’s perfect for professionals and individuals who
          want to design with ease and flexibility. You can try out different
          styles, colors, and layouts with no restrictions.
        </div>
        <button className="btn btn-primary">Get Started!</button>
      </div>
    </div>
  </div>
);

const Step = ({ icon, title, description }) => (
  <div className="text-center flex flex-col max-w-sm space-y-4 items-center justify-center">
    <div className="flex items-center justify-center h-24 w-24 shadow-2xl rounded-full bg-white">
      <div className="text-4xl">{icon}</div>
    </div>
    <div>
      <div className="font-semibold text-xl py-2">{title}</div>
      <div>{description}</div>
    </div>
  </div>
);

const Preview = () => (
  <div className="py-12 flex flex-col items-center justify-center space-y-4">
    <div className="flex flex-col items-center justify-center space-y-2">
      <h1 className="text-3xl sm:text-5xl font-bold">How Does It Work?</h1>
      <div>Just follow these 3 simple steps:</div>
    </div>
    <div className="py-6 grid gap-4 grid-cols-3">
      <Step
        icon="📸"
        title="Upload a photo of your space"
        description="It can be any room in your house, your backyard, your balcony, or any other space you want to decorate."
      />
      <Step
        icon="🎨"
        title="Choose your preferred style and preferences"
        description="Tell us what kind of style you like, what colors you prefer, what furniture you need, and any other details that matter to you."
      />
      <Step
        icon="🏡"
        title="Generate and explore different designs"
        description="Our AI will create realistic and stunning images of your space with different designs that match your style and preferences."
      />
    </div>
  </div>
);

const Page = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-8 py-4">
        <Navbar />
        <Hero />
        <About />
        <Preview />
        <Showcase />
      </div>
      <Footer />
    </>
  );
};

export default Page;
