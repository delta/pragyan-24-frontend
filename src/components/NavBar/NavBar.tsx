'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import pragyanlogo from '../../assets/images/main-logo.png';
import pragyanlogomobile from '../../assets/images/main-logo-mobile.png';
import hamburgerIcon from '../../assets/images/hamburgerMenu.svg';
import LoginButtonMobile from '../MobileAuthButton/LoginButton';
import Link from 'next/link';
import Menu from '@/components/Menu/Menu';
import styles from './navbar.module.css';
import toast from 'react-hot-toast';

interface NavBarProps {
    NavRef?: React.RefObject<HTMLDivElement>;
}

const NavBar = ({ NavRef }: NavBarProps) => {
    const LoginButton = () => {
        return (
            <Link href="/login" className={`${styles.navLink} max-lg:hidden`}>
                LOGIN
            </Link>
        );
    };

    const LogoutButton = () => {
        return (
            <div
                className={`${styles.navLink} max-lg:hidden`}
                onClick={() => {
                    localStorage.removeItem('token');
                    toast.success('Successfully logged out.');
                    window.location.reload();
                }}
            >
                LOGOUT
            </div>
        );
    };

    const [isOpened, setIsOpened] = useState(false);
    const [authButton, setAuthButton] = useState<JSX.Element>(<LoginButton />);
    const [mobileAuthButton, setMobileAuthButton] = useState<JSX.Element>(
        <Link href="/login">
            <LoginButtonMobile text="LOGIN" />
        </Link>,
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                setAuthButton(<LogoutButton />);
                setMobileAuthButton(
                    <LoginButtonMobile
                        text="LOGOUT"
                        onClick={() => {
                            localStorage.removeItem('token');
                            window.location.reload();
                        }}
                    />,
                );
            } else {
                setAuthButton(<LoginButton />);
                setMobileAuthButton(
                    <Link href="/login">
                        <LoginButtonMobile text="LOGIN" />
                    </Link>,
                );
            }
        }
    }, []);

    return (
        <div className="w-full flex h-14 box-border px-5 lg:px-7 z-10" ref={NavRef}>
            <Menu isOpened={isOpened} setIsOpened={setIsOpened} />
            <div className="flex basis-1/3 justify-start items-center lg:px-5">
                <Link href="/home">
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
                </Link>
            </div>
            <div className="flex basis-2/3 lg:justify-between justify-end items-center pl-16 lg:pr-7 max-lg:gap-5 font-Orbitron xl:text-xl lg:text-lg text-sm">
                <Link href="/clusters" className={`${styles.navLink} max-lg:hidden`}>
                    EVENTS
                </Link>
                <Link href="/about" className={`${styles.navLink} max-lg:hidden`}>
                    ABOUT
                </Link>
                <Link
                    href={'https://pragyan.org/sangam-24/'}
                    className={`${styles.navLink} max-lg:hidden`}
                >
                    SANGAM
                </Link>
                <Link
                    href={'https://pragyan.org/ingenium/'}
                    className={`${styles.navLink} max-lg:hidden`}
                >
                    INGENIUM
                </Link>
                {authButton}
                <div className="lg:hidden">{mobileAuthButton}</div>
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
