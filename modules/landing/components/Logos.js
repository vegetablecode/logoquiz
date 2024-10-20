const Logos = () => (
  <div className="flex w-full space-x-4 justify-center items-center flex-wrap py-12">
    {[
      'trulia.svg',
      'compass.svg',
      'theverge.png',
      'homes.svg',
      'zillow.svg',
    ].map((id) => (
      <img
        key={id}
        alt="logo"
        src={'/landing/logos/' + id}
        className="w-36 h-auto"
      />
    ))}
  </div>
);

export default Logos;
