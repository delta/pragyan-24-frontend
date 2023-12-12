import { GlitchText, NavBar } from '@/components';
import React from 'react';

const notFound = () => {
    return (
        <>
            <div className="absolute top-0 w-full p-5">
                <NavBar />
            </div>
            <div className="flex flex-col justify-center items-center h-screen w-screen font-ROG 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm text-center">
                <GlitchText text="You have come to the wrong timeline traveller!!!" />
            </div>
        </>
    );
};

export default notFound;
