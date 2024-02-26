'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import classNames from 'common/utils/classNames';
import randomize from 'common/utils/randomize';
import { LOGOS } from 'modules/logo/consts';
import { createCheckoutSession } from 'modules/payment/lib';
import Carousel from 'modules/quiz/Carousel';
import ModePicker from 'modules/quiz/ModePicker';
import ShapePicker from 'modules/quiz/ShapePicker';
import StylePicker from 'modules/quiz/StylePicker';
import { addNewOrder } from 'modules/quiz/lib';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const [step, setStep] = useState(0);
  const [shape, setShape] = useState('');
  const [businessInfo, setBusinessInfo] = useState('');
  const [style, setStyle] = useState('');
  const [mode, setMode] = useState('');
  const [logo, setLogo] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [gallery, setGallery] = useState([]);

  const router = useRouter();

  const updateGallery = () => {
    if (step === 0) {
      setGallery(
        randomize(
          LOGOS.filter((logo) => logo.layout === shape).map(
            (item) => item.image
          )
        )
      );
    }
    if (step === 1) {
      setGallery(
        randomize(
          LOGOS.filter((logo) => logo.styles.includes(style)).map(
            (item) => item.image
          )
        )
      );
    }
    if (step === 2) {
      setGallery(
        randomize(
          LOGOS.filter((logo) =>
            mode === 'Dark mode' ? logo.darkMode : !logo.darkMode
          ).map((item) => item.image)
        )
      );
    }
  };

  useEffect(() => {
    updateGallery();
  }, [shape, style, mode]);

  useEffect(() => {
    setGallery([]);
  }, [step]);

  const saveAndPay = async () => {
    await addNewOrder(shape, businessInfo, style, mode, logo, image, email);
    const session = await createCheckoutSession();
    console.log(session);
    if (session?.url) {
      router.push(session.url);
    }
  };

  const renderStep0 = () => (
    <>
      {shape === '' ? (
        <div className="text-center p-8 py-8 text-white flex flex-col space-y-4">
          <div className="font-semibold text-xl">Hello 👋</div>
          <div>
            Let's choose a layout <br /> of your logo first! ⬇️
          </div>
        </div>
      ) : (
        <Carousel gallery={gallery} />
      )}
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold">Select a layout 📦</div>
          <ShapePicker shape={shape} setShape={setShape} />
        </div>
        <button onClick={() => setStep(1)} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );

  const renderStep1 = () => (
    <>
      {style === '' ? (
        <div className="text-center p-8 py-8 text-white flex flex-col space-y-4">
          <div className="text-4xl">✨</div>
          <div>
            What style do you want <br /> your logo to have? 🎨
          </div>
        </div>
      ) : (
        <Carousel gallery={gallery} />
      )}
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold">Select a style</div>
          <StylePicker style={style} setStyle={setStyle} />
        </div>
        <button onClick={() => setStep(2)} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      {mode === '' ? (
        <div className="text-center p-8 py-8 text-white flex flex-col space-y-4">
          <div className="text-4xl">🌙</div>
          <div>
            Do you prefer dark mode <br /> or light mode for your logo?
          </div>
        </div>
      ) : (
        <Carousel gallery={gallery} />
      )}
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold">Select logo theme</div>
          <ModePicker mode={mode} setMode={setMode} />
        </div>
        <button onClick={() => setStep(3)} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <div className="text-center p-8 py-8 text-white flex flex-col space-y-4">
        <div className="text-4xl">🏢</div>
        <div>What does your company do?</div>
      </div>
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="text-2xl font-bold">Business Information</div>
            <div className="pt-2">
              Please enter a short description of your company’s products or
              services. This will help us generate a logo that matches your
              business.
            </div>
          </div>
          <textarea
            className="textarea"
            placeholder="ex. 'I offer interior design services'"
            onChange={(e) => setBusinessInfo(e.target.value)}
            value={businessInfo}
          ></textarea>
        </div>
        <div></div>
        <button onClick={() => setStep(4)} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <div className="text-center p-8 py-8 text-white flex justify-center items-center flex-col space-y-4">
        <div className="w-24 h-24 card bg-black bg-opacity-30"></div>
        <div className="h-7 card bg-black border-2 border-cyan-400 min-w-36 px-2 bg-opacity-30">
          {logo}
        </div>
      </div>
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="text-2xl font-bold">Logo text setup</div>
            <div className="pt-2">
              Please enter the name of your company or any slogan or tagline you
              want to use. You can also leave this blank if you only want an
              image logo.
            </div>
          </div>
          <input
            className="input"
            placeholder="ex. 'I offer interior design services'"
            onChange={(e) => setLogo(e.target.value)}
            value={logo}
          />
        </div>
        <div></div>
        <button onClick={() => setStep(5)} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );

  const renderStep5 = () => (
    <>
      <div className="text-center p-8 py-8 text-white flex justify-center items-center flex-col space-y-4">
        <div className="w-24 h-24 card bg-black border-2 border-cyan-300 bg-opacity-30"></div>
        <div className="h-7 card bg-black min-w-36 px-2 bg-opacity-30">
          {logo}
        </div>
      </div>
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="text-2xl font-bold">Logo image setup</div>
            <div className="pt-2">
              Please describe what you want your logo to look like. Do you have
              a particular symbol or object in mind that you'd like to include?
            </div>
          </div>
          <textarea
            className="textarea"
            placeholder="ex. 'a launching rocket with a colorful background'"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div></div>
        <button onClick={() => setStep(6)} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );

  const renderStep6 = () => (
    <>
      <div className="text-center p-8 py-8 text-white flex flex-col space-y-4">
        <div className="text-4xl">✉️</div>
        <div>What is your e-mail address?</div>
      </div>
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="text-2xl font-bold">Enter your e-mail address</div>
            <div className="pt-2">
              Please enter your e-mail address so we can send you your logo file
              and any updates or revisions. We will not share your e-mail with
              anyone else.
            </div>
          </div>
          <input
            className="input"
            placeholder="e.g., john@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div></div>
        <button onClick={() => setStep(7)} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );

  const renderStep7 = () => (
    <>
      <div className="text-center p-8 py-8 text-white flex justify-center items-center flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="text-4xl font-semibold">$39</div>
          <div>3 proposals + 2 revisions ✅</div>
          <div>12 hour delivery 💨</div>
        </div>
      </div>
      <div className="bg-white fixed bottom-0 w-full h-[445px] rounded-t-[30px] p-6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="text-2xl font-bold">What you'll get?</div>
            <div className="pt-2 flex flex-col space-y-2">
              <div>✓ .PNG format (2800px)</div>
              <div>✓ 12h delivery</div>
              <div>✓ 2 revisions</div>
              <div>✓ 3 proposals</div>
              <div>✓ Full ownership</div>
              <div>✓ Trademarkable</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <button onClick={() => setStep(0)} className="btn">
            Go back to quiz
          </button>
          <button onClick={() => saveAndPay()} className="btn btn-primary">
            Pay - $39 USD
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="h-[80vh] w-full bg-gradient-to-b from-[#005B64] to-[#016D79]">
      <div className="px-5 pt-3">
        <progress
          className="progress progress-secondary w-full"
          value={step + 1}
          max="9"
        ></progress>
      </div>
      {step === 0 ? renderStep0() : ''}
      {step === 1 ? renderStep1() : ''}
      {step === 2 ? renderStep2() : ''}
      {step === 3 ? renderStep3() : ''}
      {step === 4 ? renderStep4() : ''}
      {step === 5 ? renderStep5() : ''}
      {step === 6 ? renderStep6() : ''}
      {step === 7 ? renderStep7() : ''}
    </div>
  );
};

export default Page;
