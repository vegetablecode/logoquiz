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
    title: 'Logo Design for Car Wash | Professional Car Wash Logos in 24 Hours',
    description:
      'Get a professional car wash logo that makes your business shine. Receive 3 custom car wash logo designs in 24 hours. Perfect for auto detailing and car care businesses.',
  },
  hero: {
    h1: ['Professional Logo Design for Car Wash Businesses 🚗'],
    h2: 'Make your car wash business stand out with a professional, custom logo. Take our simple quiz and receive 3 unique car wash logo designs within 24 hours. Perfect for auto detailing, car care, and wash services.',
  },
  about: {
    h1: 'Why Your Car Wash Needs a Professional Logo 🎯',
    h2: "In the competitive car wash industry, your logo is often a customer's first impression. Our specialized car wash logos help you build trust, attract customers, and establish a professional brand that stands out from competitors.",
  },
  spaces: {
    h1: 'Car Wash Logo Excellence 💫',
    h2: "Whether you run a full-service car wash, auto detailing shop, or mobile cleaning service, we'll create the perfect logo to represent your business. Stand out in your local market with professional branding.",
    altText:
      'Before and after comparison showing car wash business brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Car Wash Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your car wash business through our simple quiz. Share your services, style preferences, and target customers.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional car wash logo designs within 24 hours, each crafted for your specific business.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your car wash logo is exactly right.',
  },
  features: {
    h1: 'Car Wash Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your car wash business.',
  },
  reviews: {
    h1: 'Happy Car Wash Owners 🏆',
    h2: 'Join other successful car wash businesses who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Car Wash? 🚀',
    h2: 'Get started with our quick quiz and receive your custom car wash logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Car Wash Logo Quiz 🎭',
    h2: 'Our specialized quiz helps us understand your car wash business perfectly. Tell us about your services, target market, and style preferences to ensure your logo represents your business exactly.',
    altText:
      'Interactive car wash logo design quiz showing industry-specific questions and options',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Car Wash Logos 🎨',
    h2: "Receive three unique, professional logo designs that capture your car wash's personality. Each proposal is crafted specifically for the car care industry, ensuring perfect brand representation.",
    altText:
      'Sample of custom car wash logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen car wash logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your auto care business.',
    altText: 'Logo revision interface showing car wash logo refinement options',
    buttonText: 'Learn About Revisions 🎨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your car wash needs:',
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
    h1: 'Two Car Wash Logo Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Professional Auto Care',
      description:
        'Clean, trustworthy designs perfect for professional car wash facilities.',
    },
    mode2: {
      title: 'Modern Detail Shop',
      description:
        'Dynamic, eye-catching logos ideal for premium detailing services.',
    },
  },
  affordability: {
    h1: 'Complete Car Wash Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom car wash logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Car Wash Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Industry Understanding',
        description:
          'Our designers understand the car wash industry, creating logos that resonate with auto care customers and stand out in your local market.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every car wash logo is designed to look professional across all applications, from storefront signs to business cards and vehicle wraps.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful car wash businesses to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good car wash logo?',
      answer:
        'A successful car wash logo should convey cleanliness, professionalism, and trustworthiness. Our designs incorporate industry-specific elements that resonate with auto care customers while ensuring your business stands out. We consider factors like visibility on signage, recognition from passing vehicles, and appeal to your target market.',
    },
    {
      question: 'Can I use my logo on my building and vehicles?',
      answer:
        'Yes! Your car wash logo package includes high-resolution files suitable for all applications, from large storefront signs to vehicle wraps and business cards. The logo will look crisp and professional at any size, ensuring consistent branding across all touchpoints.',
    },
    {
      question: 'Do you understand car wash branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various car wash businesses, from full-service facilities to mobile detailing services. We understand the unique needs of the industry and create designs that effectively attract and retain customers.',
    },
    {
      question: 'Can you match my car wash theme?',
      answer:
        "Yes! Whether you run a premium detail shop, eco-friendly car wash, or traditional full-service facility, our quiz helps us understand your specific business approach. We'll create logos that perfectly match your service style and target market.",
    },
    {
      question: 'Will my logo stand out from competitors?',
      answer:
        'Our designers research your local market to ensure your car wash logo stands out while maintaining professional appeal. We create unique designs that help you build a distinctive brand in the competitive car care industry.',
    },
    {
      question: 'How do I make my logo attract customers?',
      answer:
        'We design car wash logos that catch attention and build trust. Your logo will be optimized for visibility and instant recognition, helping attract passing traffic and establish a professional presence in your community.',
    },
    {
      question: 'Can my logo work for multiple locations?',
      answer:
        'Yes! Our car wash logos are designed to work effectively across multiple locations while maintaining consistent brand recognition. The high-resolution files ensure quality reproduction anywhere you need to display your logo.',
    },
    {
      question: 'What about social media and marketing?',
      answer:
        'Your logo package includes web-ready formats perfect for social media, websites, and digital marketing. The designs work great for Facebook ads, Instagram posts, and other promotional materials essential for car wash marketing.',
    },
    {
      question: 'Do you consider outdoor signage?',
      answer:
        "Absolutely! We design car wash logos with outdoor signage in mind, ensuring they're visible and impactful from a distance. The designs work well on illuminated signs, building facades, and roadside displays.",
    },
    {
      question: 'Can my logo represent multiple services?',
      answer:
        "Yes! Whether you offer basic washing, detailing, or full auto care services, we'll create a logo that effectively represents your complete service offering while maintaining a clean, professional look.",
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
