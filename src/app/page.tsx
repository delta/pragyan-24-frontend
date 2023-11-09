'use client';

import wingman from '@/assets/images/wingman.png';
import { NavBar } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full text-center p-7 home">
        <NavBar />
        <p className="font-ROG text-9xl mt-24">CHRONOCLE</p>
        <Image
          src={wingman}
          alt="Wingman"
          draggable={false}
          className="wingman w-48 absolute inset-0 m-auto bottom-1/3"
        />
        <p className="font-ROG text-5xl">A TIMELESS ODYSSEY</p>
      </div>
      {/* <About /> */}
    </>
  );
}
