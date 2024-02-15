'use client';
import { NavBar } from '@/components';
import styles from './hospitality.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
import Image from 'next/image';
import { getHospiDesc } from '@/utils/events_cms';
import Markdown from 'react-markdown';
import Script from 'next/script';
import { useRouter } from 'next/navigation';

interface HospitalityDetails {
    name: string;
    desc: string;
}

declare global {
    // eslint-disable-next-line no-unused-vars
    let popup: (a: string) => void;
}

export default function Hospitality() {
    const [content, setContent] = useState<HospitalityDetails[]>([]);
    const [mobile, setMobile] = useState(false);
    const [tabSelected, setTabSelected] = useState<number>(0);
    const [noofDays, setNoofDays] = useState<number>(3);
    const router = useRouter();

    function HandleRegisterChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setNoofDays(parseInt(e.target.value));
    }

    const getDetails = async () => {
        const res = await getHospiDesc();
        setContent(res);
        setMobile(window.innerWidth <= 820);
    };

    useEffect(() => {
        getDetails();
    }, []);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/login');
        }
    });

    return (
        <>
            {content.length > 0 && (
                <div className={`min-h-screen w-full text-center max-sm:p-3 p-5 ${styles.parent}`}>
                    <NavBar />
                    <div className="font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 flex justify-center align-middle">
                        HOSPITALITY
                    </div>
                    <div className="flex gap-4 mb-4">
                        <select
                            onChange={HandleRegisterChange}
                            className="bg-black text-white mt-5 first-line: p-4"
                        >
                            <option value="3" className="bg-black text-white font-Nunito">
                                3 DAY
                            </option>
                            <option value="2" className="bg-black text-white font-Nunito">
                                2 DAY
                            </option>
                            <option value="1" className="bg-black text-white font-Nunito">
                                1 DAY
                            </option>
                        </select>

                        <button
                            style={{
                                backgroundColor: '#142133',
                                color: '#fff',
                                padding: '8px 15px',
                                cursor: 'pointer',
                                fontSize: '15px',
                                marginTop: '20px',
                                fontFamily: 'ROG',
                                border: '2px solid #1e74c1',
                            }}
                            onClick={() => {
                                if (noofDays === 1) {
                                    popup('pragyan-24-hospitality-1-day');
                                }
                                if (noofDays === 2) {
                                    popup('pragyan-24-hospitality-2-day');
                                }
                                if (noofDays === 3) {
                                    popup('pragyan-24-hospitality-3-day');
                                }
                            }}
                            className="tsbutton"
                        >
                            Register
                        </button>
                    </div>
                    <noscript id="tsNoJsMsg">Javascript on your browser is not enabled.</noscript>
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
                        <div className={styles.desc}>
                            <Markdown className={styles.markdown}>
                                {content[tabSelected].desc}
                            </Markdown>
                        </div>
                    </div>
                    <Script
                        src="https://www.townscript.com/static/Bookingflow/js/inject-modal.nocache.js"
                        type="text/javascript"
                        strategy="afterInteractive"
                    ></Script>
                </div>
            )}
        </>
    );
}
