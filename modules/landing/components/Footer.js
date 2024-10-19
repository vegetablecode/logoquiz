import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer p-10 text-white bg-primary">
      <nav>
        <header className="footer-title">Links</header>
        <Link href="mailto:buyalogo.co@gmail.com" className="link link-hover">
          Support
        </Link>
        {/* <Link href="/glossary" className="link link-hover">
          Glossary
        </Link> */}
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href="/tos" className="link link-hover">
          Terms of services
        </Link>
        <Link href="/privacy-policy" className="link link-hover">
          Privacy policy
        </Link>
      </nav>
      <nav>
        <header className="footer-title">About</header>
        <div>Buy a Logo | 2024</div>
      </nav>
    </footer>
  );
};

export default Footer;
