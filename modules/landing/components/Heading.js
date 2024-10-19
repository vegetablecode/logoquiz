const Heading = ({ title, subtitle }) => (
  <div className="flex flex-col space-y-4 max-w-2xl items-center mx-auto text-center mb-8">
    <h2 className="text-5xl font-black">{title}</h2>
    <h3 className="text-xl max-w-xl text-gray-600">{subtitle}</h3>
  </div>
);

export default Heading;
