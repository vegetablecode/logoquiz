import Footer from 'modules/landing/components/Footer';
import Navbar from 'modules/landing/components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full text-center px-4 sm:px-8 space-y-8 py-4">
        <Navbar />
        <div>
          <div className="max-w-3xl text-left mx-auto py-5 flex flex-col space-y-16">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
