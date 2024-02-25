'use client';

import Footer from 'modules/landing/components/Footer';
import Hero from 'modules/landing/components/Hero';
import Navbar from 'modules/landing/components/Navbar';
import { LOGOS } from 'modules/landing/consts';
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
  <div className="text-center flex flex-col justify-start max-w-sm space-y-4 items-center">
    <div className="flex items-center justify-center h-24 w-24 shadow-2xl rounded-[28px] bg-gray-900">
      <div className="text-4xl">{icon}</div>
    </div>
    <div>
      <div className="font-semibold text-xl py-2">{title}</div>
      <div>{description}</div>
    </div>
  </div>
);

const Preview = () => (
  <div className="py-24 flex flex-col items-center justify-center space-y-4 bg-gray-800 text-white ">
    <div className="flex flex-col items-center justify-center space-y-2">
      <h2 className="text-3xl sm:text-5xl max-w-xl text-center font-bold">
        How to get your perfect logo in 3 easy steps?
      </h2>
      <div className="pt-4">Just follow these 3 simple steps:</div>
    </div>
    <div className="py-6 md:flex-row flex-col flex px-4 space-y-16 md:space-y-0 md:space-x-4">
      <Step
        icon="✍️"
        title="Take a QUIZ"
        description="Answer a few questions about your preferences, such as colors, styles, text, and industry. It only takes a few minutes and it helps us understand your needs better"
      />
      <Step
        icon="🔐"
        title="Pay Securely"
        description="Tell us what kind of style you like, what colors you prefer, what furniture you need, and any other details that matter to you."
      />
      <Step
        icon="📥"
        title="Receive your logo"
        description="Within 12 hours, you will receive 4 logo proposals based on your quiz answers. You can choose one and download it in high-quality format, or you can request up to 2 revisions for free."
      />
    </div>
  </div>
);

const Portfolio = () => (
  <div className="flex flex-col py-12 space-y-4 items-center justify-center">
    <h2 className="text-3xl sm:text-5xl max-w-xl text-center font-bold">
      Portfolio
    </h2>
    <div className="pt-1 pb-5">Here are some of logos we created</div>
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 ">
      {LOGOS.map((item) => (
        <img src={item} className="card shadow-xl" />
      ))}
    </div>
  </div>
);

const ABOUT = [
  {
    id: 0,
    description:
      'I was amazed by how fast and easy it was to get a logo for my new business. The quiz was fun and the logo proposals were spot on. I highly recommend SuperLogo to anyone who needs a professional logo.',
    name: 'Anna',
    position: 'founder',
    company: "Anna's Bakery",
    avatar: '/avatars/anna.jpg',
  },
  {
    id: 1,
    description:
      'SuperLogo is the best logo design service I have ever used. They delivered exactly what I wanted in less than a day. The logo looks great on my website and social media. Thank you SuperLogo!',
    name: 'James',
    position: 'owner',
    company: 'James Fitness',
    avatar: '/avatars/james.jpg',
  },

  {
    id: 2,
    description:
      'I had no idea what kind of logo I wanted for my brand, but SuperLogo helped me figure it out. The quiz was very helpful and the logo proposals were creative and unique. I love my new logo and I’m very happy with the service.',
    name: 'Lisa',
    position: 'creator',
    company: 'LS Art',
    avatar: '/avatars/lisa.jpg',
  },
];

const AboutUs = () => (
  <div className="flex flex-col space-y-4 py-12 items-center justify-center">
    <h2 className="text-3xl sm:text-5xl max-w-xl text-center font-bold">
      What our customers say about us
    </h2>
    <div className="pt-2 pb-6">Here are some of our reviews ✅</div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {ABOUT.map((item) => (
        <div className="bg-white overflow-hidden card flex flex-col shadow-xl justify-between w-full">
          <div>
            <div className="overflow-hidden h-48 xl:h-72">
              <img src={item.avatar} />
            </div>
            <div className="p-5 opacity-80">{item.description}</div>
          </div>
          <div className="p-5">
            <div>{item.name}</div>
            <div className="text-sm opacity-80">
              {item.position} of <span>{item.company}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ANSWERS = [
  {
    question: 'What if I don’t like any of the logo proposals?',
    answer:
      'If you are not satisfied with any of the logo proposals, you can request up to 2 revisions for free. You can also contact us and we will try our best to accommodate your needs.',
  },
  {
    question: 'What format will I receive my logo in?',
    answer:
      'You will receive your logo in PNG format in high resolution, which are suitable for web and print use.',
  },
  {
    question: 'What if I need more than one logo?',
    answer:
      'If you need more than one logo, you can take the quiz again and pay for another logo design. Alternatively, you can contact us and we will offer you a special discount for multiple logos.',
  },
];

const FAQ = () => (
  <div className="flex space-y-2 flex-col py-12">
    <div className="self-center text-center flex flex-col space-y-2 py-4">
      <h2 className="text-3xl sm:text-5xl max-w-xl font-bold">
        Frequently asked questions
      </h2>
      <div className="pt-3 pb-4">Browse most asked questions</div>
    </div>
    {ANSWERS.map(({ answer, question }) => (
      <div className="collapse collapse-arrow bg-white p-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-lg font-semibold">{question}</div>
        <div className="collapse-content">
          <p>{answer}</p>
        </div>
      </div>
    ))}
  </div>
);

const BottomHook = () => (
  <div className="bg-[url('/logos.jpg')] h-64 overflow-hidden my-12 w-full card">
    <div className="bg-black w-full h-full bg-opacity-80">
      <div className="text-center flex text-white h-full flex-col items-center justify-center space-y-4">
        <div className="text-xl font-bold">Ready to get your logo?</div>
        <div className="max-w-md">
          Don’t wait any longer and start the quiz now. It’s fast, easy, and
          fun. You will get a stunning logo for your brand in 12 hours or less,
          or your money back.
        </div>
        <Link href="/quiz">
          <button className="btn">I want my logo!</button>
        </Link>
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-8 pt-8 pb-16 max-w-7xl mx-auto">
        <Navbar />
        <Hero />
      </div>
      <Preview />
      <div className="w-full px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        <Portfolio />
        <AboutUs />
        <FAQ />
        <BottomHook />
      </div>
      <Footer />
    </>
  );
};

export default Page;
