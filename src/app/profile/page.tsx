import { NavBar } from '@/components';
import styles from './profile.module.css';
import qrimage from '../../assets/images/download.png';
import Image from 'next/image';

const profile = () => {
    return (
        <div className="h-screen w-screen profilebg text-center max-sm:p-3 p-5 overflow-hidden pl-0 pr-0">
            <NavBar />
            <div className=" h-full w-full flex">
                <div
                    className={`${styles.glasses} h-[90%] w-full flex justify-evenly items-center overflow-hidden relative p-5`}
                >
                    <div className="h-[40%] w-[70%] flex items-center justify-center gap-[30%] sm:gap-[20%] lg:gap-[10%] relative">
                        <div
                            className={`flex flex-col h-[80%] w-[50%] sm:w-[35%] justify-center items-center`}
                        >
                            <div className={`font-ROG ${styles.deets}`}>
                                <p className="text-[0.7rem] sm:text-lg text-[#B0B0B0]">
                                    WELCOME
                                    <span className="text-[1.2rem] sm:text-3xl ml-2 text-white">
                                        SHUBHAM{' '}
                                    </span>
                                </p>
                            </div>
                            <div className={`font-ROG overflow-x-auto ${styles.deets}`}>
                                <p className="text-[0.7rem] sm:text-lg text-[#B0B0B0]">
                                    FROM
                                    <span className="ml-2 text-[1.2rem] sm:text-3xl text-white">
                                        NATIONAL INSTITUTE OF TECHNOLOGY TIRUCHIRAPALLI
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={`h-[80%] min-w-24 w-[40%] relative`}>
                            <Image
                                src={qrimage}
                                alt="qr"
                                className="h-[100%] w-[100%] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;
