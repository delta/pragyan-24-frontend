/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { NavBar } from '@/components';
import Back from '@/assets/images/Back.png';
import BackEnlarge from '@/assets/images/BackEnlarge.png';
import ImageChanger from '@/components/BackButton/back';
import styles from './workshop.module.css';
import { Key, useEffect, useState } from 'react';
import { getWorkshops, getWorkshopsIndex } from '@/utils/events_cms';
import WorkshopSlide from '@/components/WorkshopSlide/workshopSlide';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

SwiperCore.use([Navigation, Keyboard]);

const WorkshopCarousel = ({ params }: { params: { workshop_name: string } }) => {
    const [details, setDetails] = useState<any>([]);
    const [initialSlideNumber, setInitialSlideNumber] = useState<number | null>(null);

    const getDetails = async () => {
        const res = await getWorkshops();
        const id = await getWorkshopsIndex(params.workshop_name);
        setInitialSlideNumber(id);
        setDetails(res);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return initialSlideNumber !== null ? (
        <div className={`min-h-screen w-full text-center max-sm:p-3 p-5 event + ${styles.event}`}>
            <NavBar />
            <ImageChanger defaultImage={Back} hoverImage={BackEnlarge} page="workshop" />

            <p
                className={`${styles.workshopClusterName} font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 mb-4  transition-all`}
            >
                WORKSHOPS
            </p>
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
                {details.map((elem: any, ind: Key | null | undefined) => (
                    <SwiperSlide key={ind}>
                        <WorkshopSlide data={elem} />
                    </SwiperSlide>
                ))}

                <div className={`${styles.rightArrow}`}></div>
                <div className={`${styles.leftArrow}`}></div>
            </Swiper>
        </div>
    ) : (
        <></>
    );
};

export default WorkshopCarousel;
