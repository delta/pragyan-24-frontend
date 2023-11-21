import wingman from '@/assets/images/wingman.png';
import { NavBar } from '@/components';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className="min-h-screen w-full text-center lg:p-7 p-5 home ">
                <NavBar />
                <p className="font-ROG 2xl:text-9xl xl:text-8xl lg:text-7xl sm:text-5xl text-3xl mt-24">
                    CHRONOCLE
                </p>
                <Image
                    src={wingman}
                    alt="Wingman"
                    draggable={false}
                    className="wingman lg:w-48 md:w-32 w-20 absolute inset-0 m-auto bottom-1/3"
                />
                <p className="font-ROG xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                    A TIMELESS ODYSSEY
                </p>
            </div>
            {/* <About /> */}
        </>
    );
}
