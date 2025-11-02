import ModelSwitcher from 'modules/photos/components/ModelSwitcher';
import { getAllStyles } from 'modules/photos/utils';
import Link from 'next/link';
import { useState } from 'react';

const Showcase = () => {
  const [model, setModel] = useState('makeover');
  return (
    <div className="flex flex-col text-center items-center space-y-16 pb-12">
      <div className="flex flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">
          Two render modes to fit your needs! 👌
        </div>
        <div className="opacity-80 text-xl">
          Choose between 'makeover' and 'enhance' modes ! ✨
        </div>
        <div class="flex pt-2 pb-4 justify-center items-center">
          <ModelSwitcher model={model} setModel={setModel} demo={true} />
        </div>
        <img
          className="card w-full max-w-2xl"
          alt="room"
          src={`/${
            model === 'arrange' ? 'arrange' : 'images'
          }/modernstudio.jpeg`}
        />
      </div>
      <div className="flex flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">
          27 different styles to choose from! 🎨
        </div>
        <div className="opacity-80 text-xl">
          We created 27 beautiful designs you can try on your walls! ✨
        </div>
        <div className="carousel carousel-center space-x-2 w-full rounded-box">
          {getAllStyles().map((style) => (
            <div className="carousel-item w-1/2">
              <img
                src={'/images' + style.image}
                alt="styles"
                className="card"
              />
            </div>
          ))}
        </div>
        <Link href="/photos">
          <button className="btn mt-6 btn-primary">Upload your photo 📸</button>
        </Link>
      </div>
      <div className="flex flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">Create your own prompts! ✍️</div>
        <div className="opacity-80 text-xl">
          Use our <span className="underline">prompt builder</span> to create
          your own designs!
        </div>
        <div className="flex justify-center items-center flex-col space-y-4">
          <img
            src="/stylebuilder.png"
            className="w-full card max-w-lg"
            alt="styles"
          />
          <img
            src="/styles.png"
            className="w-full card max-w-lg"
            alt="styles"
          />
        </div>
      </div>
      <div className="flex bg-white p-8 card shadow flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">
          Design your own️ interior today! ☀️
        </div>
        <div className="opacity-80 text-xl">Upload a photo to start!</div>
        <a href="https://www.goodlogoai.com" target="_blank" rel="dofollow" className="pt-4">
          <button className="btn btn-primary">Take a photo ✨</button>
        </a>
      </div>
    </div>
  );
};

export default Showcase;
