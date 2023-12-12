'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './history.module.css';
import 'swiper/css';
import 'swiper/css/bundle';

import { NavBar, SideBar } from '@/components';
import Image from 'next/image';
import virat from '../../assets/images/virat.jpg';
import { WheelEvent, TouchEvent, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getGallery } from '@/utils/events_cms';
import { CMS_URL } from '@/config/config';

const History = () => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const res = await getGallery();
        setImages(res);
    };

    useEffect(() => {
        getImages();
    }, []);

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
    const navBarRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const simulateScroll = (event: WheelEvent<HTMLDivElement>) => {
        if (!isScrolled && !navBarRef.current?.contains(event.target as Node)) {
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
        const x = event.targetTouches[0].clientX - document.documentElement.clientWidth * 1.5;
        const y = event.targetTouches[0].clientY - document.documentElement.clientHeight * 1.5;
        if (!shadowRef.current) return;
        shadowRef.current.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        const x = event.targetTouches[0].clientX - document.documentElement.clientWidth * 1.5;
        const y = event.targetTouches[0].clientY - document.documentElement.clientHeight * 1.5;
        if (!shadowRef.current) return;
        shadowRef.current.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        setTouchEnd(event.targetTouches[0].clientY);
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        const x = event.clientX - document.documentElement.clientWidth * 1.5;
        const y = event.clientY - document.documentElement.clientHeight * 1.5;
        if (!shadowRef.current) return;
        shadowRef.current.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        if (
            touchStart === null ||
            touchEnd === null ||
            carouselRef.current?.contains(event.target as Node) ||
            navBarRef.current?.contains(event.target as Node)
        ) {
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
            onMouseMove={handleMouseMove}
        >
            <div className={styles.torch} ref={shadowRef}></div>
            <div className="absolute top-0 w-full p-5">
                <NavBar NavRef={navBarRef} />
            </div>
            <div className="flex w-[100%] h-[50%] items-center justify-center">
                <div
                    className={`h-[100%] w-[75%] flex items-center justify-center ${styles.carousel}`}
                    ref={carouselRef}
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
                        {images.map(
                            (
                                data: {
                                    url: number;
                                    eventId: number;
                                    eventName: string;
                                    clusterID: number;
                                    clusterName: string;
                                },
                                ind: number,
                            ) => (
                                <SwiperSlide
                                    key={ind}
                                    className={`h-[100%] w-[23%] bg-black max-sm:rounded-xl`}
                                >
                                    <Image
                                        src={data ? CMS_URL + data.url : virat}
                                        layout="fill"
                                        onClick={() => {
                                            router.push(
                                                `/events/${data.clusterID}/${data.clusterName}/${data.eventId}`,
                                            );
                                        }}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className={
                                            'max-sm:rounded-xl md:opacity-60 ' + 'carousel-torch'
                                        }
                                        alt="history"
                                    />
                                </SwiperSlide>
                            ),
                        )}
                    </Swiper>
                </div>
            </div>
            <SideBar number={'03'} content={'The Past'} />
        </div>
    );
};

export default History;
