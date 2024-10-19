const Step = ({ img, title, description }) => (
  <div className="text-center flex flex-col max-w-sm space-y-4 items-center justify-start">
    <img src={img} alt="step" className="rounded-full w-8/12" />
    <div>
      <div className="font-semibold text-xl py-2">{title}</div>
      <div className="text-gray-600 max-w-md">{description}</div>
    </div>
  </div>
);

const Steps = ({ heading, h1, d1, h2, d2, h3, d3 }) => (
  <div className="py-12 flex flex-col items-center justify-center space-y-4">
    <div className="flex flex-col items-center justify-center space-y-2">
      <h1 className="text-3xl sm:text-5xl max-w-2xl font-bold">{heading}</h1>
    </div>
    <div className="py-6 grid gap-6 grid-cols-1 sm:grid-cols-3">
      <Step img="/landing/steps/take.jpeg" title={h1} description={d1} />
      <Step img="/landing/steps/choose.jpeg" title={h2} description={d2} />
      <Step img="/landing/steps/watch.jpeg" title={h3} description={d3} />
    </div>
  </div>
);

export default Steps;
