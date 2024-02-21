'use client';
import classNames from 'common/utils/classNames';
import { LOGOS } from 'modules/logo/consts';
import { useEffect, useState } from 'react';

const Gallery = ({ gallery }) => (
  <div className="flex flex-col lg:space-y-16 items-center">
    <div className="cr-wrapper">
      <div className="cr">
        <div className="flex space-x-4 pt-4 pb-8">
          {gallery.map((item) => (
            <div key={item} className="cr-slide flex">
              <img
                src={item}
                alt="gallery"
                className="h-auto w-auto shadow-xl cursor-pointer rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const options = [
  {
    id: 'vertical',
    label: 'Text under the image',
    icon: (
      <div className="flex flex-col space-y-2 items-center">
        <div className="bg-gray-200 h-12 w-12 rounded-full" />
        <div className="bg-gray-200 h-4 rounded-lg w-24" />
      </div>
    ),
  },

  {
    id: 'horizontal',
    label: 'Text after the image',
    icon: (
      <div className="flex space-x-2 items-center">
        <div className="bg-gray-200 h-10 w-10 rounded-full" />
        <div className="bg-gray-200 h-4 rounded-lg w-24" />
      </div>
    ),
  },
  {
    id: 'hybrid',
    label: 'Text on the image',
    icon: (
      <div className="flex space-x-2 items-center">
        <div className="bg-gray-200 flex items-center justify-center h-16 w-16 rounded-full">
          <div className="bg-gray-200 h-4 rounded-lg w-16 border-2 border-white" />
        </div>
      </div>
    ),
  },
  {
    id: 'image',
    label: 'Image only',
    icon: (
      <div className="flex space-x-2 items-center">
        <div className="bg-gray-200 h-16 w-16 rounded-full" />
      </div>
    ),
  },
];

const Picker = ({ shape, setShape }) => (
  <div className="grid grid-cols-2 gap-4">
    {options.map((item) => (
      <button
        onClick={() => setShape(item.id)}
        className={classNames(
          'w-full h-full space-y-2 border-2 card py-4 px-2 text-center flex items-center flex-col',
          item.id === shape ? 'border-primary' : 'border-gray-200'
        )}
      >
        <div>{item.label}</div>
        <div className="h-full flex items-center justify-center">
          <div>{item.icon}</div>
        </div>
      </button>
    ))}
  </div>
);

const Page = () => {
  const [shape, setShape] = useState('');
  const [gallery, setGallery] = useState([]);

  const updateGallery = () => {
    setGallery(
      LOGOS.filter((logo) => logo.layout === shape).map((item) => item.image)
    );
  };

  useEffect(() => {
    updateGallery();
  }, [shape]);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#005B64] to-[#016D79]">
      <div className="px-5 pt-3">
        <progress
          className="progress progress-secondary w-full"
          value="70"
          max="100"
        ></progress>
      </div>
      {shape === '' ? (
        <div className="text-center p-8 pt-16 text-white flex flex-col space-y-4">
          <div className="font-semibold text-xl">Hello 👋</div>
          <div>Let's choose a shape first</div>
          <div className="opacity-80 text-sm">
            choose what you want to create 👇
          </div>
        </div>
      ) : (
        <Gallery gallery={gallery} />
      )}
      <div className="bg-white fixed bottom-0 w-full h-[calc(100vh-280px)] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold">Select a shape</div>
          <Picker shape={shape} setShape={setShape} />
        </div>
        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

export default Page;
