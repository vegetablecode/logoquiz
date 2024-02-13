import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer p-10 text-white bg-primary">
      <nav>
        <header className="footer-title">Links</header>
        <Link href="mailto:decoratlyapp@gmail.com" className="link link-hover">
          Support
        </Link>
        <Link href="/blog" className="link link-hover">
          Blog
        </Link>
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
        <div>Decoratly | 2024</div>
      </nav>
    </footer>
  );
};

export default Footer;
