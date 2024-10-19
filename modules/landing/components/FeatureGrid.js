const FeatureGrid = ({ items }) => {
  return (
    <div className="grid max-w-screen-lg pb-12 mx-auto grid-cols-2 gap-4">
      {items.map((item) => (
        <div className="flex flex-col p-5 text-justify bg-white rounded-3xl">
          <div className="text-5xl py-4 mx-auto">{item.icon}</div>
          <div>
            <div className="font-semibold">{item.heading}</div>
            <div className="text-gray-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
