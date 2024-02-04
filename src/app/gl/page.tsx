'use client';
import { NavBar } from '@/components';
import styles from './gl.module.css';
import GuestLecturesCard from '@/components/GuestLectureCard/GuestLectureCard';

const GuestLectures = () => {
    return (
        <div className={`min-h-screen w-full text-center max-sm:p-3 p-5 event relative`}>
            <NavBar />
            <div className="font-ROG 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl text-xl mt-5 flex justify-center align-middle">
                GUEST LECTURES
            </div>
            <div
                className={`${styles.glname} font-ROG 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-lg mt-8 flex justify-center align-middle`}
            >
                CROSSFIRE
            </div>
            <div className=" w-full pl-5 pr-5 flex justify-evenly items-center mt-8 relative">
                <GuestLecturesCard />
                <div className=" mt-[15vh]">
                    <GuestLecturesCard />
                </div>
                <GuestLecturesCard />
            </div>
            <div
                className={`${styles.glname} font-ROG 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-lg mt-[20vh] flex justify-center align-middle`}
            >
                ILLUMINAIRE
            </div>
            <div className=" w-full h-fit pl-5 pr-5 flex justify-evenly items-center relative">
                <GuestLecturesCard />
                <div className=" mt-[15vh]">
                    <GuestLecturesCard />
                </div>
                <GuestLecturesCard />
            </div>
            <div className="h-[20vh]"></div>
        </div>
    );
};

export default GuestLectures;
