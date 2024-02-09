'use client';
import React, { useEffect, useState } from 'react';
import MobileLayout from './Mobile/Mobile';
import WebLayout from './Web/Web';
import { getPatronages } from '@/utils/events_cms';

const Patronage = () => {
    const [content, setContent] = useState([]);

    const getDetails = async () => {
        const res = await getPatronages();
        setContent(res);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <MobileLayout data={content} />
            <WebLayout data={content} />
        </>
    );
};
export default Patronage;
