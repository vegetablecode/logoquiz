'use client';

const Layout = ({ children }) => {
  return (
    <div className="w-full px-5 pt-6 pb-20 flex flex-col space-y-8 bg-base-200 max-w-xl mx-auto items-center justify-start">
      {children}
    </div>
  );
};

export default Layout;
