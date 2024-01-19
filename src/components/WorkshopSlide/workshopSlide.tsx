/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EventImage from '../../assets/images/randomEventPic.jpg';
import MapDrop from '../../assets/images/MapDrop.png';
import styles from './workshop.module.css';
import { CMS_URL } from '@/config/config';
import Markdown from 'react-markdown';

//@ts-ignore
const WorkshopSlide = props => {
    const [index, setIndex] = useState(1);
    const [isActive, setIsActive] = useState(1);
    const [data, setData] = useState(props.data.details);

    useEffect(() => {
        switch (index) {
            case 1:
                setData(props.data.details);
                setIsActive(1);
                break;
            case 2:
                setData(props.data.content);
                setIsActive(2);
                break;
            case 3:
                setData(props.data.contact);
                setIsActive(3);
                break;
            case 4:
                setData(props.data.faq);
                setIsActive(4);
                break;
        }
    }, [index, props.data]);

    const handleRegister = () => {
        window.open(props.data.registration_link, '_blank');
    };

    return (
        <div className={`${styles.slideElem} flex justify-center align-middle`}>
            <div
                className={`${styles.leftSC} flex justify-center align-middle max-lg:hidden`}
            ></div>
            <div className={`flex justify-center flex-col w-full h-auto ${styles.eventSlide}`}>
                <div
                    className={`flex justify-center flex-col items-center w-1/3 h-auto p-7 ${styles.slideIntro1}`}
                >
                    <div className="font-ROG 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg sm:text-md max-lg:mt-4 text-md h-1/6 mt-4 mb-4 transition-all p-10">
                        {props.data.name}
                    </div>
                    <Image
                        src={
                            props.data.image
                                ? CMS_URL + props.data.image.data.attributes?.url
                                : EventImage
                        }
                        width={props.data.image.data.attributes?.width}
                        height={props.data.image.data.attributes?.height}
                        alt="image about workshop"
                        className={`h-5/6 w-full rounded-xl ${styles.eventImg}`}
                    />
                </div>

                <div className={`flex justify-between w-full ${styles.eventI}`}>
                    <div className="flex justify-between items-center w-full h-full">
                        <div className="flex justify-begin items-center mt-auto mb-auto font-Orbitron 2xl:text-md xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                            {props.data.date}
                        </div>
                        <div className="flex justify-end items-center mt-auto mb-auto font-Orbitron 2xl:text-md xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                            {' '}
                            {props.data.location}{' '}
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.mainSlide} flex justify-center flex-col align-middle p-0 h-full`}
                >
                    <div className={`flex justify-center w-full h-5/6 ${styles.slideInfo}`}>
                        <div
                            className={`flex justify-center items-center flex-col w-1/3 h-full p-7 pt-4 gap-14 max-lg:hidden ${styles.slideIntro}`}
                        >
                            <div className="font-ROG 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md h-1/6 transition-all min-w-0 flex-wrap whitespace-pre-wrap">
                                {props.data.name}
                            </div>
                            <Image
                                src={
                                    props.data.image
                                        ? CMS_URL + props.data.image.data.attributes?.url
                                        : EventImage
                                }
                                width={props.data.image.data.attributes?.width}
                                height={props.data.image.data.attributes?.height}
                                alt="image about workshop"
                                className="h-[75%] w-full rounded-xl"
                            />
                        </div>
                        <div
                            className={`flex justify-center flex-col w-full h-full ${styles.eventDes}`}
                        >
                            <div
                                className={`flex justify-around items-center w-full h-1/5 pt-0 ${styles.tabSection}`}
                            >
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-md md-text-lg sm-text-md text-md cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 1 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(1)}
                                >
                                    Details
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-md md-text-lg sm-text-md text-md cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 2 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(2)}
                                >
                                    Content
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-md md-text-lg sm-text-md text-md cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 3 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(3)}
                                >
                                    Contact
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-md md-text-lg sm-text-md  text-md cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 4 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(4)}
                                >
                                    FAQ
                                </div>
                            </div>
                            <div
                                className={`w-full h-4/5 font-Nunito 2xl:text-base xl:text-sm lg:text-sm sm:text-xs text-sm p-3 ${styles.content}`}
                            >
                                <Markdown className={styles.markdown}>{data}</Markdown>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`flex justify-center h-1/6 m-0 p-0 max-lg:hidden ${styles.slideEnd}`}
                    >
                        <div className="flex justify-center align-middle flex-col w-full h-full max-lg:hidden">
                            <div className="flex justify-begin pl-20 align-middle mt-auto mb-auto font-Orbitron 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                                <span> {props.data.date}</span>
                            </div>
                            <div className="flex justify-begin pl-20 align-middle mt-auto mb-auto font-Orbitron 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                                <span>
                                    <Image src={MapDrop} alt="Location" width={13} height={13} />
                                </span>
                                <span className="ml-2"> {props.data.location}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`flex justify-center w-full h-full p-0 ${styles.registerBlock}`}
                    >
                        <div
                            className={`flex justify-center ${styles.registerButton}`}
                            onClick={() => handleRegister()}
                        ></div>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.rightSC} flex justify-center align-middle max-lg:hidden`}
            ></div>
        </div>
    );
};

export default WorkshopSlide;
