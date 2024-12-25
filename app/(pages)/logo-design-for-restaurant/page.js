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
    title: 'Logo Design for Restaurant | Professional Restaurant Logos',
    description:
      'Get a professional restaurant logo that makes your establishment stand out. Receive 3 custom designs in 24 hours. Perfect for restaurants, cafes, and dining venues.',
  },
  hero: {
    h1: ['Professional Logo Design for Restaurants 🍽️'],
    h2: 'Make your restaurant stand out with a professional, custom logo. Take our simple quiz and receive 3 unique logo designs within 24 hours. Perfect for restaurants, bistros, and dining establishments.',
  },
  about: {
    h1: 'Why Your Restaurant Needs a Professional Logo 🎯',
    h2: "In the competitive dining industry, your logo is often a customer's first taste of your brand. Our specialized restaurant logos help you build recognition, attract diners, and establish a memorable brand that stands out.",
  },
  spaces: {
    h1: 'Restaurant Logo Excellence 💫',
    h2: "Whether you run a fine dining establishment, casual eatery, or food truck, we'll design the perfect logo to represent your culinary vision. Stand out in your local market with professional branding.",
    altText:
      'Before and after comparison showing restaurant brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Restaurant Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your restaurant through our simple quiz. Share your cuisine type, atmosphere, and dining concept.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted for your specific restaurant.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your restaurant logo is exactly right.',
  },
  features: {
    h1: 'Restaurant Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your dining establishment.',
  },
  reviews: {
    h1: 'Happy Restaurant Owners 🏆',
    h2: 'Join other successful restaurants who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Restaurant? 🚀',
    h2: 'Get started with our quick quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Restaurant Style Quiz 🎭',
    h2: "Our specialized quiz helps us understand your restaurant perfectly. Tell us about your cuisine, dining atmosphere, and target customers to ensure your logo captures your establishment's essence.",
    altText:
      'Interactive restaurant logo design quiz showing dining concept questions',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Restaurant Logos 🎨',
    h2: "Receive three unique, professional logo designs that capture your restaurant's character. Each proposal is crafted specifically for dining establishments, ensuring perfect brand representation.",
    altText:
      'Sample of custom restaurant logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen restaurant logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your dining establishment.',
    altText:
      'Logo revision interface showing restaurant logo refinement options',
    buttonText: 'Learn About Revisions ✨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your restaurant needs:',
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
    h1: 'Two Restaurant Logo Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Classic Dining',
      description: 'Elegant, refined designs perfect for upscale restaurants.',
    },
    mode2: {
      title: 'Modern Casual',
      description: 'Fresh, contemporary logos ideal for casual dining spots.',
    },
  },
  affordability: {
    h1: 'Complete Restaurant Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom restaurant logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Restaurant Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Industry Understanding',
        description:
          'Our designers understand the restaurant industry, creating logos that appeal to diners and reflect your culinary vision.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every restaurant logo is designed to look appetizing across all applications, from menu designs to storefront signs.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful restaurants to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good restaurant logo?',
      answer:
        'A successful restaurant logo should convey your cuisine style, atmosphere, and dining experience. Our designs incorporate elements that resonate with diners while ensuring your establishment stands out. We consider factors like your cuisine type, dining concept, and target customers.',
    },
    {
      question: 'Can I use my logo on menus and packaging?',
      answer:
        'Yes! Your restaurant logo package includes high-resolution files suitable for all applications, from menus and takeout packaging to storefront signs and delivery vehicles. The logo will look crisp and professional at any size.',
    },
    {
      question: 'Do you understand restaurant branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various dining establishments, from fine dining restaurants to casual eateries. We understand the unique needs of the industry and create designs that effectively attract your target diners.',
    },
    {
      question: 'Can you match our cuisine style?',
      answer:
        "Yes! Whether you serve Italian cuisine, Asian fusion, or American classics, our quiz helps us understand your culinary approach. We'll create logos that perfectly match your restaurant's style and atmosphere.",
    },
    {
      question: 'Will my logo look appetizing?',
      answer:
        'Our designers understand how to create logos that make people hungry! We use colors, shapes, and design elements that appeal to diners and convey the quality of your cuisine.',
    },
    {
      question: 'How do I make my logo stand out?',
      answer:
        'We design restaurant logos that capture attention while maintaining professional appeal. Your logo will help communicate your unique cuisine and dining experience, making it easier to stand out in your local market.',
    },
    {
      question: 'What about delivery packaging?',
      answer:
        'Your logo package includes formats perfect for takeout containers, delivery bags, and food packaging. The designs maintain quality and recognition across all customer touchpoints.',
    },
    {
      question: 'Can my logo work for multiple locations?',
      answer:
        'Yes! Our restaurant logos are designed to work effectively across multiple locations while maintaining consistent brand recognition. The high-resolution files ensure quality reproduction anywhere.',
    },
    {
      question: 'Do you consider outdoor signage?',
      answer:
        'Absolutely! We design restaurant logos with storefront displays in mind, ensuring they look appetizing on windows, walls, and outdoor signs. The designs maintain impact and clarity at any scale.',
    },
    {
      question: 'Can my logo represent different services?',
      answer:
        "Yes! Whether you offer dine-in, takeout, catering, or delivery services, we'll create a logo that effectively represents your complete service offering while maintaining a delicious look.",
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
