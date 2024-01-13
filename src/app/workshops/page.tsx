/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { NavBar } from '@/components';
import styles from './workshops.module.css';
import { getWorkshops } from '@/utils/events_cms';
import { useEffect, useState } from 'react';
import WorkshopCards from '@/components/Workshop/WorkshopCards';

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
        <div>
            <NavBar />
            <div className="font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 flex justify-center align-middle">
                WORKSHOP
            </div>
            <div className={`${styles.bg} flex justify-around align-middle flex-wrap m-4`}>
                {details ? (
                    details.map((element: any) => <WorkshopCards key={element.id} data={element} />)
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default WorkShop;
