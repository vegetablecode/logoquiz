'use client';

import Metadata from 'common/components/layout/Metadata';
import AITechnology from 'modules/landing/components/AITechnology';
import About from 'modules/landing/components/About';
import Affordability from 'modules/landing/components/Affordability';
import DesignModes from 'modules/landing/components/DesignModes';
import FAQ from 'modules/landing/components/FAQ';
import Footer from 'modules/landing/components/Footer';
import Hero from 'modules/landing/components/Hero';
import Navbar from 'modules/landing/components/Navbar';
import Spaces from 'modules/landing/components/Spaces';
import Steps from 'modules/landing/components/Steps';
import TakeAction from 'modules/landing/components/TakeAction';
import Testimonials from 'modules/landing/components/Testimonials';
import WhyUs from 'modules/landing/components/WhyUs';

const CONTENT = {
  metadata: {
    title: 'Buy a Logo | Professional Logo Design Services | Buy a Logo',
    description:
      'Transform your brand with Buy a Logo. Get custom logo designs in 24 hours. Take our quiz, purchase a logo package, and receive 3 proposals with 2 free revisions. Affordable logo design services starting at $39.',
  },
  hero: {
    h1: ['Buy a Logo That Defines Your Brand 🎨✨'],
    h2: 'Unlock the power of professional logo design services. Get a custom logo effortlessly with Buy a Logo - your go-to platform for affordable and high-quality logo purchases.',
  },
  about: {
    h1: 'Why Buy a Logo is Your Ultimate Logo Design Solution 🚀',
    h2: 'Buy a Logo stands out as the premier logo design service, offering unparalleled features and results. From sleek minimalist designs to bold, eye-catching logos, our expert designers deliver professional-level creations accessible to businesses of all sizes.',
  },
  spaces: {
    h1: 'Logo Design Services for Every Business 💼',
    h2: "Whether you're a startup, small business, or established brand, Buy a Logo's cutting-edge design process adapts to all needs. Unlock your brand's full potential with our top-rated logo purchase options.",
  },
  steps: {
    heading: 'Buy a Logo in 3 Simple Steps',
    h1: 'Take Our Logo Quiz 📋',
    d1: 'Start with a quick questionnaire. Our expert designers use your input to create the perfect logo!',
    h2: 'Choose Your Logo Package 💰',
    d2: 'Select from our affordable logo design services, starting at just $39 for 3 custom logo proposals.',
    h3: 'Receive Your Custom Logos 🎉',
    d3: 'Get 3 professional logo designs within 24 hours and enjoy 2 free revision rounds to perfect your choice.',
  },
  features: {
    h1: 'What Makes Buy a Logo the Top Logo Design Service?',
    h2: "Join thousands who've discovered why Buy a Logo is the ultimate solution to buy a logo. Our streamlined process offers unmatched ease, creativity, and affordability in logo design services.",
  },
  reviews: {
    h1: 'See Why Clients Love Our Logo Design Services',
    h2: "Read authentic testimonials from satisfied customers who've purchased logos through Buy a Logo. Discover how our top-rated service has transformed brands and delighted business owners.",
  },
  action: {
    h1: 'Ready to Buy a Logo That Stands Out? 🏆',
    h2: "Buy a Logo is your gateway to professional logo design. Transform your brand effortlessly and see why we're the top choice for logo purchases.",
    buttonText: 'Start Your Logo Design Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-cyan-700 to-cyan-500',
    h1: 'Personalized Logos from Expert Designers 🎨',
    h2: "Our skilled designers tailor every logo to your unique brand. Experience why we're rated the best logo design service for creating your dream logo.",
    buttonText: 'Start Your Logo Design Journey ✨',
  },
  feature_2: {
    img: '/landing/screenshots/prompts.png',
    bg: 'from-teal-700 to-teal-500',
    h1: 'Cutting-Edge Design: The Future of Branding 🚀',
    h2: "Buy a Logo offers the most advanced logo design process. Our extensive library of styles and options showcases why we're considered the top platform to buy a logo.",
    buttonText: 'Explore Top-Rated Logo Designs ✨',
  },
  feature_3: {
    img: '/landing/screenshots/builder.png',
    bg: 'from-yellow-700 to-yellow-500',
    h1: 'AI-Powered Color and Style Selector 🌈',
    h2: 'Experiment with endless possibilities using our innovative tool. Visualize various color schemes and styles, perfecting every detail of your logo with our top-rated technology.',
    buttonText: 'Try AI Color Design 🎨',
  },
  aiTechnology: {
    h1: 'Powered by Expert Designers and Advanced Technology',
    h2: 'Buy a Logo combines skilled designers with cutting-edge tools, setting the standard for logo design services. Our process ensures your logo is both beautiful and functional.',
    features: [
      {
        label: 'Best-in-class brand analysis',
        icon: '🧠',
      },
      {
        label: 'Top-rated design-matching algorithms',
        icon: '🎨',
      },
      {
        label: 'Industry-leading creativity',
        icon: '💡',
      },
      {
        label: 'Advanced market trend insights',
        icon: '🔍',
      },
    ],
  },
  affordability: {
    h1: 'Professional Logo Design at Your Fingertips',
    h2: 'Experience top-rated logo design services without breaking the bank:',
    options: [
      {
        icon: '🆓',
        title: 'Free Consultation',
        description:
          'Take our brand quiz and get expert advice on your logo needs. Perfect for understanding our revolutionary design process.',
      },
      {
        icon: '💰',
        title: 'Logo Purchase',
        description:
          'Buy a logo package starting at just $39. Get 3 custom designs and 2 revision rounds within 24 hours.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes Buy a Logo the top logo design service?',
      answer:
        'Buy a Logo is recognized as the premier logo design solution due to our expert designers, quick turnaround time, and affordable pricing. Our service delivers professional-level designs quickly and affordably, setting us apart in the logo design market.',
    },
    {
      question: 'How does the logo design process work?',
      answer:
        "Our logo design process is simple: take a quick brand quiz, choose your package, and receive 3 custom logo designs within 24 hours. You'll then have the opportunity for 2 rounds of revisions to perfect your chosen design.",
    },
    {
      question: 'Can I try the logo design service for free?',
      answer:
        "While we don't offer free logo designs, we do provide a free consultation through our brand quiz. This helps you understand our process and allows our designers to get a sense of your brand before you commit to a purchase.",
    },
    {
      question: 'How does Buy a Logo ensure high-quality logo designs?',
      answer:
        'Our team consists of skilled designers with extensive experience in branding. We combine their expertise with advanced design tools and a deep understanding of current market trends to create logos that are both visually appealing and effective for your brand.',
    },
    {
      question: 'Is the logo design service suitable for all business types?',
      answer:
        "Absolutely! Whether you're a startup, small business, or established brand, our logo design service adapts to your specific needs. We've created logos for businesses across various industries and of all sizes.",
    },
    {
      question: 'How customizable are the logo designs from Buy a Logo?',
      answer:
        'Our logo designs are highly customizable. After receiving your initial designs, you have two rounds of revisions where you can request changes to colors, fonts, layouts, or any other aspect of the design to ensure it perfectly matches your vision.',
    },
    {
      question: 'Why choose Buy a Logo over hiring a freelance designer?',
      answer:
        "Buy a Logo offers significant advantages: we're more affordable, provide faster results (within 24 hours), and allow you to explore multiple design options easily. It's the perfect solution for those wanting professional-quality logos without the high cost and time investment of traditional design services.",
    },
    {
      question: 'What file formats will I receive with my logo purchase?',
      answer:
        "When you buy a logo from us, you'll receive your final design in various file formats suitable for both print and digital use. This typically includes high-resolution PNG files, vector formats (AI or EPS), and JPEG versions.",
    },
    {
      question: 'Can I request specific elements or styles in my logo design?',
      answer:
        "Yes! Our brand quiz and consultation process allows you to specify your preferences, including colors, styles, and any specific elements you'd like to see in your logo. Our designers will take these into account when creating your custom designs.",
    },
    {
      question: "What if I'm not satisfied with my logo designs?",
      answer:
        "Customer satisfaction is our priority. If you're not happy with your initial designs, you have two rounds of revisions to refine the logo. In the rare case that you're still not satisfied, we'll work with you to find a solution or offer a refund as per our satisfaction guarantee policy.",
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
    aiTechnology,
    affordability,
    faq,
  } = CONTENT;
  return (
    <>
      <div className="w-full px-4 sm:px-8 py-4">
        <Metadata />
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
        <AITechnology aiTechnology={aiTechnology} />
        <Affordability affordability={affordability} />
        <Testimonials h1={reviews.h1} h2={reviews.h2} />
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
