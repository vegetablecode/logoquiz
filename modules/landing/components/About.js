import Heading from './Heading';

const About = ({ h1, h2 }) => {
  return (
    <div className="py-6 mx-auto">
      <Heading title={h1} subtitle={h2} />
      <div className="flex flex-col max-w-5xl mx-auto md:flex-row justify-center space-x-0 space-y-4 md:space-y-0 md:space-x-4 items-center">
        <div>
          <img
            src="/landing/screenshots/styles.png"
            alt="Old photo of a bedroom before redesign"
            className="rounded-3xl h-full w-full max-w-[300px] shadow-xl"
          />
        </div>
        <img
          src="/landing/arrow-right.png"
          alt="Scribble arrow"
          className="rounded-3xl h-16 transform rotate-90 md:rotate-0"
        />
        <img
          src="/landing/results.png"
          alt="A new photo of the bedroom after redesign"
          className="rounded-3xl w-full md:w-1/2"
        />
      </div>
    </div>
  );
};

export default About;
