'use client';
import { NavBar } from '@/components';
import styles from './hospitality.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
import Image from 'next/image';
import { getHospiDesc } from '@/utils/events_cms';

interface HospitalityDetails {
    name: string;
    desc: string;
}

export default function Hospitality() {
    const [content, setContent] = useState<HospitalityDetails[]>([]);
    const [mobile, setMobile] = useState(false);
    const [tabSelected, setTabSelected] = useState<number>(0);

    const getDetails = async () => {
        const res = await getHospiDesc();
        setContent(res);
        setMobile(window.innerWidth <= 820);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            {content.length > 0 && (
                <div className={`min-h-screen w-full text-center max-sm:p-3 p-5 ${styles.parent}`}>
                    <NavBar />
                    <div className="font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 flex justify-center align-middle">
                        HOSPITALITY
                    </div>
                    <div className={styles.tabContent}>
                        {!mobile ? (
                            <div className={styles.tabPaneWrapper}>
                                <div className={styles.tabPane}>
                                    <div className="flex justify-around">
                                        {content.map(({ name: tabName }, index) => {
                                            return (
                                                <div
                                                    className={styles.tab}
                                                    key={index}
                                                    id={`tab${index}`}
                                                    onClick={() => {
                                                        setTabSelected(index);
                                                    }}
                                                >
                                                    {tabName}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {document != undefined && (
                                        <motion.div
                                            initial={{
                                                x: document.getElementById(`tab${tabSelected}`)
                                                    ?.offsetLeft,
                                                width: document
                                                    .getElementById(`tab${tabSelected}`)
                                                    ?.getBoundingClientRect().width,
                                            }}
                                            animate={{
                                                x: document.getElementById(`tab${tabSelected}`)
                                                    ?.offsetLeft,
                                                width: document
                                                    .getElementById(`tab${tabSelected}`)
                                                    ?.getBoundingClientRect().width,
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 90,
                                            }}
                                            className={styles.underline}
                                        />
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.tabPaneWrapper}>
                                <div className={styles.tabTitle}>
                                    <Image
                                        src={leftArrow}
                                        alt="lArrow"
                                        className="absolute left-[10px]"
                                        width={35}
                                        onClick={() => {
                                            setTabSelected(
                                                (content.length + tabSelected - 1) % content.length,
                                            );
                                        }}
                                    />
                                    <div> {content[tabSelected].name} </div>
                                    <Image
                                        src={rightArrow}
                                        alt="rArrow"
                                        width={35}
                                        className="absolute right-[10px]"
                                        onClick={() => {
                                            setTabSelected((tabSelected + 1) % content.length);
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                        <div className={styles.desc}>{content[tabSelected].desc}</div>
                    </div>
                </div>
            )}
        </>
    );
}
