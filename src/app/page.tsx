'use client';

import Image from 'next/image';
import offLight from '@/assets/images/OffLight.svg';
import { useState, useEffect } from 'react';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{
        width: number | undefined;
        height: number | undefined;
    }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

function LoadingWebView() {
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
                        <div className="h-[20%] text-center w-[100%] xl:mt-0 rogfont">
                            PRESENT TIME
                        </div>
                        <div className="h-[60%] w-[98%] flex relative justify-evenly mt-[5%]">
                            <div className="h-[60%] w-[15%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                666
                            </div>
                            <div className="h-[60%] w-[10%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                66
                            </div>
                            <div className="h-[60%] w-[20%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                6666
                            </div>
                            <div className="h-[60%] w-[10%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                66
                            </div>
                            <div className="h-[60%] w-[10%] bg-[#1D1D1D] flex items-center justify-center sevensegtext">
                                66
                            </div>
                        </div>
                        <div className="h-[20%] text-center w-[100%] rogfont">READY TO TRAVEL?</div>
                    </div>
                    <div className=" w-[80%] h-[27%] loadingdivs flex justify-end relative">
                        {/* <Image src={greenPress} alt='button' className=' h-[60%] w-[20%]'/> */}
                    </div>
                </div>
            </div>
        </>
    );
}

function LoadingMobileView() {
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#0D0D0D] relative flex flex-col items-center justify-center bg-[url('../assets/images/loadingBgMobile.png')] bg-contain bg-center bg-no-repeat">
                <div className=" h-[20%] w-[80%] relative flex flex-col items-center justify-center">
                    <div className="w-[100%] h-[20%] text-center font-['ROG']">PRESENT TIME</div>
                    <div className="relative w-[100%] h-[50%] flex items-center justify-evenly">
                        <div className="w-[15%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            666
                        </div>
                        <div className="w-[10%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            66
                        </div>
                        <div className="w-[20%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            6666
                        </div>
                        <div className="w-[10%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            66
                        </div>
                        <div className="w-[10%] h-[40%] bg-[#1D1D1D] font-['sevenseg'] flex items-center justify-center">
                            66
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
    return size.width !== undefined && size.width < 700 ? (
        <LoadingMobileView />
    ) : (
        <LoadingWebView />
    );
}
