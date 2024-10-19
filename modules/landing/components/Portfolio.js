const Portfolio = () => (
  <div className="flex flex-col py-12 space-y-4 items-center justify-center">
    <h2 className="text-3xl sm:text-5xl max-w-xl text-center font-bold">
      Portfolio
    </h2>
    <div className="pt-1 pb-5">Here are some of logos we created</div>
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 ">
      {LOGOS.map((item) => (
        <img src={item} className="card shadow-xl" />
      ))}
    </div>
  </div>
);

export default Portfolio;
