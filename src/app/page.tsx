'use client';

import Image from 'next/image';
import offLight from '@/assets/images/OffLight.svg';
import onlight from '@/assets/images/OnLight.svg'
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import greenbutton from "@/assets/images/P.svg"

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

interface LoadingProps {
    month:string,
    date: string,
    year: string,
    hours:string,
    minutes:string,
    isButtonClicked: boolean,
    setClicked: Dispatch<SetStateAction<boolean>>
}

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

const LoadingWebView = ({month,date,year,hours,minutes,isButtonClicked,setClicked}: LoadingProps) => {
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#0D0D0D] relative">
                <div className="relative left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[100%] flex flex-col items-center justify-center bg-[url('../assets/images/loadingBg.png')] bg-contain bg-center bg-no-repeat">
                    <div className=" w-[80%] h-[28%] loadingdivs relative flex items-center justify-end">
                        <div className=" mr-[2%] flex w-[10%] h-[100%] items-end 2xl:h-[100%] lights">
                            <Image src={offLight} alt="light" />
                            <Image src={offLight} alt="light" />
                        </div>
                    </div>
                    <div className=" w-[80%] h-[45%] loadingdivs flex flex-col relative">
                        <div className="h-[20%] text-center w-[100%] rogfont">
                            PRESENT TIME
                        </div>
                        <div className="h-[60%] w-[98%] flex relative justify-evenly mt-[5%]">
                            <div className="h-[60%] w-[15%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                {month}
                            </div>
                            <div className="h-[60%] w-[10%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                {date}
                            </div>
                            <div className="h-[60%] w-[20%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                {year}
                            </div>
                            <div className="h-[60%] w-[10%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                {hours}
                            </div>
                            <div className="h-[60%] w-[10%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                {minutes}
                            </div>
                        </div>
                        <div className="h-[20%] text-center w-[100%] rogfont">READY TO TRAVEL?</div>
                    </div>
                    <div className=" w-[80%] h-[27%] loadingdivs flex justify-end relative ml-[5%] items-start xl:pt-[1%]">
                        <Image src={greenbutton} onClick={()=>{if(!isButtonClicked){setClicked(true)}}} alt='button' className=' h-[30%] xl:h-[50%] w-[20%] hover:cursor-pointer'/>
                    </div>
                </div>
            </div>
        </>
    );
}

const LoadingMobileView = ({month,date,year,hours,minutes,isButtonClicked,setClicked}:LoadingProps) => {
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#0D0D0D] relative flex flex-col items-center justify-center bg-[url('../assets/images/loadingBgMobile.png')] bg-contain bg-center bg-no-repeat">
                <div className=" h-[20%] w-[80%] relative flex flex-col items-center justify-center">
                    <div className="w-[100%] h-[20%] text-center font-['ROG']">PRESENT TIME</div>
                    <div className="relative w-[100%] h-[50%] flex items-center justify-evenly max-w-[300px]">
                        <div className="w-[15%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            {month}
                        </div>
                        <div className="w-[10%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            {date}
                        </div>
                        <div className="w-[20%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            {year}
                        </div>
                        <div className="w-[10%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            {hours}
                        </div>
                        <div className="w-[10%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            {minutes}
                        </div>
                    </div>
                    <div className="w-[100%] h-[20%] text-center font-['ROG']">
                        READY TO TRAVEL?
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Loading() {
    const size = useWindowSize();
    const curr_date = new Date()
    const [animationStarted,setAnimationStarted] = useState<boolean>(false)
    const [year, setYear] = useState(String(curr_date.getFullYear()).padStart(4, '0'));
    const [month, setMonth] = useState(curr_date.toLocaleString('default', { month: 'short' }));
    const [date, setDate] = useState(String(curr_date.getDate()).padStart(2, '0'));
    const [hours, setHours] = useState(String(curr_date.getHours()).padStart(2, '0'));
    const [minutes, setMinutes] = useState(String(curr_date.getMinutes()).padStart(2, '0'));


    useEffect(()=>{
        if(!animationStarted){
            const new_date = new Date()
            const getNewDate = setInterval(()=>{
                setYear(String(new_date.getFullYear()).padStart(4, '0'));
                setMonth(new_date.toLocaleString('default', { month: 'short' }));
                setDate(String(new_date.getDate()).padStart(2, '0'));
                setHours(String(new_date.getHours()).padStart(2, '0'));
                setMinutes(String(new_date.getMinutes()).padStart(2, '0'));
            },60000)
            return ()=>{
                clearInterval(getNewDate)
            }
        }
        else{
            const generateRandomChars = setInterval(()=>{
                setYear(generateRandomNumber(4))
                setMonth(generateRandomCharacters(3))
                setDate(generateRandomNumber(2))
                setHours(generateRandomNumber(2))
                setMinutes(generateRandomNumber(2))
            },50)
            const fiishAnimationTimer = setTimeout(()=>{
                setYear('----')
                setMonth('--')
                setDate('--')
                setHours('--')
                setMinutes('--')
                clearInterval(generateRandomChars)
            },5000)
            return ()=>{
                clearInterval(generateRandomChars)
                clearTimeout(fiishAnimationTimer)
            }
        }
    },[animationStarted])

    return size.width !== undefined && size.width < 700 ? (
        <LoadingMobileView month={month} year={year} date={date} hours={hours} minutes={minutes} isButtonClicked={animationStarted} setClicked={setAnimationStarted} />
    ) : (
        <LoadingWebView month={month} year={year} date={date} hours={hours} minutes={minutes} isButtonClicked={animationStarted} setClicked={setAnimationStarted} />
    );
}
