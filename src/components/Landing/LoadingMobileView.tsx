import Image from 'next/image';
import offLight from '@/assets/images/OffLight.svg';
import onlight from '@/assets/images/OnLight.svg';
import greenbutton from '@/assets/images/PressButton.svg';

const LoadingMobileView = ({
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
            <div className="relative md:hidden w-[100vw] h-[100vh] bg-[#0D0D0D] flex flex-col items-center justify-center bg-[url('../assets/images/loadingBgMobile.png')] bg-contain bg-center bg-no-repeat">
                <div className=" h-[20%] w-[80%] relative flex flex-col items-center justify-center">
                    <div className="absolute flex w-[10%] right-[10vw] top-[4.2vh] max-[380px]:right-[15vw]">
                        <Image src={isLeftLightOn ? onlight : offLight} alt="light" />
                        <Image src={isLeftLightOn ? offLight : onlight} alt="light" />
                    </div>
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
                    <div className="w-[100%] h-[20%] text-center font-['ROGG']">
                        {isButtonClicked ? '????????????' : 'READY TO TRAVEL?'}
                    </div>
                    <div className="absolute -bottom-[9.11vh]">
                        <Image
                            src={greenbutton}
                            onClick={() => {
                                if (!isButtonClicked) {
                                    setClicked(true);
                                }
                            }}
                            alt="button"
                            className={
                                ' h-full w-full scale-95 hover:cursor-pointer max-[380px]:scale-75 ' +
                                (isButtonClicked ? ' ' : ' greenbutton ')
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingMobileView;
