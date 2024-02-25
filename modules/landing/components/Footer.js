import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="footer p-10 text-white bg-primary max-w-7xl mx-auto">
        <nav>
          <header className="footer-title">Links</header>
          <Link
            href="mailto:superlogostore@gmail.com"
            className="link link-hover"
          >
            Support
          </Link>
          {/* <Link href="/guides" className="link link-hover">
            Blog
          </Link> */}
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link href="/blog/tos" className="link link-hover">
            Terms of services
          </Link>
          <Link href="/blog/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
        </nav>
        <nav>
          <header className="footer-title">About</header>
          <div>SUPERLOGO | 2024</div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
