'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import pragyanlogo from '../../assets/images/main-logo.png';
import pragyanlogomobile from '../../assets/images/main-logo-mobile.png';
import hamburgerIcon from '../../assets/images/hamburgerMenu.svg';
import LoginButtonMobile from '../MobileAuthButton/LoginButton';
import Link from 'next/link';
import Menu from '@/components/Menu/Menu';
import styles from './navbar.module.css';

interface NavBarProps {
    NavRef?: React.RefObject<HTMLDivElement>;
}

const NavBar = ({ NavRef }: NavBarProps) => {
    const router = useRouter();
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
                    router.push('/profile');
                }}
            >
                PROFILE
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
                        text="PROFILE"
                        onClick={() => {
                            router.push('/profile');
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
            <div className="flex basis-2/5 justify-start items-center lg:px-5">
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
            <div
                className={`flex basis-3/5 lg:justify-between justify-end items-center pl-18 lg:pr-7 font-Orbitron xl:text-xl lg:text-lg text-sm`}
            >
                <Link href="/about" className={`${styles.navLink} max-lg:hidden`}>
                    ABOUT
                </Link>
                <Link href="/clusters" className={`${styles.navLink} max-lg:hidden`}>
                    EVENTS
                </Link>
                <Link href="/workshops" className={`${styles.navLink} max-lg:hidden`}>
                    WORKSHOPS
                </Link>
                {/* <Link
                    href={'https://pragyan.org/ingenium/'}
                    className={`${styles.navLink} max-lg:hidden`}
                >
                    HACKATHON
                </Link> */}
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
