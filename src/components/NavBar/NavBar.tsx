import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pragyanlogo from '../../assets/images/main-logo-22-white.svg';
import hamburgerIcon from '../../assets/images/hamburgerMenu.svg';

const NavBar = () => {
  return (
    <div className="w-full flex h-14">
      <div className="flex basis-1/2 justify-start items-center px-5">
        <Image
          src={pragyanlogo}
          alt="Pragyan Logo"
          draggable={false}
          className="w-40"
        />
      </div>
      <div className="flex basis-1/2 justify-between items-center pl-16 pr-7 font-Orbitron">
        <Link href="/" className="text-xl">
          HOME
        </Link>
        <Link href="/contact" className="text-xl">
          CONTACT US
        </Link>
        <Link href="/faqs" className="text-xl">
          FAQs
        </Link>
        <Link href="/login" className="text-xl">
          LOGIN
        </Link>
        <Image
          src={hamburgerIcon}
          alt="Hamburger Icon"
          draggable={false}
          className="w-8 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;
