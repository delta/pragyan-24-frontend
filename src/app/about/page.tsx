'use client';
import Image from 'next/image';

import bigmascot from '../../assets/images/bigmascot.png';

import { motion } from 'framer-motion';
import { NavBar } from '@/components';
import AboutCard from '@/components/AboutCard/AboutCard';

const About1 = () => {
  return (
    <div className="min-h-screen w-full text-center p-7 about">
      <div className="flex w-full relative z-10">
        <NavBar />
      </div>
      <motion.div
        z-index={-1}
        className="flex flex-col justify-center items-center absolute top-0 w-full"
        initial={{ y: '-100%' }}
        animate={{ y: '-40%' }}
        transition={{ duration: 1.5 }}
      >
        <Image src={bigmascot} alt="bigmascot" className="scale-90" />
      </motion.div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="font-ROG text-9xl">ABOUT US</p>
        <AboutCard />
      </div>
    </div>
  );
};

export default About1;
