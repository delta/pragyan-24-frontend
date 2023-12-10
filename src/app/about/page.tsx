'use client';

import Image from 'next/image';
import bigmascot from '../../assets/images/bigmascot.png';
import { motion } from 'framer-motion';
import { AboutCard, AboutCardMob, NavBar, SideBar } from '@/components';
import { WheelEvent, TouchEvent, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const About = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [scrollAllowed, setScrollAllowed] = useState<boolean>(true);
    const contentCard = useRef<HTMLDivElement>(null);
    const contentCardDesktop = useRef<HTMLParagraphElement>(null);
    const router = useRouter();
    const simulateScroll = (event: WheelEvent<HTMLDivElement>) => {
        if (!isScrolled && !contentCardDesktop.current?.contains(event.target as Node)) {
            event.stopPropagation();
            if (event.deltaY > 0) {
                setTimeout(() => {
                    router.push('/gallery');
                }, 1100);
                setIsScrolled(true);
            } else if (event.deltaY < 0) {
                setTimeout(() => {
                    router.push('/home');
                }, 1100);
                setIsScrolled(true);
            }
        }
    };
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
            contentCard.current?.contains(event.target as Node)
        ) {
            return;
        }
        const distance = touchStart - touchEnd;
        if (distance < 0) {
            setTimeout(() => {
                router.push('/home');
            }, 1100);
            setIsScrolled(true);
        } else if (distance > 0) {
            setTimeout(() => {
                router.push('/gallery');
            }, 1100);
            setIsScrolled(true);
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setScrollAllowed(true);
        }, 1100);
        return () => {
            clearTimeout(timer);
        };
    }, [scrollAllowed]);
    return (
        <div
            className={
                'h-screen w-full text-center md:p-7 p-5 about flex flex-col overflow-y-hidden ' +
                (isScrolled ? ' scrolled' : ' transitioned')
            }
            onWheel={scrollAllowed ? simulateScroll : undefined}
            onTouchStart={scrollAllowed ? handleTouchStart : undefined}
            onTouchMove={scrollAllowed ? handleTouchMove : undefined}
            onTouchEnd={scrollAllowed ? handleTouchEnd : undefined}
        >
            {/* <div className="flex w-full relative z-10"> */}
            <NavBar />
            {/* </div> */}
            <motion.div
                z-index={-1}
                className="flex flex-col justify-center items-center absolute w-screen top-0 left-0 -translate-x-[50%] -translate-y-[50%]"
                initial={{ y: '-100%' }}
                animate={{ y: '-40%' }}
                transition={{ duration: 1.5 }}
            >
                <Image src={bigmascot} alt="bigmascot" className="xl:scale-90 scale-50" />
            </motion.div>
            <div className="flex flex-col md:justify-center max-md:mt-7 items-center h-full w-full m-0">
                <div className="font-ROG xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-2xl">
                    ABOUT US
                </div>
                <AboutCard cardRef={contentCardDesktop} />
                <AboutCardMob cardRef={contentCard} />
            </div>
            <SideBar number={'02'} content={'The Present'} />
        </div>
    );
};

export default About;
