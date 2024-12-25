import Heading from './Heading';

const Affordability = ({ affordability }) => {
  return (
    <div className="py-8">
      <Heading title={affordability.h1} subtitle={affordability.h2} />
      <div className="grid grid-cols-1 gap-5 py-4 max-w-screen-lg mx-auto">
        {affordability.options.map((option) => (
          <div className="flex flex-col p-5 text-justify bg-white rounded-3xl">
            <div className="text-5xl py-4 mx-auto">{option.icon}</div>
            <div>
              <div className="text-center text-lg font-semibold">
                {option.title}
              </div>
              <div className="text-center mt-2 text-gray-600">
                {option.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affordability;
