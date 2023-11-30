'use client';
import { Keyboard, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import styles from './caro.module.css';
import SlideData from './slideData';

SwiperCore.use([Navigation, Keyboard]);

const Carousel = () => {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                nextEl: `.${styles.rightArrow}`,
                prevEl: `.${styles.leftArrow}`,
            }}
            keyboard={{ enabled: true }}
            className="w-full h-full flex justify-center"
        >
            {slides.map(slide => (
                <SwiperSlide key={slide} className="">
                    <SlideData />
                </SwiperSlide>
            ))}

            <div className={`${styles.rightArrow}`}></div>
            <div className={`${styles.leftArrow}`}></div>
        </Swiper>
    );
};

export default Carousel;
