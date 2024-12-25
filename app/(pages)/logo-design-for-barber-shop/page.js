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
      'Logo Design for Barber Shop | Professional Barber Logos in 24 Hours',
    description:
      'Get a professional barber shop logo that makes your business stand out. Receive 3 custom designs in 24 hours. Perfect for barbershops, grooming lounges, and hair styling businesses.',
  },
  hero: {
    h1: ['Professional Logo Design for Barber Shops ✂️'],
    h2: 'Make your barbershop stand out with a professional, custom logo. Take our simple quiz and receive 3 unique logo designs within 24 hours. Perfect for traditional barbershops, modern grooming lounges, and styling specialists.',
  },
  about: {
    h1: 'Why Your Barber Shop Needs a Professional Logo 🎯',
    h2: "In the competitive grooming industry, your logo is often a client's first impression. Our specialized barber shop logos help you build trust, attract customers, and establish a professional brand that stands out.",
  },
  spaces: {
    h1: 'Barber Shop Logo Excellence 💫',
    h2: "Whether you run a classic barbershop or modern grooming lounge, we'll create the perfect logo to represent your business. Stand out in your local market with professional branding.",
    altText:
      'Before and after comparison showing barber shop brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Barber Shop Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your barbershop through our simple quiz. Share your style, services, and target customers.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted for your specific shop.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your barber shop logo is exactly right.',
  },
  features: {
    h1: 'Barber Shop Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your barbershop.',
  },
  reviews: {
    h1: 'Happy Barber Shop Owners 🏆',
    h2: 'Join other successful barbershops who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Barber Shop? 🚀',
    h2: 'Get started with our quick quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Barber Shop Logo Quiz 🎭',
    h2: "Our specialized quiz helps us understand your barbershop perfectly. Tell us about your style, services, and target market to ensure your logo captures your shop's identity.",
    altText:
      'Interactive barber shop logo design quiz showing industry-specific questions',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Barber Logos 🎨',
    h2: "Receive three unique, professional logo designs that capture your barbershop's personality. Each proposal is crafted specifically for the grooming industry, ensuring perfect brand representation.",
    altText:
      'Sample of custom barber shop logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen barber shop logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your business.',
    altText:
      'Logo revision interface showing barber shop logo refinement options',
    buttonText: 'Learn About Revisions ✨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your barbershop needs:',
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
    h1: 'Two Barber Shop Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Classic Barbershop',
      description:
        'Traditional, vintage-inspired designs perfect for classic barbershops.',
    },
    mode2: {
      title: 'Modern Grooming',
      description:
        'Contemporary, sleek logos ideal for modern grooming lounges.',
    },
  },
  affordability: {
    h1: 'Complete Barber Shop Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom barbershop logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Barber Shop Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Industry Understanding',
        description:
          'Our designers understand the barbering and grooming industry, creating logos that appeal to your target clients and reflect your expertise.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every barber shop logo is designed to look professional across all applications, from storefront signs to business cards and social media.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful barbershops to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good barber shop logo?',
      answer:
        "A successful barbershop logo should convey professionalism, style, and grooming expertise. Our designs incorporate elements that resonate with clients while ensuring your shop stands out. We consider factors like your shop's style, target clientele, and service specialties.",
    },
    {
      question: 'Can I use my logo on my storefront and uniforms?',
      answer:
        'Yes! Your barbershop logo package includes high-resolution files suitable for all applications, from storefront signs to staff uniforms and appointment cards. The logo will look crisp and professional at any size.',
    },
    {
      question: 'Do you understand barber shop branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various barbershops, from traditional shops to modern grooming lounges. We understand the unique needs of the industry and create designs that effectively attract your target clients.',
    },
    {
      question: "Can you match my shop's style?",
      answer:
        "Yes! Whether you run a classic barbershop or modern grooming lounge, our quiz helps us understand your specific style. We'll create logos that perfectly match your shop's atmosphere and service level.",
    },
    {
      question: 'Will my logo attract the right clients?',
      answer:
        "Our designers understand what different grooming clients look for. We create logos that convey your shop's style and expertise, helping you attract and retain your ideal clientele.",
    },
    {
      question: 'How do I make my logo stand out?',
      answer:
        'We design barbershop logos that capture attention while maintaining professional appeal. Your logo will help communicate your unique style and specialties, making it easier to stand out in your local market.',
    },
    {
      question: 'Can my logo work for multiple locations?',
      answer:
        'Yes! Our barbershop logos are designed to work effectively across multiple locations while maintaining consistent brand recognition. The high-resolution files ensure quality reproduction anywhere.',
    },
    {
      question: 'What about social media and marketing?',
      answer:
        'Your logo package includes web-ready formats perfect for social media, websites, and marketing materials. The designs work great for Instagram posts, appointment cards, and promotional materials.',
    },
    {
      question: 'Do you consider window displays?',
      answer:
        'Absolutely! We design barbershop logos with storefront displays in mind, ensuring they look professional on windows, walls, and outdoor signs. The designs maintain impact and clarity at any scale.',
    },
    {
      question: 'Can my logo represent multiple services?',
      answer:
        "Yes! Whether you offer traditional cuts, beard grooming, or premium styling services, we'll create a logo that effectively represents your complete service offering while maintaining a professional look.",
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
