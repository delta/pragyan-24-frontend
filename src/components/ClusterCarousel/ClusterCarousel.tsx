'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

import Image from 'next/image';
import leftPortal from '../../assets/images/leftPortal.png';
import rightPortal from '../../assets/images/rightPortal.png';
import temp from '../../assets/images/temp.png';

import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';

const ClusterCarousel = () => {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const breakpoints = {
        100: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    };

    return (
        <div className="relative w-full md:w-3/4 h-full flex items-center justify-center max-2xl:px-10">
            <Image src={leftPortal} className="absolute max-lg:hidden left-0 w-80" alt="<" />
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: true,
                }}
                loop={true}
                pagination={{ enabled: false }}
                breakpoints={breakpoints}
                className="w-full lg:w-[66%] xl:w-3/4 h-full flex items-center justify-center z-10"
            >
                {slides.map(slide => (
                    <SwiperSlide
                        key={slide}
                        className={`flex justify-center items-center bg-transparent max-sm:rounded-xl`}
                    >
                        <div className="w-full h-full lg:w-3/4 2xl:w-4/5 m-auto flex justify-center items-center">
                            <Image
                                src={temp}
                                width={450}
                                objectPosition="center"
                                objectFit="contain"
                                className={'max-sm:rounded-xl'}
                                alt="cluster"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Image src={rightPortal} className="absolute w-80 max-lg:hidden right-0" alt="<" />
            <div className="fixed bottom-[12vh] left-1/2 -translate-x-1/2 flex justify-center lg:justify-between items-center md:px-10 px-5">
                <div className="absolute -left-10 w-10">
                    <Image src={leftArrow} alt="<" />
                </div>
                <div className="font-Orbitron text-sm md:text-2xl border-white border px-10 md:px-16 py-2 rounded-full">
                    BATMAN
                </div>
                <div className="absolute -right-10 w-10">
                    <Image src={rightArrow} alt=">" />
                </div>
            </div>
        </div>
    );
};

export default ClusterCarousel;
