'use client';

import SEO from 'common/components/layout/SEO';
import AITechnology from 'modules/landing/components/AITechnology';
import About from 'modules/landing/components/About';
import Affordability from 'modules/landing/components/Affordability';
import FAQ from 'modules/landing/components/FAQ';
import Footer from 'modules/landing/components/Footer';
import Heading from 'modules/landing/components/Heading';
import Hero from 'modules/landing/components/Hero';
import HorizontalHero from 'modules/landing/components/HorizontalHero';
import Navbar from 'modules/landing/components/Navbar';
import Screenshot from 'modules/landing/components/Screenshot';
import Spaces from 'modules/landing/components/Spaces';
import Steps from 'modules/landing/components/Steps';
import TakeAction from 'modules/landing/components/TakeAction';
import TechnologyExplanation from 'modules/landing/components/TechnologyExplanation';
import Testimonials from 'modules/landing/components/Testimonials';

const CONTENT = {
  metadata: {
    title: 'Logo Design for Non Designers | No Design Skills Needed',
    description:
      'Get a professional logo without any design experience. Take a simple quiz and receive custom logo designs in 24 hours. Perfect for entrepreneurs and business owners.',
  },
  hero: {
    h1: ['Logo Design Made Easy - No Design Skills Required 🎨'],
    h2: "Need a professional logo but don't know design? No problem! Take our simple quiz and let us create the perfect logo for your business. It's as easy as answering a few questions about what you like.",
  },
  about: {
    h1: 'Why Choose Our No-Experience-Needed Approach? 🎯',
    h2: "Creating a logo shouldn't require design skills. Our simple process helps you get a professional logo without any design experience. Just tell us what you like, and we'll handle the creative work.",
  },
  spaces: {
    h1: 'From Ideas to Professional Logo 💫',
    h2: "Don't worry about design tools or technical skills. We turn your preferences and ideas into beautiful, professional logos - no design experience needed.",
    altText:
      'Before and after comparison showing how simple ideas become professional logos',
  },
  steps: {
    heading: 'Get Your Logo in 3 Easy Steps ✨',
    h1: 'Step 1: Take Our Simple Quiz 📋',
    d1: 'Answer basic questions about what you like. No design terminology or technical knowledge needed - just pick what looks good to you.',
    h2: 'Step 2: Get Professional Designs 🎨',
    d2: 'Receive 3 custom logo designs within 24 hours, created by professionals based on your preferences.',
    h3: 'Step 3: Tell Us What to Change ✨',
    d3: 'Simply point out what you want different, and get 2 free rounds of changes until your logo is perfect.',
  },
  features: {
    h1: 'Logo Design Without the Confusion 🏗️',
    h2: 'Experience how easy getting a professional logo can be - no design skills required.',
  },
  reviews: {
    h1: 'Happy Non-Designer Customers 🏆',
    h2: 'Join other business owners who got great logos without any design experience.',
  },
  action: {
    h1: 'Ready for Your Professional Logo? 🚀',
    h2: 'Start with our easy quiz and get your custom logo designs in 24 hours.',
    buttonText: 'Start Easy Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Simple Style Quiz 🎭',
    h2: "No design knowledge needed! Our quiz uses simple questions and visual examples. Just pick what you like, and we'll handle the design work.",
    altText:
      'User-friendly quiz interface showing simple visual choices for non-designers',
    buttonText: 'Take Easy Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Professional Designs 🎨',
    h2: "Let the experts handle the design work. You'll receive three professionally-designed logos based on your quiz answers - no design skills required on your part.",
    altText:
      'Sample of professional logo designs created from simple quiz answers',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Easy Design Changes 🏗️',
    h2: "Need something changed? Just tell us what you want different in plain language. No design terminology needed - we'll understand what you mean.",
    altText:
      'Simple revision interface for requesting logo changes without design knowledge',
    buttonText: 'Learn About Changes ✨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything handled for you:',
    features: [
      {
        label: 'Ready-to-use files',
        icon: '📐',
      },
      {
        label: 'Full ownership',
        icon: '⚙️',
      },
      {
        label: 'Professional quality',
        icon: '🎨',
      },
      {
        label: 'Web-ready formats',
        icon: '💡',
      },
    ],
  },
  designModes: {
    h1: 'Two Simple Approaches 🎯',
    h2: 'Choose what works for you:',
    mode1: {
      title: 'Visual Selection',
      description:
        "Simply pick logos you like from examples, and we'll create something similar.",
    },
    mode2: {
      title: 'Describe Your Ideas',
      description:
        "Tell us what you want in your own words, and we'll turn it into a design.",
    },
  },
  affordability: {
    h1: 'Simple Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Service Package',
        description:
          '3 professional designs, 2 rounds of changes, ready-to-use files, and full ownership rights.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Professional Design Support 🧠',
    h2: 'We handle the technical stuff:',
    keyTechnologies: [
      {
        name: 'Simple Process',
        description:
          'Our quiz translates your preferences into design directions without requiring any technical knowledge from you.',
      },
      {
        name: 'Professional Creation',
        description:
          'Expert designers handle all the technical aspects, creating professional logos based on your simple inputs.',
      },
      {
        name: 'Easy Communication',
        description:
          "Tell us what you want in plain language - no design jargon needed. We'll understand and make it happen.",
      },
    ],
  },
  faq: [
    {
      question: 'Do I need any design experience?',
      answer:
        'Not at all! Our service is specifically designed for people without design skills. You just need to know what you like. Our quiz uses simple questions and visual examples - just pick what appeals to you, and our professionals will handle the design work.',
    },
    {
      question: 'How do I explain what I want?',
      answer:
        "Use your own words! No design terminology needed. Tell us what you like and don't like in plain language. Show us examples of logos you admire. Our designers are experts at understanding what clients want, even when expressed in non-technical terms.",
    },
    {
      question: "What if I don't know what I want?",
      answer:
        "That's completely fine! Our quiz shows you various examples and options. Just react to what you see - like or dislike. This helps us understand your taste, and our designers will create appropriate options based on your responses.",
    },
    {
      question: 'How do I request changes?',
      answer:
        'Simply tell us what you want different in your own words. For example, "make the blue darker" or "make the text bigger." No need for design terminology - we\'ll understand what you mean and make the appropriate adjustments.',
    },
    {
      question: 'Will my logo look professional?',
      answer:
        'Absolutely! While the process is simple for you, your logo is created by professional designers. You get all the benefits of professional design expertise without needing any design knowledge yourself.',
    },
    {
      question: 'Can I use my logo anywhere?',
      answer:
        "Yes! We provide your logo in ready-to-use formats that work everywhere. Just upload or share the files we send - no technical knowledge needed. They'll work perfectly for your website, social media, business cards, and more.",
    },
    {
      question: 'What if I need help with the files?',
      answer:
        'We provide clear instructions on how to use your logo files. If you need help, just ask! We can explain everything in simple, non-technical terms and guide you through using your new logo.',
    },
    {
      question: 'Can I share ideas from other logos?',
      answer:
        'Yes! Showing us logos you like is a great way to communicate your preferences. Just share examples of what appeals to you, and our designers will create something original that captures the elements you like.',
    },
    {
      question: "What if I don't understand the process?",
      answer:
        "We're here to help! Every step is designed to be simple and clear. If you're unsure about anything, just ask. We'll explain everything in plain language without any confusing design jargon.",
    },
    {
      question: 'Will I get everything I need?',
      answer:
        "Yes! We provide all the logo files you'll need, ready to use. No design software or technical knowledge required. Just download and share your files - we make sure everything is simple and straightforward.",
    },
  ],
};

