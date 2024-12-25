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
    title: 'Logo Design for Catering | Professional Catering Logos in 24 Hours',
    description:
      'Get a professional catering logo that makes your business stand out. Receive 3 custom logo designs in 24 hours. Perfect for catering companies, food service, and event businesses.',
  },
  hero: {
    h1: ['Professional Logo Design for Catering Services 🍽️'],
    h2: 'Make your catering business stand out with a professional, custom logo. Take our simple quiz and receive 3 unique logo designs within 24 hours. Perfect for catering companies, event food services, and culinary businesses.',
  },
  about: {
    h1: 'Why Your Catering Business Needs a Professional Logo 🎯',
    h2: "In the competitive catering industry, your logo is often a client's first taste of your brand. Our specialized logos help you build trust, attract events, and establish a professional presence that reflects your culinary excellence.",
  },
  spaces: {
    h1: 'Catering Logo Excellence 💫',
    h2: "Whether you specialize in weddings, corporate events, or private parties, we'll create the perfect logo to represent your catering service. Stand out in the event industry with professional branding.",
    altText:
      'Before and after comparison showing catering business brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Catering Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your catering business through our simple quiz. Share your cuisine style, services, and target clients.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted for your specific catering service.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your catering logo is exactly right.',
  },
  features: {
    h1: 'Catering Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your catering business.',
  },
  reviews: {
    h1: 'Happy Catering Professionals 🏆',
    h2: 'Join other successful catering businesses who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Catering Business? 🚀',
    h2: 'Get started with our quick quiz and receive your custom catering logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Catering Logo Quiz 🎭',
    h2: 'Our specialized quiz helps us understand your catering business perfectly. Tell us about your cuisine, service style, and target market to ensure your logo captures your culinary identity.',
    altText:
      'Interactive catering logo design quiz showing industry-specific questions and options',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Catering Logos 🎨',
    h2: "Receive three unique, professional logo designs that capture your catering service's essence. Each proposal is crafted specifically for the food service industry, ensuring perfect brand representation.",
    altText:
      'Sample of custom catering logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen catering logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your culinary business.',
    altText: 'Logo revision interface showing catering logo refinement options',
    buttonText: 'Learn About Revisions 🎨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your catering business needs:',
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
    h1: 'Two Catering Logo Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Classic Culinary',
      description:
        'Elegant, refined designs perfect for upscale catering services.',
    },
    mode2: {
      title: 'Modern Food Service',
      description:
        'Fresh, dynamic logos ideal for contemporary catering businesses.',
    },
  },
  affordability: {
    h1: 'Complete Catering Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom catering logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Catering Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Industry Understanding',
        description:
          'Our designers understand the catering and event industry, creating logos that appeal to event planners and clients while reflecting your culinary expertise.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every catering logo is designed to look professional across all applications, from event displays to business cards and vehicle graphics.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful catering businesses to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good catering logo?',
      answer:
        'A successful catering logo should convey professionalism, culinary expertise, and attention to detail. Our designs incorporate elements that resonate with event planners and clients while ensuring your business stands out. We consider factors like menu style, target events, and service specialties.',
    },
    {
      question: 'Can I use my logo on uniforms and vehicles?',
      answer:
        'Yes! Your catering logo package includes high-resolution files suitable for all applications, from staff uniforms to vehicle wraps and event displays. The logo will look crisp and professional at any size, ensuring consistent branding across all touchpoints.',
    },
    {
      question: 'Do you understand catering branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various catering businesses, from wedding specialists to corporate event caterers. We understand the unique needs of the industry and create designs that effectively attract your target clients.',
    },
    {
      question: 'Can you match my cuisine style?',
      answer:
        "Yes! Whether you specialize in fine dining, casual events, or specific cuisines, our quiz helps us understand your culinary approach. We'll create logos that perfectly match your food style and service level.",
    },
    {
      question: 'Will my logo appeal to event planners?',
      answer:
        'Our designers understand what event planners look for in catering services. We create logos that convey reliability, quality, and professionalism - key factors in winning event contracts.',
    },
    {
      question: 'How do I make my logo attract clients?',
      answer:
        'We design catering logos that build trust and showcase your culinary expertise. Your logo will help communicate your service quality and specialties, making it easier to attract your ideal clients.',
    },
    {
      question: 'Can my logo work for different events?',
      answer:
        "Yes! Our catering logos are designed to work effectively across various event types while maintaining professional appeal. Whether it's a wedding or corporate function, your logo will represent your business perfectly.",
    },
    {
      question: 'What about marketing materials?',
      answer:
        'Your logo package includes web-ready formats perfect for websites, social media, and marketing materials. The designs work great for event brochures, menu cards, and promotional materials essential for catering marketing.',
    },
    {
      question: 'Do you consider presentation displays?',
      answer:
        'Absolutely! We design catering logos with event displays in mind, ensuring they look professional on buffet setups, food stations, and promotional banners. The designs maintain impact and clarity at any scale.',
    },
    {
      question: 'Can my logo represent multiple services?',
      answer:
        "Yes! Whether you offer full-service catering, drop-off meals, or specialty cuisine, we'll create a logo that effectively represents your complete service offering while maintaining a sophisticated look.",
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
