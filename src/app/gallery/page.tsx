'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './history.module.css';
import 'swiper/css';
import 'swiper/css/bundle';

import { NavBar, SideBar } from '@/components';
import Image from 'next/image';
import virat from '../../assets/images/virat.jpg';
import { WheelEvent, TouchEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const History = () => {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const breakpoints = {
        100: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    };

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const router = useRouter();
    const simulateScroll = (event: WheelEvent<HTMLDivElement>) => {
        if (!isScrolled) {
            event.stopPropagation();
            if (event.deltaY < 0) {
                setTimeout(() => {
                    router.push('/about');
                }, 1100);
                setIsScrolled(true);
            }
        }
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(event.targetTouches[0].clientY);
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(event.targetTouches[0].clientY);
    };

    const handleTouchEnd = () => {
        if (touchStart === null || touchEnd === null) {
            return;
        }
        const distance = touchStart - touchEnd;
        if (distance < 0) {
            setTimeout(() => {
                router.push('/about');
            }, 1100);
            setIsScrolled(true);
        }
    };

    return (
        <div
            className={
                styles.historyBG +
                ' ' +
                'h-screen w-screen p-0 flex justify-center items-center overflow-y-hidden' +
                ' ' +
                (isScrolled ? ' scrolled' : ' transitioned')
            }
            onWheel={simulateScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="absolute top-0 w-full p-5">
                <NavBar />
            </div>
            <div className="flex w-[100%] h-[50%] items-center justify-center">
                <div
                    className={`h-[100%] w-[75%] flex items-center justify-center ${styles.carousel}`}
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={40}
                        slidesPerView={4}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        pagination={{ enabled: false }}
                        breakpoints={breakpoints}
                        className="h-[100%] w-[100%]"
                    >
                        {slides.map(slide => (
                            <SwiperSlide
                                key={slide}
                                className={`h-[100%] w-[23%] bg-black max-sm:rounded-xl`}
                            >
                                <Image
                                    src={virat}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    className={
                                        'max-sm:rounded-xl md:opacity-20 ' + 'carousel-torch'
                                    }
                                    alt="history"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <SideBar number={'03'} content={'The Past'} />
        </div>
    );
};

export default History;
