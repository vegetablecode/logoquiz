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
    title:
      'Logo Design for Bakery Shop | Professional Bakery Logos in 24 Hours',
    description:
      'Get a professional bakery shop logo that makes your business rise above the rest. Receive 3 custom designs in 24 hours. Perfect for bakeries, bread shops, and pastry businesses.',
  },
  hero: {
    h1: ['Professional Logo Design for Bakery Shops 🥖'],
    h2: 'Make your bakery stand out with a professional, custom logo. Take our simple quiz and receive 3 unique logo designs within 24 hours. Perfect for artisan bread makers, pastry shops, and full-service bakeries.',
  },
  about: {
    h1: 'Why Your Bakery Shop Needs a Professional Logo 🎯',
    h2: "In the artisanal baking industry, your logo is often a customer's first taste of your brand. Our specialized bakery logos help you build trust, attract customers, and establish a delicious brand that stands out.",
  },
  spaces: {
    h1: 'Bakery Logo Excellence 💫',
    h2: "Whether you create artisan breads, fresh pastries, or run a full-service bakery, we'll design the perfect logo to represent your craft. Stand out in your local market with professional branding.",
    altText:
      'Before and after comparison showing bakery shop brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Bakery Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your bakery through our simple quiz. Share your specialties, baking style, and target customers.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted for your specific bakery.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your bakery logo is exactly right.',
  },
  features: {
    h1: 'Bakery Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your bakery business.',
  },
  reviews: {
    h1: 'Happy Bakery Owners 🏆',
    h2: 'Join other successful bakeries who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Bakery? 🚀',
    h2: 'Get started with our quick quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Bakery Logo Quiz 🎭',
    h2: "Our specialized quiz helps us understand your bakery perfectly. Tell us about your specialties, baking traditions, and unique offerings to ensure your logo captures your shop's essence.",
    altText:
      'Interactive bakery logo design quiz showing industry-specific questions',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Bakery Logos 🎨',
    h2: "Receive three unique, professional logo designs that capture your bakery's character. Each proposal is crafted specifically for artisanal food businesses, ensuring authentic brand representation.",
    altText:
      'Sample of custom bakery logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen bakery logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your craft.',
    altText: 'Logo revision interface showing bakery logo refinement options',
    buttonText: 'Learn About Revisions ✨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your bakery needs:',
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
    h1: 'Two Bakery Shop Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Traditional Artisan',
      description:
        'Classic, rustic designs perfect for traditional bakeries and bread makers.',
    },
    mode2: {
      title: 'Modern Patisserie',
      description: 'Contemporary, stylish logos ideal for modern bakery cafés.',
    },
  },
  affordability: {
    h1: 'Complete Bakery Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom bakery logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Bakery Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Industry Understanding',
        description:
          'Our designers understand the artisanal baking industry, creating logos that appeal to bread lovers and reflect your craft expertise.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every bakery logo is designed to look appetizing across all applications, from bread packaging to storefront signs.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful bakeries to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good bakery shop logo?',
      answer:
        'A successful bakery logo should convey artisanal quality, freshness, and baking expertise. Our designs incorporate elements that resonate with bread and pastry lovers while ensuring your shop stands out. We consider factors like your specialties, traditions, and target customers.',
    },
    {
      question: 'Can I use my logo on bread packaging?',
      answer:
        'Yes! Your bakery logo package includes high-resolution files suitable for all applications, from bread bags and boxes to storefront signs and delivery vehicles. The logo will look crisp and professional at any size.',
    },
    {
      question: 'Do you understand bakery branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various bakeries, from artisan bread makers to full-service patisseries. We understand the unique needs of the industry and create designs that effectively attract customers.',
    },
    {
      question: 'Can you match my baking style?',
      answer:
        "Yes! Whether you specialize in artisan breads, French pastries, or traditional baked goods, our quiz helps us understand your specific style. We'll create logos that perfectly match your bakery's atmosphere and specialties.",
    },
    {
      question: 'Will my logo look appetizing?',
      answer:
        'Our designers understand how to create logos that make people crave fresh-baked goods! We use colors, shapes, and design elements that appeal to food lovers and convey artisanal quality.',
    },
    {
      question: 'How do I make my logo stand out?',
      answer:
        'We design bakery logos that capture attention while maintaining professional appeal. Your logo will help communicate your unique specialties and baking traditions, making it easier to stand out in your local market.',
    },
    {
      question: 'Can my logo work for food packaging?',
      answer:
        "Yes! Our bakery logos are designed to look beautiful on all types of packaging, from bread bags to pastry boxes. They're perfect for branding your baked goods and maintaining recognition.",
    },
    {
      question: 'What about café signage?',
      answer:
        'If your bakery includes a café area, we ensure your logo works perfectly for menu boards, counter displays, and café signage while maintaining consistency with your overall brand.',
    },
    {
      question: 'Do you consider window displays?',
      answer:
        'Absolutely! We design bakery logos with storefront displays in mind, ensuring they look appetizing on windows, walls, and outdoor signs. The designs maintain impact and clarity at any scale.',
    },
    {
      question: 'Can my logo represent multiple products?',
      answer:
        "Yes! Whether you offer breads, pastries, cakes, or café items, we'll create a logo that effectively represents your complete product range while maintaining an artisanal look.",
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
