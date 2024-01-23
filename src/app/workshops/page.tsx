/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { NavBar } from '@/components';
import styles from './workshops.module.css';
import { getWorkshops } from '@/utils/events_cms';
import { useEffect, useState } from 'react';
import WorkshopCards from '@/components/WorkshopCard/WorkshopCards';
import Tilt from 'react-parallax-tilt';

const WorkShop = () => {
    const [details, setDetails] = useState<any>([]);

    const getDetails = async () => {
        const res = await getWorkshops();
        setDetails(res);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className={`min-h-screen w-full text-center max-sm:p-3 p-5 event`}>
            <NavBar />
            <div className="font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 flex justify-center align-middle">
                WORKSHOPS
            </div>
            <div className={`${styles.bg} flex justify-around align-middle flex-wrap m-4`}>
                {details ? (
                    details.map((element: any) => {
                        return (
                            <Tilt key={element.id}>
                                <WorkshopCards key={element.id} data={element} />
                            </Tilt>
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default WorkShop;
