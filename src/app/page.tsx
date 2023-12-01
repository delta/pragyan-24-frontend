import Image from 'next/image';
import offLight from '@/assets/images/OffLight.svg';

export default function Loading() {
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-black relative">
                <div className="relative left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[100%] loadingBg flex flex-col items-center justify-center">
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
                        <div className="h-[60%] w-[100%] flex relative justify-evenly mt-[5%]">
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
