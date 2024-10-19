const SwapImage = ({ src1, src2 }) => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" />
      <div className="swap-off relative flex items-center justify-center">
        <div
          className="absolute text-white text-3xl hover:scale-110 ease-in-out duration-150 transform font-bold z-10"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow here
          }}
        >
          Click to redesign ✨
        </div>
        <img
          src={src1}
          alt="Before and after contemporary old interior design"
          className="w-full rounded-lg shadow-none swap-off"
        />
      </div>
      <img
        src={src2}
        alt="Before and after contemporary interior design transformation with Decoratly"
        className="w-full rounded-lg shadow-none swap-on"
      />
    </label>
  );
};

export default SwapImage;
