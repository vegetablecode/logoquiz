import Heading from './Heading';

const AITechnology = ({ aiTechnology }) => {
  return (
    <div className="py-8">
      <Heading title={aiTechnology.h1} subtitle={aiTechnology.h2} />
      <div className="grid grid-cols-2 gap-5 py-4 max-w-screen-lg mx-auto">
        {aiTechnology.features.map((feature) => (
          <div
            key={feature.label}
            className="flex flex-col p-5 text-justify bg-white rounded-3xl"
          >
            <div className="text-5xl py-4 mx-auto">{feature.icon}</div>
            <div>
              <div className="text-center text-lg font-semibold">
                {feature.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AITechnology;
