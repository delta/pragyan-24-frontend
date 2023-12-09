/* eslint-disable */

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import leftPortal from '../../assets/images/leftPortal.png';
import rightPortal from '../../assets/images/rightPortal.png';
import temp from '../../assets/images/temp.png';

import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
import { useEffect, useState } from 'react';
import { getClusterDetails } from '@/utils/events_cms';

const ClusterCarousel = ({ id, name }: { id: number; name: string }) => {
    const [details, setDetails] = useState<any>([]);
    const [index, setIndex] = useState(0);
    const getDetails = async () => {
        let res = await getClusterDetails(id);
        setDetails(res);
    };
    const router = useRouter();

    useEffect(() => {
        getDetails();
    }, []);

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [swiper, setSwiper] = useState<any>(null);

    const handleSlideChange = (index: number) => {
        const currentSlide = swiper?.slides[index];
        if (currentSlide) {
            currentSlide.style.transform = 'scale(1.0)';
            currentSlide.style.opacity = '1';
            currentSlide.style.transition = 'transform 0.5s ease-in-out';
        }

        const previousSlide = swiper?.slides[index - 1];
        if (previousSlide) {
            previousSlide.style.transform = 'scale(0.67)';
            previousSlide.style.opacity = '0.4';
            previousSlide.style.transition = 'transform 0.5s ease-in-out';
        }

        const nextSlide = swiper?.slides[index + 1];
        if (nextSlide) {
            nextSlide.style.transform = 'scale(0.67)';
            nextSlide.style.opacity = '0.4';
            nextSlide.style.transition = 'transform 0.5s ease-in-out';
        }
    };

    const goToNextSlide = () => {
        if (swiper) swiper.activeIndex = 1;
        swiper?.slideNext();
        setIndex((index + 1) % details.length);
    };

    const goToPreviousSlide = () => {
        if (swiper) swiper.activeIndex = 1;
        swiper?.slidePrev();
        setIndex((index - 1 + details.length) % details.length);
    };

    return (
        <div className="relative w-full md:w-3/4 h-full flex items-center justify-center max-2xl:px-10 max-md:p-2">
            <Image src={leftPortal} className="absolute max-lg:hidden left-0 w-80" alt="<" />
            <Swiper
                onSwiper={setSwiper}
                modules={[Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ enabled: false }}
                breakpoints={breakpoints}
                className="w-full lg:w-2/3 xl:w-3/4 h-full flex items-center justify-center z-10"
                onSlideChange={swiper => handleSlideChange(swiper?.activeIndex)}
            >
                {details.map(
                    (
                        data: { image: { url: string; height: number; width: number }; id: number },
                        ind: number,
                    ) => (
                        <SwiperSlide
                            key={ind}
                            className={`flex justify-center items-center bg-transparent rounded-lg`}
                        >
                            <div className="w-full h-full lg:w-3/4 2xl:w-4/5 m-auto flex justify-center items-center">
                                <Image
                                    src={
                                        data.image
                                            ? 'http://localhost:1337' + data.image?.url
                                            : temp
                                    }
                                    width={data.image?.width}
                                    height={Math.min(data.image?.height, 100)}
                                    objectPosition="center"
                                    objectFit="contain"
                                    style={{
                                        height: Math.min(data.image?.height, 400).toString() + 'px',
                                    }}
                                    className={'rounded-lg'}
                                    alt="cluster"
                                    onClick={() => {
                                        router.push(`/events/${id}/${name}/${data.id}`);
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ),
                )}
            </Swiper>
            <Image src={rightPortal} className="absolute w-80 max-lg:hidden right-0" alt="<" />
            <div className="fixed bottom-[12vh] left-1/2 -translate-x-1/2 flex justify-center lg:justify-between items-center md:px-10 px-5">
                <div
                    className="absolute -left-10 w-10 hover:scale-110 animate-pulse hover:cursor-pointer"
                    onClick={goToPreviousSlide}
                >
                    <Image src={leftArrow} alt="<" />
                </div>
                <div className="font-Orbitron text-sm md:text-xl border-white border py-2 rounded-full w-[40vw] md:w-52 text-center overflow-hidden">
                    {details[index] ? details[index].name : 'Loading'}
                </div>
                <div
                    className="absolute -right-10 w-10 hover:scale-110 animate-pulse hover:cursor-pointer"
                    onClick={goToNextSlide}
                >
                    <Image src={rightArrow} alt=">" />
                </div>
            </div>
        </div>
    );
};

export default ClusterCarousel;
