'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuItem from '@/components/MenuItem/MenuItem';
import disk from '../../assets/images/disk.png';
import diskglow from '../../assets/images/diskglow.png';
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
        // { name: 'Workshops', link: '/workshops' },
        // { name: 'Guest Lectures', link: '/guest-lectures' },
        // { name: 'Sponsors', link: '/sponsors' },
        // { name: 'Sangam Hardware', link: '/sangam-hardware' },
        // { name: 'Campus Ambassador', link: '/campus-ambassador' },
        // { name: 'Ingenium', link: '/ingenium' },
        { name: 'Patronages', link: '/patronages' },
        { name: 'Hospitality', link: '/hospitality' },
        { name: 'Campus', link: '/campus' },
    ];

    return (
        <div>
            {isOpened ? (
                <div className="flex w-full justify-center items-center absolute z-[1000] top-0 left-0  bg-black">
                    <div
                        className="absolute top-[2rem] right-[2rem] z-[1001] text-white text-3xl hover:cursor-pointer font-Orbitron"
                        onClick={() => {
                            if (setIsOpened) setIsOpened(false);
                        }}
                    >
                        X
                    </div>
                    <Image
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
                    />

                    <div
                        className=" lg:top-1/5  absolute w-full lg:h-3/4 h-full"
                        id={styles.menubg}
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
    );
};

export default Menu;
