/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Loader, NavBar } from '@/components';
import styles from './gl.module.css';
import GuestLecturesCard from '@/components/GuestLectureCard/GuestLectureCard';
import { useEffect, useState } from 'react';
import { getGuestLectures } from '@/utils/events_cms';

const GuestLectures = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [CrossfireDetails, setCrossfireDetails] = useState<any>([]);
    const [IlluminaireDetails, setIlluminaireDetails] = useState<any>([]);

    const getDetails = async () => {
        const res = await getGuestLectures();

        const crossfire = res.filter((elem: any) => elem.cluster_name === 'Crossfire');
        const illuminaire = res.filter((elem: any) => elem.cluster_name === 'Illuminaire');

        setCrossfireDetails(crossfire);
        setIlluminaireDetails(illuminaire);
        setIsLoading(false);
    };

    useEffect(() => {
        getDetails();
    }, []);

    if (isLoading) return <Loader />;

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
            <div className=" w-full pl-5 pr-5 flex justify-evenly items-center mt-8 relative max-md:hidden">
                {CrossfireDetails.map((element: any) => {
                    console.log(element);
                    return (
                        <div className={styles.NTH} key={element.id}>
                            <GuestLecturesCard
                                key={element.id}
                                cluster_name={element.cluster_name}
                                name={element.name}
                                image={element.image.data.attributes.url}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="  w-full h-full flex flex-col gap-6 justify-evenly items-center mt-8 relative md:hidden">
                {CrossfireDetails.map((element: any) => {
                    console.log(element);
                    return (
                        <div key={element.id} className="">
                            <GuestLecturesCard
                                key={element.id}
                                cluster_name={element.cluster_name}
                                name={element.name}
                                image={element.image.data.attributes.url}
                            />
                        </div>
                    );
                })}
            </div>
            <div
                className={`${styles.glname} font-ROG 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-lg md:mt-[20vh] mt-[5vh] flex justify-center align-middle`}
            >
                ILLUMINAIRE
            </div>
            <div className=" w-full h-fit pl-5 pr-5 flex justify-evenly items-center relative max-md:hidden">
                {IlluminaireDetails.map((element: any) => {
                    return (
                        <div className={styles.NTH} key={element.id}>
                            <GuestLecturesCard
                                key={element.id}
                                cluster_name={element.cluster_name}
                                name={element.name}
                                image={element.image.data.attributes.url}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="  w-full h-full flex flex-col gap-6 justify-evenly items-center mt-8 relative md:hidden">
                {IlluminaireDetails.map((element: any) => {
                    console.log(element);
                    return (
                        <div key={element.id} className="">
                            <GuestLecturesCard
                                key={element.id}
                                cluster_name={element.cluster_name}
                                name={element.name}
                                image={element.image.data.attributes.url}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="h-[20vh]"></div>
        </div>
    );
};

export default GuestLectures;
