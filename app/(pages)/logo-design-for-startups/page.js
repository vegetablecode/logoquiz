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
    title: 'Logo Design for Startups | Professional Startup Branding',
    description:
      'Get a professional startup logo that positions your business for success. Receive 3 custom designs in 24 hours. Perfect for tech startups, new businesses, and innovative ventures.',
  },
  hero: {
    h1: ['Professional Logo Design for Startups 🚀'],
    h2: 'Launch your startup with a professional brand identity. Take our simple quiz and receive 3 unique logo designs within 24 hours. Perfect for tech startups, new ventures, and innovative businesses.',
  },
  about: {
    h1: 'Why Your Startup Needs a Professional Logo 🎯',
    h2: "In the competitive startup world, your logo is often an investor's or customer's first impression. Our specialized startup logos help you build credibility, attract stakeholders, and establish a brand that scales.",
  },
  spaces: {
    h1: 'Startup Logo Excellence 💫',
    h2: "Whether you're launching a tech platform, SaaS product, or innovative service, we'll design the perfect logo to represent your vision. Stand out in the startup ecosystem with professional branding.",
    altText:
      'Before and after comparison showing startup brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Startup Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your startup through our simple quiz. Share your vision, market position, and growth goals.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted for your specific startup.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your startup logo is exactly right.',
  },
  features: {
    h1: 'Startup Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your new venture.',
  },
  reviews: {
    h1: 'Happy Startup Founders 🏆',
    h2: 'Join other successful startups who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Startup? 🚀',
    h2: 'Get started with our quick quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Startup Vision Quiz 🎭',
    h2: "Our specialized quiz helps us understand your startup perfectly. Tell us about your mission, market, and growth plans to ensure your logo captures your venture's potential.",
    altText:
      'Interactive startup logo design quiz showing vision and market questions',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Startup Logos 🎨',
    h2: "Receive three unique, professional logo designs that capture your startup's vision. Each proposal is crafted for scalable businesses, ensuring your brand can grow with you.",
    altText:
      'Sample of custom startup logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen startup logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your venture.',
    altText: 'Logo revision interface showing startup logo refinement options',
    buttonText: 'Learn About Revisions ✨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your startup needs:',
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
    h1: 'Two Startup Logo Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Tech Innovative',
      description:
        'Modern, dynamic designs perfect for tech startups and digital ventures.',
    },
    mode2: {
      title: 'Professional Growth',
      description:
        'Scalable, trustworthy logos ideal for service-based startups.',
    },
  },
  affordability: {
    h1: 'Complete Startup Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom startup logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Startup Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Startup Understanding',
        description:
          'Our designers understand the startup ecosystem, creating logos that appeal to investors, customers, and stakeholders.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every startup logo is designed to look credible across all applications, from pitch decks to app icons.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful startups to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good startup logo?',
      answer:
        'A successful startup logo should convey innovation, credibility, and growth potential. Our designs incorporate elements that resonate with investors and customers while ensuring your venture stands out. We consider factors like your market position, growth goals, and target audience.',
    },
    {
      question: 'Can I use my logo for fundraising?',
      answer:
        'Yes! Your startup logo package includes high-resolution files perfect for pitch decks, investor presentations, and fundraising materials. The logo will help establish credibility with potential investors.',
    },
    {
      question: 'Do you understand tech startups?',
      answer:
        'Absolutely! Our designers have experience creating logos for various startups, from SaaS platforms to innovative apps. We understand the unique needs of tech ventures and create designs that effectively communicate your innovation.',
    },
    {
      question: 'Will my logo scale with growth?',
      answer:
        'Yes! We design startup logos specifically to grow with your business. The designs maintain their impact from initial launch through multiple growth stages, ensuring long-term brand value.',
    },
    {
      question: 'Can you match our innovation level?',
      answer:
        "Yes! Whether you're disrupting an industry or creating a new market, our quiz helps us understand your innovative approach. We'll create logos that perfectly match your startup's vision.",
    },
    {
      question: 'How do I make my logo credible?',
      answer:
        'We design startup logos that balance innovation with professionalism. Your logo will help communicate your unique value proposition while maintaining the credibility needed to attract investors and customers.',
    },
    {
      question: 'What about digital platforms?',
      answer:
        'Your logo package includes formats perfect for websites, apps, and digital platforms. The designs work great as app icons, social media profiles, and digital marketing materials.',
    },
    {
      question: 'Can my logo work for pivots?',
      answer:
        'Yes! We design startup logos with flexibility in mind, ensuring they can adapt to potential pivots or market changes while maintaining brand recognition.',
    },
    {
      question: 'Do you consider pitch decks?',
      answer:
        'Absolutely! We design startup logos with investor presentations in mind, ensuring they convey professionalism and scalability. The designs help establish credibility in fundraising situations.',
    },
    {
      question: 'Can my logo represent future products?',
      answer:
        "Yes! Whether you're planning product expansions or new market entries, we'll create a logo that effectively represents your complete vision while maintaining adaptability for future growth.",
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
