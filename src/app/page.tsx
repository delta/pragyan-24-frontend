'use client';

import wingman from '@/assets/images/wingman.png';
import { NavBar } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full text-center lg:p-7 p-5 home ">
        <NavBar />
        <p className="font-ROG 2xl:text-9xl xl:text-8xl lg:text-7xl text-5xl mt-24">
          CHRONOCLE
        </p>
        <Image
          src={wingman}
          alt="Wingman"
          draggable={false}
          className="wingman w-48 absolute inset-0 m-auto bottom-1/3"
        />
        <p className="font-ROG lg:text-5xl text-3xl">A TIMELESS ODYSSEY</p>
      </div>
      {/* <About /> */}
    </>
  );
}
