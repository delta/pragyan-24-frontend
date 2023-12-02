'use client';

import { LoadingMobileView, LoadingWebView } from '@/components';
import { useState, useEffect } from 'react';

const generateRandomCharacters = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const generateRandomNumber = (length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10).toString();
    }
    return result;
};

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{
        width: number | undefined;
        height: number | undefined;
    }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

export default function Loading() {
    const size = useWindowSize();
    const currDate = new Date();
    const [animationStarted, setAnimationStarted] = useState<boolean>(false);
    const [year, setYear] = useState(String(currDate.getFullYear()).padStart(4, '0'));
    const [month, setMonth] = useState(currDate.toLocaleString('default', { month: 'short' }));
    const [date, setDate] = useState(String(currDate.getDate()).padStart(2, '0'));
    const [hours, setHours] = useState(String(currDate.getHours()).padStart(2, '0'));
    const [minutes, setMinutes] = useState(String(currDate.getMinutes()).padStart(2, '0'));

    useEffect(() => {
        if (!animationStarted) {
            const newDate = new Date();
            const getNewDate = setInterval(() => {
                setYear(String(newDate.getFullYear()).padStart(4, '0'));
                setMonth(newDate.toLocaleString('default', { month: 'short' }));
                setDate(String(newDate.getDate()).padStart(2, '0'));
                setHours(String(newDate.getHours()).padStart(2, '0'));
                setMinutes(String(newDate.getMinutes()).padStart(2, '0'));
            }, 60000);
            return () => {
                clearInterval(getNewDate);
            };
        } else {
            const generateRandomChars = setInterval(() => {
                setYear(generateRandomNumber(4));
                setMonth(generateRandomCharacters(3));
                setDate(generateRandomNumber(2));
                setHours(generateRandomNumber(2));
                setMinutes(generateRandomNumber(2));
            }, 50);
            const fiishAnimationTimer = setTimeout(() => {
                setYear('----');
                setMonth('--');
                setDate('--');
                setHours('--');
                setMinutes('--');
                clearInterval(generateRandomChars);
            }, 5000);
            return () => {
                clearInterval(generateRandomChars);
                clearTimeout(fiishAnimationTimer);
            };
        }
    }, [animationStarted]);

    return size.width !== undefined && size.width < 700 ? (
        <LoadingMobileView
            month={month}
            year={year}
            date={date}
            hours={hours}
            minutes={minutes}
            isButtonClicked={animationStarted}
            setClicked={setAnimationStarted}
        />
    ) : (
        <LoadingWebView
            month={month}
            year={year}
            date={date}
            hours={hours}
            minutes={minutes}
            isButtonClicked={animationStarted}
            setClicked={setAnimationStarted}
        />
    );
}
