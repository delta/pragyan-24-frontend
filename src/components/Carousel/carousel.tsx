'use client';
import { Keyboard, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import styles from './caro.module.css';
import SlideData from './slideData';
import { getClusterDetails } from '@/utils/events_cms';
import { useEffect, useState } from 'react';

SwiperCore.use([Navigation, Keyboard]);

const Carousel = ({ id }: { id: number }) => {
    const [details, setDetails] = useState([]);

    const getDetails = async () => {
        const res = await getClusterDetails(id);
        setDetails(res);
    };

    useEffect(() => {
        getDetails();
    }, []);

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
            {details.map((slide, ind) => (
                <SwiperSlide key={ind} className="">
                    <SlideData details={slide} />
                </SwiperSlide>
            ))}

            <div className={`${styles.rightArrow}`}></div>
            <div className={`${styles.leftArrow}`}></div>
        </Swiper>
    );
};

export default Carousel;
