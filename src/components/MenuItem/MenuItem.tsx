'use client';
import React from 'react';
import bg from '../../assets/images/menuItembg.png';
import phonebg from '../../assets/images/bgphonemenuitem.png';
import Image from 'next/image';

const MenuItem = (props: { name: string; phone: boolean }) => {
    if (props.phone) {
        return (
            <li
                className={`flex text-center text-sm items-center relative hover:scale-110 h-2 ease-in-out`}
            >
                <Image className="" src={phonebg} alt="bg" width="120" />
                {props.name}
            </li>
        );
    }

    return (
        <li
            className={`flex-col w-20 text-center md:text-lg  relative hover:scale-110 h-fit ease-in-out`}
        >
            {props.name}
            <Image className="absolute mt-[-2em]" src={bg} alt="bg" />
        </li>
    );
};

export default MenuItem;
