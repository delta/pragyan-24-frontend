import Image from 'next/image';
import offLight from '@/assets/images/OffLight.svg';
import onlight from '@/assets/images/OnLight.svg';
import greenbutton from '@/assets/images/PressButton.svg';

const LoadingWebView = ({
    month,
    date,
    year,
    hours,
    minutes,
    isButtonClicked,
    setClicked,
    isLeftLightOn,
}: LoadingProps) => {
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#0D0D0D] relative">
                <div className="relative left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[100%] flex flex-col items-center justify-center bg-[url('../assets/images/loadingBg.png')] bg-contain bg-center bg-no-repeat">
                    <div className=" w-[80%] h-[28%] loadingdivs relative flex items-center justify-end">
                        <div className=" mr-[2%] flex w-[10%] h-[100%] items-end 2xl:h-[100%] lights">
                            <Image src={isLeftLightOn ? onlight : offLight} alt="light" />
                            <Image src={isLeftLightOn ? offLight : onlight} alt="light" />
                        </div>
                    </div>
                    <div className=" w-[80%] h-[45%] loadingdivs flex flex-col relative">
                        <div className="h-[20%] text-center w-[100%] rogfont">PRESENT TIME</div>
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
                        <div className="h-[20%] text-center w-[100%] rogfont max-[900px]:mb-[0%] mb-[5%]">
                            {isButtonClicked ? `????????????` : 'READY TO TRAVEL?'}
                        </div>
                    </div>
                    <div className=" w-[80%] h-[27%] loadingdivs flex justify-end relative ml-[5%] items-start xl:pt-[1%]">
                        <Image
                            src={greenbutton}
                            onClick={() => {
                                if (!isButtonClicked) {
                                    setClicked(true);
                                }
                            }}
                            alt="button"
                            className={
                                ' h-[30%] xl:h-[50%] w-[20%] hover:cursor-pointer ' +
                                (isButtonClicked ? ' ' : 'greenbutton')
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingWebView;
