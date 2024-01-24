'use client';
import { NavBar } from '@/components';
import styles from './hospitality.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
import Image from 'next/image';
import { getHospiDesc } from '@/utils/events_cms';
export default function Hospitality() {
    const [des, setDes] = useState<string[]>([]);
    useEffect(() => {
        const a = async () => {
            setDes(await getHospiDesc());
        };
        a();
    }, []);
    const tabNames = ['Instructions', 'How to Reach', 'Accomodation', 'Contacts', 'FAQs'];
    const [tabSelected, setTabSelected] = useState<number>(0);
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        setMobile(window.innerWidth <= 820);
    }, []);
    return (
        <div className={styles.parent}>
            <NavBar />
            <div className={styles.content}>
                <div className={styles.title}>Hospitality </div>
                <div className={styles.tabContent}>
                    {!mobile ? (
                        <div className={styles.tabPaneWrapper}>
                            <div className={styles.tabPane}>
                                <div className="flex justify-around">
                                    {tabNames.map((tabName, index) => {
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
                                <motion.div
                                    initial={{
                                        x: document.getElementById(`tab${tabSelected}`)?.offsetLeft,
                                        width: document
                                            .getElementById(`tab${tabSelected}`)
                                            ?.getBoundingClientRect().width,
                                    }}
                                    animate={{
                                        x: document.getElementById(`tab${tabSelected}`)?.offsetLeft,
                                        width: document
                                            .getElementById(`tab${tabSelected}`)
                                            ?.getBoundingClientRect().width,
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                    }}
                                    className={styles.underline}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={styles.tabPaneWrapper}>
                            <div className={styles.tabTitle}>
                                <Image
                                    src={leftArrow}
                                    alt="lArrow"
                                    className="self-start"
                                    width={40}
                                    onClick={() => {
                                        setTabSelected(
                                            (tabNames.length + tabSelected - 1) % tabNames.length,
                                        );
                                    }}
                                />
                                <div> {tabNames[tabSelected]} </div>
                                <Image
                                    src={rightArrow}
                                    alt="rArrow"
                                    width={40}
                                    className="self-end"
                                    onClick={() => {
                                        setTabSelected((tabSelected + 1) % tabNames.length);
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <div className={styles.desc}>{des[tabSelected]}</div>
                </div>
            </div>
        </div>
    );
}
