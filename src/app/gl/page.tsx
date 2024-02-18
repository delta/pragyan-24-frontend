/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Loader, NavBar } from '@/components';
import Image from 'next/image';
import styles from './gl.module.css';
import GuestLecturesCard from '@/components/GuestLectureCard/GuestLectureCard';
import { useEffect, useState } from 'react';
import { getGuestLectures } from '@/utils/events_cms';
import arrowBlackAuth from '@/assets/images/arrow_back_auth.svg';

const GuestLectures = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [CrossfireDetails, setCrossfireDetails] = useState<any>([]);
    const [IlluminaireDetails, setIlluminaireDetails] = useState<any>([]);
    const [illuminairePageNo, setIlluminairePageNo] = useState<number>(0);
    const [crossfirePageNo, setCrossfirePageNo] = useState<number>(0);
    const [maxIlliminairePageNo, setMaxIlliminairePageNo] = useState<number>(0);
    const [maxCrossfirePageNo, setMaxCrossfirePageNo] = useState<number>(0);
    const pageSize = 4;

    const getDetails = async () => {
        const res = await getGuestLectures();
        const crossfire = res.filter((elem: any) => elem.cluster_name === 'Crossfire');
        const illuminaire = res.filter((elem: any) => elem.cluster_name === 'Illuminaire');
        setMaxCrossfirePageNo(Math.ceil(crossfire.length / pageSize) - 1);
        setMaxIlliminairePageNo(Math.ceil(illuminaire.length / pageSize) - 1);
        setCrossfireDetails(crossfire);
        setIlluminaireDetails(illuminaire);
        setIsLoading(false);
    };

    useEffect(() => {
        getDetails();
    }, []);

    const getArrayAfterPagination = (array: any, pageNo: number) => {
        return array.slice(pageNo * pageSize, Math.min(array.length, pageNo * pageSize + pageSize));
    };

    if (isLoading) return <Loader />;

    return (
        <div className={`min-h-screen w-full text-center max-sm:p-3 p-5 event relative`}>
            <NavBar />
            <div className="font-ROG 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl text-xl mt-5 flex justify-center align-middle">
                GUEST LECTURES
            </div>
            <div
                className={`${styles.glname} font-ROG 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-lg mt-[5vh] flex justify-center align-middle mb-3`}
            >
                ILLUMINAIRE
            </div>
            <div className=" w-full h-fit pl-5 pr-5 flex justify-evenly items-center relative max-lg:hidden">
                {illuminairePageNo !== 0 && (
                    <Image
                        alt="left"
                        src={arrowBlackAuth}
                        className="absolute left-0"
                        onClick={() => setIlluminairePageNo(illuminairePageNo - 1)}
                    ></Image>
                )}
                {getArrayAfterPagination(IlluminaireDetails, illuminairePageNo).map(
                    (element: any) => {
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
                    },
                )}
                {illuminairePageNo !== maxIlliminairePageNo && (
                    <Image
                        alt="right"
                        src={arrowBlackAuth}
                        className="absolute right-0 rotate-180"
                        onClick={() => setIlluminairePageNo(illuminairePageNo + 1)}
                    ></Image>
                )}
            </div>
            {/* mobile */}
            <div className="  w-full h-full flex flex-col gap-6 justify-evenly items-center mt-8 relative lg:hidden">
                {IlluminaireDetails.map((element: any) => {
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
            {CrossfireDetails.length > 0 && (
                <div className={`${styles.bg} w-full h-fit`}>
                    <div
                        className={`${styles.glname} font-ROG 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-lg mt-8 flex justify-center align-middle`}
                    >
                        CROSSFIRE
                    </div>
                    <div className=" w-full pl-5 pr-5 flex justify-evenly items-center mt-8 relative max-lg:hidden">
                        {crossfirePageNo !== 0 && (
                            <Image
                                alt="left"
                                src={arrowBlackAuth}
                                className="absolute left-0"
                                onClick={() => setCrossfirePageNo(crossfirePageNo - 1)}
                            ></Image>
                        )}
                        {getArrayAfterPagination(CrossfireDetails, crossfirePageNo).map(
                            (element: any) => {
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
                            },
                        )}
                        {crossfirePageNo !== maxCrossfirePageNo && (
                            <Image
                                alt="right"
                                src={arrowBlackAuth}
                                className="absolute right-0 rotate-180"
                                onClick={() => setCrossfirePageNo(crossfirePageNo + 1)}
                            ></Image>
                        )}
                    </div>
                    {/* mobile */}
                    <div className="  w-full h-full flex flex-col gap-6 justify-evenly items-center mt-8 relative lg:hidden">
                        {CrossfireDetails.map((element: any) => {
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
            )}
        </div>
    );
};

export default GuestLectures;