const Page = () => {
  const {
    hero,
    about,
    spaces,
    steps,
    features,
    reviews,
    action,
    feature_1,
    feature_2,
    feature_3,
    metadata,
    aiTechnology,
    technologyExplanation,
    designModes,
    affordability,
    faq,
  } = CONTENT;
  return (
    <>
      <div className="w-full px-4 sm:px-8 py-4">
        <SEO title={metadata.title} description={metadata.description} />
        <Navbar />
        <Hero h1={hero.h1} h2={hero.h2} />
        <About h1={about.h1} h2={about.h2} />
        <Spaces h1={spaces.h1} h2={spaces.h2} />
        <Steps
          heading={steps.heading}
          h1={steps.h1}
          d1={steps.d1}
          h2={steps.h2}
          d2={steps.d2}
          h3={steps.h3}
          d3={steps.d3}
        />
        <div className="py-12 flex flex-col space-y-5 mx-auto">
          <Heading title={features.h1} subtitle={features.h2} />
          <HorizontalHero
            bg={feature_1.bg}
            img={
              <Screenshot
                img={feature_1.img}
                bg={feature_1.bg}
                alt={feature_1.altText}
              />
            }
            title={feature_1.h1}
            description={feature_1.h2}
            buttonText={feature_1.buttonText}
            buttonAction={() => router.push('/photos')}
          />
          <HorizontalHero
            bg={feature_2.bg}
            img={
              <Screenshot
                img={feature_2.img}
                bg={feature_2.bg}
                alt={feature_2.altText}
              />
            }
            title={feature_2.h1}
            description={feature_2.h2}
            buttonText={feature_2.buttonText}
            buttonAction={() => router.push('/photos')}
            right
          />
          <HorizontalHero
            bg={feature_3.bg}
            img={
              <Screenshot
                img={feature_3.img}
                bg={feature_3.bg}
                alt={feature_3.altText}
              />
            }
            title={feature_3.h1}
            description={feature_3.h2}
            buttonText={feature_3.buttonText}
            buttonAction={() => router.push('/photos')}
          />
        </div>
        <AITechnology aiTechnology={aiTechnology} />
        <Affordability affordability={affordability} />
        <Testimonials h1={reviews.h1} h2={reviews.h2} />
        <TechnologyExplanation technologyExplanation={technologyExplanation} />
        <FAQ data={faq} />
        <TakeAction
          h1={action.h1}
          h2={action.h2}
          buttonText={action.buttonText}
        />
      </div>
      <Footer />
    </>
  );
};

export default Page;
