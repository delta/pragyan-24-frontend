/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EventImage from '../../assets/images/randomEventPic.jpg';
import MapDrop from '../../assets/images/MapDrop.png';
import styles from './caro.module.css';
import { CMS_URL } from '@/config/config';
import Markdown from 'react-markdown';
import { EventApi } from '../../../fest-web-client/client/src';
import { apiConfig } from '@/utils/ApiConfig';
import toast from 'react-hot-toast';

//@ts-ignore
const SlideData: React.FC<SlideDataProps> = ({ details }) => {
    const [index, setIndex] = useState(1);
    const [isActive, setIsActive] = useState(1);
    const [data, setData] = useState(details.content[0]);
    const [registered, setRegistered] = useState<number[]>([]);
    const handleRegister = () => {
        try {
            //backend url
            const eventAPI = new EventApi(apiConfig);
            eventAPI
                .eventRegister({
                    // @ts-ignore-next-line
                    event_id: details.id,
                    team_members: ['TODO'],
                    tema_name: 'todo',
                })
                .then(res => {
                    // @ts-ignore-next-line
                    toast.success(res.message);
                    getRegisteredEvent();
                })
                .catch(e => toast.error(e.message));
        } catch (err) {
            console.log(err);
        }
    };

    const getRegisteredEvent = () => {
        try {
            const eventAPI = new EventApi(apiConfig);
            eventAPI
                .userEventDetails({})
                .then(res => {
                    const names: number[] = [];
                    // @ts-ignore-next-line
                    res.message.forEach((element: { event_id: string }) => {
                        names.push(parseInt(element.event_id));
                    });
                    setRegistered(names);
                })
                .catch(e => console.log(e));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getRegisteredEvent();
        }
    }, []);

    useEffect(() => {
        switch (index) {
            case 1:
                setData(details.content[0]);
                setIsActive(1);
                break;
            case 2:
                setData(details.content[1]);
                setIsActive(2);
                break;
            case 3:
                setData(details.content[2]);
                setIsActive(3);
                break;
            case 4:
                setData(details.content[3]);
                setIsActive(4);
                break;
        }
    }, [index, details.content]);

    return (
        <div className={`${styles.slideElem} flex justify-center align-middle`}>
            <div
                className={`${styles.leftSC} flex justify-center align-middle max-lg:hidden`}
            ></div>
            <div className={`flex justify-center flex-col w-full  h-auto ${styles.eventSlide}`}>
                <div
                    className={`flex justify-center flex-col items-center w-1/3 h-full p-7 ${styles.slideIntro1}`}
                >
                    <div className="font-ROG 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xs max-lg:mt-4 text-xs h-1/6 transition-all">
                        {details.name}
                    </div>
                    <Image
                        src={details.image ? CMS_URL + details.image?.url : EventImage}
                        width={details.image?.width}
                        height={details.image?.height}
                        alt="image about event"
                        className={`h-5/6 w-full rounded-xl ${styles.eventImg}`}
                    />
                </div>

                <div className={`flex justify-between w-full ${styles.eventI}`}>
                    <div className="flex justify-center flex-col items-center w-1/2 h-full">
                        <div className="flex justify-begin items-center mt-auto mb-auto font-Orbitron 2xl:text-md xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                            {details.date}
                        </div>
                        <div className="flex justify-begin items-center mt-auto mb-auto font-Orbitron 2xl:text-md xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                            {' '}
                            {details.location}{' '}
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center w-1/2 h-full">
                        <div className="flex justify-end items-center mt-auto mb-auto font-Orbitron 2xl:text-md xl:text-md lg:text-md md:text-md text-md w-full 2xl:font-black xl:font-black lg:font-black sm:font-black font-black">
                            {details.price}
                        </div>
                        <div className="flex justify-end items-center mb-auto font-Orbitron 2xl:text-md xl:text-sm lg:text-sm sm:text-sm text-sm w-full mt-auto">
                            Prize Money
                        </div>
                    </div>
                </div>
                <div className={`${styles.mainSlide} flex justify-center flex-col align-middle`}>
                    <div className={`flex justify-center w-full h-5/6 ${styles.slideInfo}`}>
                        <div
                            className={`flex justify-center items-center flex-col w-1/3 h-full p-7 gap-5 max-lg:hidden ${styles.slideIntro}`}
                        >
                            <div className="font-ROG 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs h-1/6 transition-all">
                                {details.name}
                            </div>
                            <Image
                                src={details.image ? CMS_URL + details.image?.url : EventImage}
                                width={details.image?.width}
                                height={details.image?.height}
                                alt="image about event"
                                className="h-[75%] w-full rounded-xl"
                            />
                        </div>
                        <div
                            className={`flex justify-center flex-col w-full h-full p-4 ${styles.eventDes}`}
                        >
                            <div className="flex justify-around items-center w-full h-1/5">
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 1 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(1)}
                                >
                                    Description
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 2 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(2)}
                                >
                                    Judging Criteria
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 3 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(3)}
                                >
                                    Rules
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs  text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 4 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(4)}
                                >
                                    Contact
                                </div>
                            </div>
                            <div
                                className={`w-full h-4/5 font-Nunito 2xl:text-base xl:text-sm lg:text-sm sm:text-xs text-sm p-3 ${styles.content}`}
                            >
                                <Markdown className={styles.markdown}>{data}</Markdown>
                            </div>
                        </div>
                    </div>
                    <div className={`flex justify-center h-1/6 m-0 p-0 ${styles.slideEnd}`}>
                        <div className="flex justify-center align-middle flex-col w-1/4 h-full max-lg:hidden">
                            <div className="flex justify-center align-middle mt-auto mb-auto font-Orbitron 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                                <span> {details.date}</span>
                            </div>
                            <div className="flex justify-center align-middle mt-auto mb-auto font-Orbitron 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                                <span>
                                    <Image src={MapDrop} alt="Location" width={13} height={13} />
                                </span>
                                <span className="ml-2"> {details.location}</span>
                            </div>
                        </div>
                        <div
                            className={`flex justify-center w-2/3 h-full p-0 ${styles.registerBlock}`}
                        >
                            {registered.includes(details.id) ? (
                                <div
                                    className={`flex justify-center ${styles.registeredButton}`}
                                    onClick={() => handleRegister()}
                                ></div>
                            ) : (
                                <div
                                    className={`flex justify-center ${styles.registerButton}`}
                                    onClick={() => handleRegister()}
                                ></div>
                            )}
                        </div>
                        <div className="flex justify-center align-bottom w-1/4 h-full max-lg:hidden">
                            <div className="font-OrbitronG 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm mt-auto pb-[0.35rem]">
                                PRIZE MONEY : {details.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.rightSC} flex justify-center align-middle max-lg:hidden`}
            ></div>
        </div>
    );
};

export default SlideData;
