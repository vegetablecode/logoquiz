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
    title: 'Logo Design for Clothing | Professional Fashion Brand Logos',
    description:
      'Get a professional clothing brand logo that makes your fashion line stand out. Receive 3 custom designs in 24 hours. Perfect for apparel brands, fashion labels, and clothing stores.',
  },
  hero: {
    h1: ['Professional Logo Design for Clothing Brands 👕'],
    h2: 'Make your fashion brand stand out with a professional, custom logo. Take our simple quiz and receive 3 unique logo designs within 24 hours. Perfect for clothing lines, fashion labels, and apparel businesses.',
  },
  about: {
    h1: 'Why Your Clothing Brand Needs a Professional Logo 🎯',
    h2: "In the competitive fashion industry, your logo is your brand's signature. Our specialized clothing logos help you build recognition, attract fashion-conscious customers, and establish a brand that stands out.",
  },
  spaces: {
    h1: 'Fashion Logo Excellence 💫',
    h2: "Whether you're launching a streetwear line, boutique collection, or full fashion brand, we'll design the perfect logo to represent your style. Stand out in the fashion market with professional branding.",
    altText:
      'Before and after comparison showing clothing brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Fashion Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your clothing brand through our simple quiz. Share your style, target market, and fashion vision.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted for your specific fashion brand.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your clothing logo is exactly right.',
  },
  features: {
    h1: 'Clothing Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your fashion brand.',
  },
  reviews: {
    h1: 'Happy Fashion Brands 🏆',
    h2: 'Join other successful clothing brands who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Fashion Line? 🚀',
    h2: 'Get started with our quick quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Fashion Logo Quiz 🎭',
    h2: "Our specialized quiz helps us understand your clothing brand perfectly. Tell us about your style, target audience, and fashion philosophy to ensure your logo captures your brand's essence.",
    altText:
      'Interactive fashion logo design quiz showing brand style questions',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Fashion Logos 🎨',
    h2: "Receive three unique, professional logo designs that capture your brand's personality. Each proposal is crafted specifically for fashion and apparel, ensuring perfect style representation.",
    altText:
      'Sample of custom clothing brand logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen fashion logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your clothing brand.',
    altText: 'Logo revision interface showing fashion logo refinement options',
    buttonText: 'Learn About Revisions ✨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your clothing brand needs:',
    features: [
      {
        label: 'High-res files',
        icon: '📐',
      },
      {
        label: 'Full ownership',
        icon: '⚙️',
      },
      {
        label: 'Trademarkable',
        icon: '🎨',
      },
      {
        label: 'Web-ready',
        icon: '💡',
      },
    ],
  },
  designModes: {
    h1: 'Two Fashion Logo Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Modern Minimalist',
      description:
        'Clean, contemporary designs perfect for fashion-forward brands.',
    },
    mode2: {
      title: 'Signature Style',
      description: 'Distinctive, iconic logos ideal for unique fashion labels.',
    },
  },
  affordability: {
    h1: 'Complete Fashion Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom clothing logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Fashion Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Fashion Understanding',
        description:
          "Our designers understand the clothing industry, creating logos that resonate with fashion-conscious consumers and reflect your brand's style.",
      },
      {
        name: 'Professional Standards',
        description:
          'Every clothing logo is designed to look stunning across all applications, from clothing tags to storefront signs.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful fashion brands to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good clothing logo?',
      answer:
        'A successful fashion logo should convey style, quality, and brand identity. Our designs incorporate elements that resonate with fashion-conscious consumers while ensuring your brand stands out. We consider factors like your target market, style aesthetic, and fashion category.',
    },
    {
      question: 'Can I use my logo on clothing tags and labels?',
      answer:
        'Yes! Your fashion logo package includes high-resolution files suitable for all applications, from clothing tags and labels to packaging and storefronts. The logo will look crisp and professional at any size.',
    },
    {
      question: 'Do you understand fashion branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various fashion brands, from streetwear lines to luxury boutiques. We understand the unique needs of the industry and create designs that effectively attract your target market.',
    },
    {
      question: 'Will my logo look good on fabric?',
      answer:
        'Yes! We design clothing logos specifically to work well on fabric applications like tags, labels, and direct garment printing. The designs maintain quality across all textile applications.',
    },
    {
      question: "Can you match my brand's style?",
      answer:
        "Yes! Whether you're creating minimalist fashion, streetwear, or luxury apparel, our quiz helps us understand your specific style. We'll create logos that perfectly match your brand's aesthetic.",
    },
    {
      question: 'How do I make my logo fashion-forward?',
      answer:
        "We design clothing logos that capture current fashion trends while maintaining timeless appeal. Your logo will help communicate your brand's unique style and vision, making it relevant in the fashion market.",
    },
    {
      question: 'What about social media branding?',
      answer:
        'Your logo package includes formats perfect for social media, websites, and digital marketing. The designs work great for Instagram posts, online stores, and fashion influencer collaborations.',
    },
    {
      question: 'Can my logo work for multiple collections?',
      answer:
        'Yes! We design fashion logos that work across various collections and seasons while maintaining consistent brand recognition. The logo will represent your brand effectively as your line grows.',
    },
    {
      question: 'Do you consider clothing tags?',
      answer:
        'Absolutely! We design clothing logos with tags and labels in mind, ensuring they look professional on all garment applications. The designs maintain impact and clarity at any size.',
    },
    {
      question: 'Can my logo represent different styles?',
      answer:
        "Yes! Whether you offer casual wear, formal attire, or accessories, we'll create a logo that effectively represents your complete fashion line while maintaining a cohesive brand identity.",
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
            buttonHref="https://www.goodlogoai.com"
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
            buttonHref="https://www.goodlogoai.com"
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
            buttonHref="https://www.goodlogoai.com"
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
