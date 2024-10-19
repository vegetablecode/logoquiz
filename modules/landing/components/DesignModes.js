import { useState } from 'react';
import Heading from './Heading';

const DesignModes = ({ designModes }) => {
  const [activeMode, setActiveMode] = useState('makeover');

  return (
    <div className="py-8">
      <Heading title={designModes.h1} subtitle={designModes.h2} />
      <div className="flex items-center justify-center">
        <div className="bg-white p-4 md:p-8 rounded-2xl">
          <div
            role="tablist"
            className="tabs pb-5 tabs-boxed bg-white max-w-md mx-auto"
          >
            <a
              role="tab"
              className={`tab h-12 ${
                activeMode === 'makeover' ? 'tab-active' : ''
              }`}
              onClick={() => setActiveMode('makeover')}
            >
              Makeover Mode 🛠️
            </a>
            <a
              role="tab"
              className={`tab h-12 ${
                activeMode === 'arrange' ? 'tab-active' : ''
              }`}
              onClick={() => setActiveMode('arrange')}
            >
              Enhance Mode ✨
            </a>
          </div>
          <div className="text-center text-gray-600 max-w-md mx-auto">
            {activeMode === 'makeover'
              ? designModes.mode1.description
              : designModes.mode2.description}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6 justify-center">
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off max-w-screen-md relative flex items-center justify-center">
            <div
              className="absolute text-white text-3xl hover:scale-110 ease-in-out duration-150 transform font-bold z-10"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow here
              }}
            >
              Click to redesign ✨
            </div>
            <img
              className="rounded-3xl"
              src="/landing/examples/default-example.jpg"
              alt="Default bedroom design"
            />
          </div>
          <div className="swap-on max-w-screen-md">
            <img
              className="rounded-3xl"
              src={`/landing/examples/${
                activeMode === 'makeover'
                  ? 'makeover-example.jpg'
                  : 'arrange-example.jpg'
              }`}
              alt={
                activeMode === 'makeover'
                  ? 'Bedroom redesigned with makeover mode'
                  : 'Bedroom redesigned with enhance mode'
              }
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default DesignModes;
