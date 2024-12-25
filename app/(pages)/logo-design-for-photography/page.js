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
    title: 'Logo Design for Photography | Professional Photographer Logos',
    description:
      'Get a professional photography logo that captures your artistic vision. Receive 3 custom designs in 24 hours. Perfect for photographers, studios, and visual artists.',
  },
  hero: {
    h1: ['Professional Logo Design for Photographers 📸'],
    h2: 'Make your photography brand stand out with a professional, custom logo. Take our simple quiz and receive 3 unique logo designs within 24 hours. Perfect for professional photographers, studios, and visual artists.',
  },
  about: {
    h1: 'Why Your Photography Brand Needs a Professional Logo 🎯',
    h2: 'In the creative world of photography, your logo represents your artistic vision. Our specialized photography logos help you build recognition, attract clients, and establish a brand that captures your unique style.',
  },
  spaces: {
    h1: 'Photography Logo Excellence 💫',
    h2: "Whether you specialize in weddings, portraits, or commercial photography, we'll design the perfect logo to represent your artistic vision. Stand out in the visual arts market with professional branding.",
    altText:
      'Before and after comparison showing photography brand evolution through professional logo design',
  },
  steps: {
    heading: 'Get Your Photography Logo in 3 Steps ✨',
    h1: 'Step 1: Take the Quiz 📋',
    d1: 'Tell us about your photography business through our simple quiz. Share your style, specialties, and creative vision.',
    h2: 'Step 2: Get Proposals 🎨',
    d2: 'Receive 3 unique, professional logo designs within 24 hours, each crafted to reflect your photographic style.',
    h3: 'Step 3: Perfect Your Logo ✨',
    d3: 'Choose your favorite design and get 2 free revisions to ensure your photography logo is exactly right.',
  },
  features: {
    h1: 'Photography Logo Design Made Simple 🏗️',
    h2: 'Experience the easiest way to get a professional logo for your photography business.',
  },
  reviews: {
    h1: 'Happy Photographers 🏆',
    h2: 'Join other successful photographers who got their perfect logo through our service.',
  },
  action: {
    h1: 'Ready to Brand Your Photography? 🚀',
    h2: 'Get started with our quick quiz and receive your custom logo designs in 24 hours.',
    buttonText: 'Start Logo Quiz Now ✨',
  },
  feature_1: {
    img: '/landing/screenshots/styles.png',
    bg: 'from-blue-700 to-blue-500',
    h1: 'Photography Style Quiz 🎭',
    h2: 'Our specialized quiz helps us understand your photography perfectly. Tell us about your artistic style, target clients, and visual philosophy to ensure your logo captures your essence.',
    altText:
      'Interactive photography logo design quiz showing style and vision questions',
    buttonText: 'Take the Quiz ✨',
  },
  feature_2: {
    img: '/landing/screenshots/dark-mode.png',
    bg: 'from-purple-700 to-purple-500',
    h1: '3 Custom Photography Logos 🎨',
    h2: 'Receive three unique, professional logo designs that capture your artistic vision. Each proposal is crafted specifically for photographers, ensuring authentic brand representation.',
    altText:
      'Sample of custom photography logo proposals showing different design approaches',
    buttonText: 'See Example Logos ✨',
  },
  feature_3: {
    img: '/landing/screenshots/logo-text.png',
    bg: 'from-green-700 to-green-500',
    h1: 'Free Logo Revisions 🏗️',
    h2: 'Perfect your chosen photography logo with two free revision rounds. Our designers will refine every detail until your logo perfectly represents your visual brand.',
    altText:
      'Logo revision interface showing photography logo refinement options',
    buttonText: 'Learn About Revisions ✨',
  },
  aiTechnology: {
    h1: 'Complete Logo Package 💫',
    h2: 'Everything your photography brand needs:',
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
    h1: 'Two Photography Logo Styles 🎯',
    h2: 'Choose your approach:',
    mode1: {
      title: 'Modern Minimal',
      description:
        'Clean, sophisticated designs perfect for contemporary photographers.',
    },
    mode2: {
      title: 'Artistic Signature',
      description:
        'Creative, distinctive logos ideal for unique photography styles.',
    },
  },
  affordability: {
    h1: 'Complete Photography Logo Package 💰',
    h2: 'Everything included:',
    options: [
      {
        icon: '💎',
        title: 'Full Logo Package',
        description:
          '3 custom photography logo designs, 2 revision rounds, high-res files, full ownership rights, and web-ready formats.',
      },
    ],
  },
  technologyExplanation: {
    h1: 'Photography Logo Creation 🧠',
    h2: 'Our design process ensures:',
    keyTechnologies: [
      {
        name: 'Visual Understanding',
        description:
          'Our designers understand photography and visual arts, creating logos that resonate with clients and reflect your artistic style.',
      },
      {
        name: 'Professional Standards',
        description:
          'Every photography logo is designed to look stunning across all applications, from watermarks to business cards.',
      },
      {
        name: 'Market Research',
        description:
          'We study successful photography brands to ensure your logo follows industry best practices while maintaining unique appeal.',
      },
    ],
  },
  faq: [
    {
      question: 'What makes a good photography logo?',
      answer:
        'A successful photography logo should convey artistic vision, professionalism, and creative style. Our designs incorporate elements that resonate with your target clients while ensuring your brand stands out. We consider factors like your photography niche, artistic approach, and client type.',
    },
    {
      question: 'Can I use my logo as a watermark?',
      answer:
        'Yes! Your photography logo package includes formats perfect for watermarking your images. The designs are created with transparency and visibility in mind, ensuring they work beautifully on your photographs.',
    },
    {
      question: 'Do you understand photography branding?',
      answer:
        'Absolutely! Our designers have experience creating logos for various photographers, from wedding specialists to commercial photographers. We understand the unique needs of the industry and create designs that effectively attract your ideal clients.',
    },
    {
      question: 'Will my logo look good on photos?',
      answer:
        'Yes! We design photography logos specifically to work well as watermarks and overlays on images. The designs maintain clarity and professionalism across different photo styles and backgrounds.',
    },
    {
      question: 'Can you match my photography style?',
      answer:
        "Yes! Whether you specialize in minimalist fine art or vibrant event photography, our quiz helps us understand your specific style. We'll create logos that perfectly match your artistic vision.",
    },
    {
      question: 'How do I make my logo stand out?',
      answer:
        'We design photography logos that capture attention while maintaining sophistication. Your logo will help communicate your unique artistic perspective and specialties, making it easier to stand out in the market.',
    },
    {
      question: 'What about social media branding?',
      answer:
        'Your logo package includes formats perfect for social media, websites, and digital portfolios. The designs work great for Instagram profiles, online galleries, and photography marketing materials.',
    },
    {
      question: 'Can my logo work for multiple specialties?',
      answer:
        "Yes! Whether you shoot weddings, portraits, or commercial work, we'll create a logo that effectively represents your complete range while maintaining a cohesive brand identity.",
    },
    {
      question: 'Do you consider photo albums and prints?',
      answer:
        'Absolutely! We design photography logos with print applications in mind, ensuring they look professional on albums, prints, and marketing materials. The designs maintain impact and clarity at any size.',
    },
    {
      question: 'Can my logo represent different services?',
      answer:
        "Yes! Whether you offer photography, videography, or photo editing services, we'll create a logo that effectively represents your complete service offering while maintaining a sophisticated look.",
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
