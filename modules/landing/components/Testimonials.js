import Heading from './Heading';

const ree = [
  {
    name: 'Sarah Johnson',
    role: 'Interior Design Student',
    review:
      "Decoratly's interior AI has revolutionized the way I approach my design projects. The makeover mode is perfect for when I need inspiration for a complete room transformation. It's like having a professional mentor guiding me through various design possibilities. The free version was great to start with, but I quickly upgraded to PRO for unlimited renders. It's an invaluable tool for my studies!",
    avatar: '/landing/avatars/sarah-johnson.jpeg',
  },

  {
    name: 'Michael Chen',
    role: 'Real Estate Agent',
    review:
      "As a realtor, I'm always looking for ways to help clients visualize a property's potential. Decoratly's enhance mode is a game-changer! The interior AI creates realistic, subtle changes that make spaces more appealing without seeming unrealistic. The 24-hour PRO access for $4 is perfect for when I have a bunch of listings to work on. This app has definitely helped me close deals faster!",
    avatar: '/landing/avatars/michael-chen.jpeg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Home Renovation Blogger',
    review:
      "I've tried many interior design apps, but Decoratly's interior AI is in a league of its own. The ability to build custom styles with the prompt feature or style builder gives me endless creativity for my blog content. The makeover mode provides dramatic before-and-after shots that my followers love. The monthly PRO subscription is a no-brainer for the value it provides!",
    avatar: '/landing/avatars/emily-rodriguez.jpeg',
  },
  {
    name: 'David Thompson',
    role: 'Homeowner',
    review:
      "I was skeptical about using an interior AI for my home redesign, but Decoratly blew me away! The free version let me test it out, and I was so impressed that I immediately bought the 7-day PRO access. The enhance mode helped me visualize small changes that made a big impact in my living room. It's like having a personal interior designer on call!",
    avatar: '/landing/avatars/david-thompson.jpeg',
  },
  {
    name: 'Tom Anderson',
    role: 'DIY Enthusiast',
    review:
      "I love tackling home improvement projects, but interior design has always been a challenge for me. Decoratly's interior AI has been a game-changer! The style presets give me great starting points, and the enhance mode helps me visualize realistic changes. I appreciate that I can use the free version for quick projects and upgrade to PRO when I need more options. It's made my DIY adventures so much more successful!",
    avatar: '/landing/avatars/tom-anderson.jpeg',
  },
  {
    name: 'Grace Kim',
    role: 'Architecture Student',
    review:
      "As an architecture student, I often need to visualize interior spaces quickly. Decoratly's interior AI is incredibly helpful for this. The makeover mode pushes me to think outside the box, while the enhance mode helps me refine my ideas. The style builder feature is fantastic for experimenting with different concepts. The student-friendly pricing of the PRO version means I can access these amazing features without breaking the bank!",
    avatar: '/landing/avatars/grace-kim.jpeg',
  },
];

const REVIEWS = [
  {
    id: 0,
    description:
      'I was amazed by how fast and easy it was to get a logo for my new business. The quiz was fun and the logo proposals were spot on. I highly recommend SuperLogo to anyone who needs a professional logo.',
    name: 'Anna F.',
    position: 'founder',
    company: "Anna's Bakery",
    avatar: '/avatars/anna.jpg',
  },
  {
    id: 1,
    description:
      'SuperLogo is the best logo design service I have ever used. They delivered exactly what I wanted in less than a day. The logo looks great on my website and social media. Thank you SuperLogo!',
    name: 'James K.',
    position: 'owner',
    company: 'James Fitness',
    avatar: '/avatars/james.jpg',
  },

  {
    id: 2,
    description:
      'I had no idea what kind of logo I wanted for my brand, but SuperLogo helped me figure it out. The quiz was very helpful and the logo proposals were creative and unique. I love my new logo and I’m very happy with the service.',
    name: 'Lisa B.',
    position: 'creator',
    company: 'LS Art',
    avatar: '/avatars/lisa.jpg',
  },
];

const ReviewCard = ({ name, role, avatar, review }) => (
  <div className="rounded-3xl border border-gray-200 bg-white p-5 flex flex-col space-y-5">
    <div className="flex items-center space-x-4">
      <img src={avatar} className="h-16 rounded-full" alt="customer" />
      <div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-600 text">{role}</div>
      </div>
    </div>
    <div className="italic">{review}</div>
  </div>
);

const Testimonials = ({ h1, h2 }) => {
  return (
    <div className="py-12 flex flex-col space-y-5 mx-auto">
      <Heading title={h1} subtitle={h2} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-screen-lg mx-auto">
        {REVIEWS.map((review) => (
          <ReviewCard
            name={review.name}
            role={review.position}
            avatar={review.avatar}
            review={review.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
