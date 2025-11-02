'use client';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    window.location.href = 'https://www.goodlogoai.com';
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#005B64] to-[#016D79]">
      <div className="text-white text-center space-y-4">
        <div className="text-4xl font-bold">Redirecting...</div>
        <div className="text-xl">Taking you to our new site ✨</div>
      </div>
    </div>
  );
};

export default Page;
