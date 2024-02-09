import React from 'react';
import MobileLayout from './Mobile/Mobile';
import WebLayout from './Web/Web';
import { getPatronages } from '@/utils/events_cms';

const Patronage = async () => {
    const content = await getPatronages();

    return (
        <>
            <MobileLayout data={content} />
            <WebLayout data={content} />
        </>
    );
};

export default Patronage;
