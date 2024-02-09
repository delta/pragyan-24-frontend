import { NavBar, Patronage } from '@/components';
import React from 'react';

const Patronages = () => {
    return (
        <div className="h-screen w-full text-center max-sm:p-3 p-5 about flex flex-col overflow-hidden">
            <NavBar />
            <Patronage />
        </div>
    );
};

export default Patronages;
