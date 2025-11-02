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
      'Logo Design for Architecture Firm | Professional Architectural Logos',
    description:
      'Get a sophisticated logo design for your architecture firm. Receive 3 custom logo proposals in 24 hours. Perfect for architectural practices, design studios, and construction firms.',
  },
  hero: {
    h1: ['Professional Logo Design for Architecture Firms 🏛️'],
    h2: 'Elevate your architectural practice with a sophisticated, professional logo. Take our design brief quiz and receive 3 unique logo proposals within 24 hours. Perfect for architecture firms, design studios, and urban planning practices.',
  },
  about: {
    h1: 'Why Your Architecture Firm Needs a Professional Logo 🎯',
    h2: 'Your logo should reflect the same attention to detail and design excellence as your architectural work. Our specialized logos help establish credibility, attract clients, and position your firm as a leader in architectural design.',
  },
  spaces: {
    h1: 'Architectural Logo Excellence 💫',
    h2: "Whether you specialize in residential, commercial, or sustainable architecture, we'll create a logo that perfectly represents your firm's design philosophy and expertise.",
    altText:
      'Before and after comparison showing architecture firm brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Architecture Firm Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Brief 📋',
    d1: "Share your firm's vision through our design brief quiz. Tell us about your architectural focus, design philosophy, and target clients.",
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted to reflect your architectural practice.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your logo perfectly represents your firm.',
  },
  features: {
    h1: 'Architecture Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your architectural practice.',
  },
  reviews: {
    h1: 'Happy Architecture Professionals 🏆',
    h2: 'Join other successful architecture firms who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Architecture Firm? 🚀',
    h2: 'Get started with our design brief quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Brief Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Architecture Logo Brief 🎭',
    h2: "Our specialized design brief helps us understand your architectural practice perfectly. Share your design philosophy, specialties, and market position to ensure your logo reflects your firm's vision.",
    altText:
      'Interactive architecture firm logo design brief showing industry-specific questions',
    buttonText: 'Take the Brief ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Architecture Logos 🎨',
    h2: "Receive three unique, professional logo proposals that capture your firm's design philosophy. Each concept is crafted specifically for architectural practices, ensuring sophisticated brand representation.",
    altText:
      'Sample of custom architecture firm logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your architectural practice.',
    altText:
      'Logo revision interface showing architecture logo refinement options',
    buttonText: 'Learn About Revisions 🎨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your architecture firm needs:',
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
    h1: 'Two Architectural Logo Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Contemporary Minimalist',
      description:
        'Clean, sophisticated designs perfect for modern architectural practices.',
    },
    mode2: {
      title: 'Classic Professional',
      description:
        'Timeless, refined logos ideal for established architecture firms.',
    },
  },
  affordability: {
    h1: 'Complete Architecture Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom architecture logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Architecture Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Industry Understanding',
        description:
          'Our designers understand architectural practices, creating logos that resonate with clients and reflect your design expertise.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every architecture logo is designed to look sophisticated across all applications, from business proposals to building signage.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful architecture firms to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good architecture firm logo?',
      answer:
        'A successful architecture logo should convey design excellence, professionalism, and attention to detail. Our designs incorporate elements that resonate with high-value clients while reflecting your architectural expertise. We consider factors like your design philosophy, project specialties, and target market.',
    },
    {
      question: 'Can I use my logo on building plans and proposals?',
      answer:
        'Yes! Your architecture logo package includes high-resolution files suitable for all applications, from technical drawings to project proposals and marketing materials. The logo will maintain professional quality across all uses.',
    },
    {
      question: 'Do you understand architectural branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various architectural practices, from boutique residential firms to large commercial studios. We understand the unique needs of the industry and create designs that effectively convey your expertise.',
    },
    {
      question: 'Can you match our design philosophy?',
      answer:
        "Yes! Whether you specialize in modern minimalism, sustainable design, or traditional architecture, our brief helps us understand your approach. We'll create logos that perfectly reflect your firm's design principles.",
    },
    {
      question: 'Will my logo appeal to high-value clients?',
      answer:
        'Our designers understand what sophisticated clients look for in architectural practices. We create logos that convey expertise, innovation, and professionalism - key factors in attracting prestigious projects.',
    },
    {
      question: 'How do I make my logo stand out?',
      answer:
        'We design architecture logos that differentiate your practice while maintaining professional sophistication. Your logo will help communicate your unique approach to design and expertise in your specialties.',
    },
    {
      question: 'Can my logo work for different projects?',
      answer:
        "Yes! Our architecture logos are designed to work effectively across various project types while maintaining professional appeal. Whether it's residential, commercial, or institutional work, your logo will represent your firm perfectly.",
    },
    {
      question: 'What about proposal documents?',
      answer:
        'Your logo package includes formats perfect for professional documents, presentations, and marketing materials. The designs work seamlessly in project proposals, portfolio documents, and client presentations.',
    },
    {
      question: 'Do you consider construction site signage?',
      answer:
        'Absolutely! We design architecture logos with site signage in mind, ensuring they maintain impact and clarity on project hoardings and building displays. The designs work effectively at any scale.',
    },
    {
      question: 'Can my logo represent multiple specialties?',
      answer:
        "Yes! Whether you offer architectural design, urban planning, or interior architecture, we'll create a logo that effectively represents your complete service offering while maintaining sophisticated appeal.",
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
