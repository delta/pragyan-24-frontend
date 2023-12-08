'use client';

import { LoadingMobileView, LoadingWebView } from '@/components';
import { useRouter } from 'next/navigation';
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

export default function Loading() {
    const currDate = new Date();
    const [animationStarted, setAnimationStarted] = useState<boolean>(false);
    const [year, setYear] = useState(String(currDate.getFullYear()).padStart(4, '0'));
    const [month, setMonth] = useState(currDate.toLocaleString('default', { month: 'short' }));
    const [date, setDate] = useState(String(currDate.getDate()).padStart(2, '0'));
    const [hours, setHours] = useState(String(currDate.getHours()).padStart(2, '0'));
    const [minutes, setMinutes] = useState(String(currDate.getMinutes()).padStart(2, '0'));
    const [isLeftLightOn, setIsLeftLightOn] = useState<boolean>(true);
    const router = useRouter();

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
                clearInterval(lightTimer);
                setTimeout(() => {
                    router.push('/home');
                }, 500);
            }, 2000);
            const lightTimer = setInterval(() => {
                setIsLeftLightOn(prev => !prev);
            }, 100);
            return () => {
                clearInterval(lightTimer);
                clearInterval(generateRandomChars);
                clearTimeout(fiishAnimationTimer);
            };
        }
    }, [animationStarted, router]);

    return (
        <>
            <LoadingMobileView
                month={month}
                year={year}
                date={date}
                hours={hours}
                minutes={minutes}
                isButtonClicked={animationStarted}
                setClicked={setAnimationStarted}
                isLeftLightOn={isLeftLightOn}
            />
            <LoadingWebView
                month={month}
                year={year}
                date={date}
                hours={hours}
                minutes={minutes}
                isButtonClicked={animationStarted}
                setClicked={setAnimationStarted}
                isLeftLightOn={isLeftLightOn}
            />
        </>
    );
}
