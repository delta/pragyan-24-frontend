'use client';

import Image from 'next/image';
import bigmascot from '../../assets/images/bigmascot.png';
import { motion } from 'framer-motion';
import { NavBar, SideBar } from '@/components';
import AboutCard from '@/components/AboutCard/AboutCard';
import { WheelEvent, TouchEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const About = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  const simulateScroll = (
    event: WheelEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setIsScrolled(true);
    if (event.isPropagationStopped()) {
      console.log(event.isPropagationStopped());
      setTimeout(() => {
        router.push('/gallery');
      }, 1100);
    }
  };
  return (
    <div
      className={
        'h-screen w-full text-center p-7 about flex flex-col' +
        ' ' +
        (isScrolled ? 'scrolled' : 'transitioned')
      }
      onWheel={simulateScroll}
      onTouchStart={simulateScroll}
      onTouchMove={simulateScroll}
    >
      <div className="flex w-full relative z-10">
        <NavBar />
      </div>
      <motion.div
        z-index={-1}
        className="flex flex-col justify-center items-center absolute w-screen top-0 left-0 -translate-x-[50%] -translate-y-[50%] max-md:hidden"
        initial={{ y: '-100%' }}
        animate={{ y: '-40%' }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={bigmascot}
          alt="bigmascot"
          className="xl:scale-90 scale-50"
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="font-ROG xl:text-8xl lg:text-7xl md:text-6xl">
          ABOUT US
        </div>
        <AboutCard />
      </div>
      <SideBar number={'02'} content={'The Present'} />
    </div>
  );
};

export default About;
