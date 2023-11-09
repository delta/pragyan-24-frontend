'use client';
import Image from 'next/image';

import bigmascot from '../../assets/images/bigmascot.png';

import { motion } from 'framer-motion';
import { NavBar } from '@/components';
import AboutCard from '@/components/AboutCard/AboutCard';

const About = () => {
  return (
    <div className="h-screen w-screen text-center p-7 about flex flex-col">
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
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="font-ROG text-8xl">ABOUT US</div>
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
