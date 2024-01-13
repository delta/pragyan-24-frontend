'use client';
import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import MenuItem from '@/components/MenuItem/MenuItem';
// import disk from '../../assets/images/disk.png';
// import diskglow from '../../assets/images/diskglow.png';
import styles from '../NavBar/navbar.module.css';

interface MenuProps {
    isOpened: boolean;
    setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isOpened, setIsOpened }) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            window.addEventListener('resize', () => setWidth(window.innerWidth));
        }
    }, []);

    const menuItems = [
        { name: 'Events', link: '/clusters' },
        { name: 'Workshops', link: '/workshops' },
        // { name: 'Guest Lectures', link: '/guest-lectures' },
        // { name: 'Sponsors', link: '/sponsors' },
        { name: 'Sangam', link: 'https://pragyan.org/sangam-24/' },
        { name: 'Ingenium', link: 'https://pragyan.org/ingenium/' },
        { name: 'Campus Ambassador', link: 'https://pragyan.org/pca/' },
        // { name: 'Patronages', link: '/patronages' },
        // { name: 'Hospitality', link: '/hospitality' },
        // { name: 'Campus', link: '/campus' },
    ];

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.innerWidth > 1024 && window.VANTA && isOpened)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.VANTA.DOTS({
                el: '#waves',
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 250.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                loading: false,
                color: 0xa4ff,
                color2: 'rgba(0, 0, 0, 0)',
                backgroundColor: 0x0,
                size: 3.4,
                spacing: 25.0,
                waveSpeed: 5,
            });
    }, [isOpened]);

    return (
        <>
            <div>
                {isOpened ? (
                    <div
                        className="flex w-full justify-center items-center absolute z-[1000] top-0 left-0 bg-black"
                        id="waves"
                    >
                        <div
                            className="absolute top-[2rem] right-[2rem] z-[1001] text-white text-3xl hover:cursor-pointer font-Orbitron"
                            onClick={() => {
                                if (setIsOpened) setIsOpened(false);
                            }}
                        >
                            X
                        </div>
                        {/* <Image
                            src={disk}
                            alt="disk"
                            className="absolute bottom-4 lg:bottom-0"
                            id={styles.disk}
                        />
                        <Image
                            src={diskglow}
                            alt="diskglow"
                            className="absolute bottom-4"
                            id={styles.glow}
                        /> */}
                        <div
                            className={
                                styles.menubg + ' lg:top-1/5  absolute w-full lg:h-3/4 h-full'
                            }
                        />
                        <ul
                            className="  md:flex w-full font-Orbitron flex lg:flex-row flex-col justify-evenly items-center  pb-24  md:[40vh%]  min-h-screen  text-white"
                            id={styles.mainContent}
                        >
                            {menuItems.map((item, index) => (
                                <li className={styles.li} key={index}>
                                    <Link href={item.link}>
                                        <MenuItem name={item.name} phone={width < 1020} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <style>
                            {`

`}
                        </style>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default Menu;
