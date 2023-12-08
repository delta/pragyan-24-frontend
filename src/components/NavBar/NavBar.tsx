'use client';
import { useState } from 'react';
import Image from 'next/image';
import pragyanlogo from '../../assets/images/main-logo-22-white.svg';
import pragyanlogomobile from '../../assets/images/main-logo-mobile.png';
import hamburgerIcon from '../../assets/images/hamburgerMenu.svg';
import LoginButton from '../LoginButton/LoginButton';
import Link from 'next/link';
import Menu from '@/components/Menu/Menu';

const NavBar = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="w-full flex h-14 box-border px-5 lg:px-7 z-10">
            <Menu isOpened={isOpened} setIsOpened={setIsOpened} />
            <div className="flex basis-1/2 justify-start items-center lg:px-5">
                <Image
                    src={pragyanlogo}
                    alt="Pragyan Logo"
                    draggable={false}
                    className="w-40 max-md:hidden"
                />
                <Image
                    src={pragyanlogomobile}
                    alt="Pragyan Logo"
                    draggable={false}
                    className="w-100 md:hidden"
                />
            </div>
            <div className="flex basis-1/2 lg:justify-between justify-end items-center pl-16 lg:pr-7 max-lg:gap-5 font-Orbitron xl:text-xl lg:text-lg text-sm">
                <Link href="/home" className="max-lg:hidden">
                    HOME
                </Link>
                <Link href="/contact" className="max-lg:hidden">
                    CONTACT US
                </Link>
                <Link href="/faqs" className="max-lg:hidden">
                    FAQs
                </Link>
                <Link href="/login" className="max-lg:hidden">
                    LOGIN
                </Link>
                <LoginButton />
                <Image
                    src={hamburgerIcon}
                    alt="Hamburger Icon"
                    draggable={false}
                    className="md:w-8 w-6 hover:cursor-pointer"
                    onClick={() => setIsOpened(!isOpened)}
                />
            </div>
        </div>
    );
};

export default NavBar;
