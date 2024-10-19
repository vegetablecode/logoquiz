'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const menuLinks = [
  {
    id: 'blog',
    navLink: '/blog',
    label: 'Blog',
  },
  // {
  //   id: 'login',
  //   navLink: '/login',
  //   label: 'Log In',
  // },
];

const styleLinks = [
  {
    title: '👉 All styles ✨',
    url: '/styles/art-deco-interior-design',
  },
  {
    title: 'Art Deco Interior Design',
    url: '/styles/art-deco-interior-design',
  },
  {
    title: 'Boho Interior Design',
    url: '/styles/boho-interior-design',
  },
  {
    title: 'Coastal Interior Design',
    url: '/styles/coastal-interior-design',
  },
  {
    title: 'Contemporary Interior Design',
    url: '/styles/contemporary-interior-design',
  },
  {
    title: 'Eclectic Interior Design',
    url: '/styles/eclectic-interior-design',
  },
  {
    title: 'Farmhouse Interior Design',
    url: '/styles/farmhouse-interior-design',
  },
  {
    title: 'Glam Interior Design',
    url: '/styles/glam-interior-design',
  },
  {
    title: 'Industrial Interior Design',
    url: '/styles/industrial-interior-design',
  },
  {
    title: 'Mid-Century Modern Interior Design',
    url: '/styles/mid-century-modern-interior-design',
  },
  {
    title: 'Minimalist Interior Design',
    url: '/styles/minimalist-interior-design',
  },
  {
    title: 'Modern Home Interior Design',
    url: '/styles/modern-home-interior-design',
  },
  {
    title: 'Rustic Interior Design',
    url: '/styles/rustic-interior-design',
  },
  {
    title: 'Scandinavian Interior Design',
    url: '/styles/scandinavian-interior-design',
  },
  {
    title: 'Shabby Chic Interior Design',
    url: '/styles/shabby-chic-interior-design',
  },
  {
    title: 'Transitional Interior Design',
    url: '/styles/transitional-interior-design',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderMenuItems = () => (
    <div className="sm:flex-row text-xl sm:text-base flex-col flex justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 font-semibold">
      {/* <div class="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="hover:text-primary cursor-pointer uppercase text-sm font-bold ease-in-out duration-150 transition"
        >
          Styles
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-white rounded-box -ml-[102px] mt-2 z-[1] w-[260px] p-2 border"
        >
          {styleLinks.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div> */}
      {menuLinks.map((item) => (
        <Link key={item.id} href={item.navLink}>
          <button className="hover:text-primary uppercase text-sm font-bold ease-in-out duration-150 transition">
            {item.label}
          </button>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <img alt="decoratly logo" src="/logo.png" className="h-16 w-auto" />
      </Link>
      {isMenuOpen ? (
        <div className="fixed flex items-center justify-center top-0 left-0 h-screen w-screen bg-neutral z-50">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-0 right-0 m-8"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          {renderMenuItems()}
        </div>
      ) : (
        <div>
          <div className="hidden sm:block">{renderMenuItems()}</div>
          <button
            className="block sm:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
