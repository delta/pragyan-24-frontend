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
import { Loader } from '..';

SwiperCore.use([Navigation, Keyboard]);

const Carousel = ({ id, eventId }: { id: number; eventId: number }) => {
    const [details, setDetails] = useState([]);
    const [initialSlideNumber, setInitialSlideNumber] = useState<number | null>(null);
    const getDetails = async () => {
        const res = await getClusterDetails(id);
        setDetails(res);
        res.forEach((data: { id: number }, ind: number) => {
            if (data.id == eventId) {
                setInitialSlideNumber(ind);
            }
        });
    };

    useEffect(() => {
        getDetails();
    }, []);

    if (details.length === 0) return <Loader />;

    return initialSlideNumber !== null ? (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                nextEl: `.${styles.rightArrow}`,
                prevEl: `.${styles.leftArrow}`,
            }}
            initialSlide={initialSlideNumber}
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
    ) : (
        <></>
    );
};

export default Carousel;
