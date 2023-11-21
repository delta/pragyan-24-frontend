'use client';

import wingman from '@/assets/images/wingman.png';
import { NavBar, SideBar } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { WheelEvent, TouchEvent, useState } from 'react';

export default function Home() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const router = useRouter();
    const simulateScroll = (event: WheelEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setIsScrolled(true);
        if (event.isPropagationStopped()) {
            console.log(event.isPropagationStopped());
            setTimeout(() => {
                router.push('/about');
            }, 1100);
        }
    };

    return (
        <>
            <div
                className={
                    'h-screen w-full text-center lg:p-7 p-5 home' +
                    ' ' +
                    (isScrolled ? 'scrolled' : '')
                }
                onWheel={simulateScroll}
                onTouchStart={simulateScroll}
                onTouchMove={simulateScroll}
            >
                <NavBar />
                <p className="font-ROG 2xl:text-9xl xl:text-8xl lg:text-7xl sm:text-5xl text-3xl mt-24">
                    CHRONOCLE
                </p>
                <Image
                    src={wingman}
                    alt="Wingman"
                    draggable={false}
                    className="wingman lg:w-48 w-32 absolute inset-0 m-auto bottom-1/3"
                />
                <p className="font-ROG lg:text-5xl md:text-4xl sm:text-3xl text-xl">
                    A TIMELESS ODYSSEY
                </p>
            </div>
            <SideBar content={'The Future'} number={'01'} />
        </>
    );
}
