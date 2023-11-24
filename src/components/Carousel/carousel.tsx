'use client';
import { Keyboard, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import './caro.css';
import SlideData from './slideData';

SwiperCore.use([Navigation, Keyboard]);

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.rightArrow',
        prevEl: '.leftArrow',
      }}
      keyboard={{ enabled: true }}
      className="w-full h-full flex justify-center"
    >
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>
      <SwiperSlide>
        <SlideData />
      </SwiperSlide>

      <div className=" rightArrow"></div>
      <div className=" leftArrow"></div>
    </Swiper>
  );
};

export default Carousel;
