'use client';

import wingman from '@/assets/images/wingman.png';
import anim from '@/assets/images/fullrings.svg';
import rings from '@/assets/images/rings.svg';
import { NavBar, SideBar } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { WheelEvent, TouchEvent, useState, useRef } from 'react';

export default function Home() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const router = useRouter();
    const simulateScroll = (event: WheelEvent<HTMLDivElement>) => {
        if (!isScrolled && !navBarRef.current?.contains(event.target as Node)) {
            event.stopPropagation();
            if (event.deltaY > 0) {
                setTimeout(() => {
                    router.push('/about');
                }, 2000);
                setIsScrolled(true);
            }
        }
    };

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const navBarRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(event.targetTouches[0].clientY);
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(event.targetTouches[0].clientY);
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        if (
            touchStart === null ||
            touchEnd === null ||
            navBarRef.current?.contains(event.target as Node)
        ) {
            return;
        }
        const distance = touchStart - touchEnd;
        if (distance > 0) {
            setTimeout(() => {
                router.push('/about');
            }, 2000);
            setIsScrolled(true);
        }
    };

    return (
        <>
            <div
                className={
                    'absolute h-[100vh] w-[100vw] z-50 overflow-y-hidden ' +
                    (isScrolled ? ' blue-scroll' : ' hidden')
                }
            ></div>
            <div
                className={'h-screen w-full text-center lg:p-7 p-5 home transitioned'}
                onWheel={simulateScroll}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <NavBar NavRef={navBarRef} />
                <div
                    className={
                        'max-lg:w-[60%] max-xl:w-[45%] max-2xl:w-[35%] w-[22%] h-[50%] absolute left-1/2 -translate-x-1/2 flex justify-center top-[15%] max-h-[90vh]' +
                        (isScrolled ? '' : ' hidden')
                    }
                >
                    <Image
                        src={anim}
                        alt="Animation"
                        draggable={false}
                        className={
                            'w-[100%] md:bottom-[45%] bottom-[45%] absolute inset-0 m-auto max-h-[90vh] xl:max-w-[20vw] ' +
                            (isScrolled ? ' fullrings' : '')
                        }
                    />
                    <Image
                        src={rings}
                        alt="Rings"
                        draggable={false}
                        className={
                            'w-[100%] md:bottom-[18%] bottom-[18%] absolute inset-0 m-auto max-h-[90vh] xl:max-w-[20vw] ' +
                            (isScrolled ? ' rings' : '')
                        }
                    />
                    <Image
                        src={rings}
                        alt="Rings"
                        draggable={false}
                        className={
                            'w-[100%] md:bottom-[100%] bottom-[80%]  absolute inset-0 m-auto max-h-[90vh] xl:max-w-[20vw] ' +
                            (isScrolled ? ' rings2' : '')
                        }
                    />
                </div>
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
