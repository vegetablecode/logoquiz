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
    title: 'Buy A Logo | Professional Custom Logo Design in 24 Hours',
    description:
      'Buy a professional, trademarkable logo with our simple quiz. Get 3 custom designs in 24 hours. Full ownership rights included.',
  },
  hero: {
    h1: ['Buy A Logo - Get 3 Designs in 24 Hours 💫'],
    h2: 'Get a professional, custom logo design that perfectly matches your brand. Take our simple style quiz, and receive 3 unique logo proposals within 24 hours. Includes full ownership rights and unlimited web use.',
  },
  about: {
    h1: 'Why Buy A Logo From Us? 🎯',
    h2: "Professional logo design shouldn't be complicated. Our streamlined process delivers custom, trademarkable logos within 24 hours. Take a quick quiz, and let us create the perfect logo for your brand.",
  },
  spaces: {
    h1: 'From Concept to Custom Logo 💫',
    h2: "Watch your brand come to life with professional logo design. Whether you need a modern business logo or creative brand mark, our process delivers exactly what you're looking for.",
    altText:
      'Before and after comparison showing brand evolution through professional logo design process',
  },
  steps: {
    heading: 'Buy Your Perfect Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Share your brand vision through our simple style quiz. Tell us about your business, preferences, and design needs.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted to match your quiz responses.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your logo is exactly right.',
  },
  features: {
    h1: 'Professional Logo Design Made Simple 🎯',
    h2: 'Experience the easiest way to buy a custom logo for your business.',
  },
  reviews: {
    h1: 'Happy Logo Customers 🏆',
    h2: 'Join thousands who have bought their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Buy Your Logo? 🚀',
    h2: 'Get started with our quick quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Professional Logo Design Quiz 🎭',
    h2: 'Our comprehensive style quiz helps us understand your brand perfectly. Answer simple questions about your business and preferences to ensure your logo matches your vision exactly.',
    altText:
      'Interactive logo design quiz interface showing brand and style preference questions',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Logo Proposals 🎨',
    h2: 'Receive three unique, professional logo designs within 24 hours. Each proposal is crafted based on your quiz responses, ensuring perfect alignment with your brand vision.',
    altText:
      'Sample of custom logo proposals showing different design approaches based on client preferences',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen logo with two free revision rounds. Our designers will refine colors, fonts, and elements until your logo is exactly right.',
    altText:
      'Logo revision interface showing design refinement options and feedback system',
    buttonText: 'Learn About Revisions 🎨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything you need for your brand:',
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
    h1: 'Two Logo Approaches 🎯',
    h2: 'Choose your design direction:',
    mode1: {
      title: 'Modern Business Logo',
      description:
        'Clean, professional designs perfect for business and corporate brands.',
    },
    mode2: {
      title: 'Creative Brand Mark',
      description:
        'Unique, artistic logos ideal for creative businesses and personal brands.',
    },
  },
  affordability: {
    h1: 'All-Inclusive Logo Package 💰',
    h2: 'Everything you need included:',
    options: [
      {
        icon: '💎',
        title: 'Complete Logo Package',
        description:
          '3 custom designs in 24 hours, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Professional Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Custom Creation',
        description:
          'Each logo is uniquely crafted based on your quiz responses, ensuring original designs that perfectly match your brand vision.',
      },
      {
        name: 'Quality Standards',
        description:
          'Professional designers create trademarkable logos that work beautifully across all platforms and print materials.',
      },
      {
        name: 'Fast Delivery',
        description:
          'Our streamlined process delivers three unique logo proposals within 24 hours, with quick revision turnaround.',
      },
    ],
  },
  faq: [
    {
      question: 'What do I get with my logo purchase?',
      answer:
        'Your logo package includes three unique logo proposals within 24 hours, two revision rounds to perfect your chosen design, and complete ownership rights. Your final logo comes in high-resolution PNG format (2800px) suitable for web and social media use. All logos are trademarkable and include full commercial usage rights.',
    },
    {
      question: 'How does the logo quiz work?',
      answer:
        "Our logo quiz helps us understand your brand personality and design preferences. You'll answer questions about your business, target audience, preferred styles, and color preferences. This information helps our designers create logos that perfectly match your vision. The quiz typically takes less than 5 minutes to complete.",
    },
    {
      question: 'Are the logos original and trademarkable?',
      answer:
        'Yes! Each logo is custom-designed based on your quiz responses, ensuring originality. Our designers create unique, trademarkable logos that you can register as your trademark. You receive full ownership rights, allowing you to use your logo however you wish.',
    },
    {
      question: 'What are the revision options?',
      answer:
        'After receiving your three logo proposals, you can select your favorite design and request up to two rounds of revisions. This allows you to refine colors, fonts, proportions, or other elements until your logo is perfect. Our designers aim to complete revisions within 24 hours.',
    },
    {
      question: 'What file formats will I receive?',
      answer:
        'Your logo comes in high-resolution PNG format at 2800px size, perfect for web use, social media, and most digital applications. This resolution ensures your logo looks crisp and professional across all digital platforms.',
    },
    {
      question: 'How long does the whole process take?',
      answer:
        "The entire process is quick and efficient. After completing the quiz and payment, you'll receive three logo proposals within 24 hours. If you need revisions, each round is typically completed within 24 hours as well. Most clients have their perfect logo within 2-3 days.",
    },
    {
      question: "What if I don't like any of the proposals?",
      answer:
        'Our quiz-based approach helps ensure high satisfaction with initial proposals. However, you have two revision rounds to refine your chosen design. Our designers will work with your feedback to create a logo you love.',
    },
    {
      question: 'Can I use my logo anywhere?',
      answer:
        'Yes! You receive full ownership rights with your logo. You can use it on your website, social media, business cards, merchandise, signage, or any other application. The high-resolution format ensures quality display across digital platforms.',
    },
    {
      question: "What's included in the logo package?",
      answer:
        'Your logo package includes everything you need: three custom logo proposals, two revision rounds, high-resolution files, and full ownership rights. Everything is included in one simple package.',
    },
    {
      question: 'How do I know my logo will be unique?',
      answer:
        'Each logo is custom-designed based on your specific quiz responses and brand requirements. Our designers create original artwork for every client, ensuring your logo is unique and trademarkable.',
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
