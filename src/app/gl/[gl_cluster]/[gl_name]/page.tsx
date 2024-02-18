/* eslint-disable */
'use client';
import { GLSlide, Loader, NavBar } from '@/components';
import Back from '@/assets/images/Back.png';
import BackEnlarge from '@/assets/images/BackEnlarge.png';
import ImageChanger from '@/components/BackButton/back';
import styles from './guestLectures.module.css';
import { Key, useEffect, useState } from 'react';
import { getGLIndex, getGuestLectures } from '@/utils/events_cms';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

SwiperCore.use([Navigation, Keyboard]);

const GLCarousel = ({ params }: { params: { gl_cluster: string; gl_name: string } }) => {
    const [details, setDetails] = useState<any>([]);
    const [initialSlideNumber, setInitialSlideNumber] = useState<number | null>(null);

    const getDetails = async () => {
        const res = await getGuestLectures();
        const id = await getGLIndex(params.gl_name, params.gl_cluster);
        setInitialSlideNumber(id);
        const filteredData = removeDataFromOtherClusters(res);
        setDetails(filteredData);
    };

    const removeDataFromOtherClusters = (data: any) => {
        const filteredData = data.filter((elem: any) => elem.cluster_name === params.gl_cluster);
        return filteredData;
    };

    useEffect(() => {
        getDetails();
    }, []);

    return initialSlideNumber !== null ? (
        <div className={`min-h-screen w-full text-center max-sm:p-3 p-5 event + ${styles.event}`}>
            <NavBar />
            <ImageChanger defaultImage={Back} hoverImage={BackEnlarge} page="gl" />

            <p
                className={`${styles.workshopClusterName} font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 mb-4 transition-all`}
            >
                {params.gl_cluster}
            </p>
            {/* <div className={`mt-12 w-full ${styles.slide}`}> */}
            <div className="-mt-[1%] w-full h-[60vh] max-lg:h-[75vh] max-lg:-mt-[2%]">
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
                            <GLSlide data={elem} />
                        </SwiperSlide>
                    ))}

                    <div className={`${styles.rightArrow}`}></div>
                    <div className={`${styles.leftArrow}`}></div>
                </Swiper>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default GLCarousel;
