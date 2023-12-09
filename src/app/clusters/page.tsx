/* eslint-disable */

'use client';
import { NavBar } from '@/components';
import Image from 'next/image';
import styles from './clusters.module.css';
import portal from '@/assets/images/Portal.png';
import hourglassBlue from '@/assets/images/HourGlass_blue.svg';
import hourglassYellow from '@/assets/images/HourGlass_yellow.svg';
import textBox from '@/assets/images/clusterTextBox.png';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getClusterNames } from '@/utils/events_cms';

const Clusters = () => {
    const router = useRouter();
    const [isHovering, setIsHovered] = useState(-1);
    const onMouseEnter = (id: number) => setIsHovered(id);
    const onMouseLeave = () => setIsHovered(-1);
    const [position, setPositon] = useState([
        { x: '20%', y: '45%', opacity: 1 },
        { x: '35%', y: '50%', opacity: 1 },
        { x: '55%', y: '50%', opacity: 1 },
        { x: '70%', y: '45%', opacity: 1 },
        { x: '30%', y: '70%', opacity: 1 },
        { x: '45%', y: '75%', opacity: 1 },
        { x: '60%', y: '70%', opacity: 1 },
    ]);
    const [positionMobile, setPositonMobile] = useState([
        { x: '10%', y: '35%', opacity: 1 },
        { x: '60%', y: '35%', opacity: 1 },
        { x: '10%', y: '50%', opacity: 1 },
        { x: '60%', y: '50%', opacity: 1 },
        { x: '10%', y: '65%', opacity: 1 },
        { x: '60%', y: '65%', opacity: 1 },
        { x: '35%', y: '80%', opacity: 1 },
    ]);

    //@ts-ignore
    const [details, setDetails] = useState<any>([]);

    const getDetails = async () => {
        let res = await getClusterNames();
        setDetails(res);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className={styles.clusterBG + ' ' + 'h-screen w-screen p-0 flex justify-center '}>
            <div className="absolute top-0 w-full p-5">
                <NavBar />
            </div>

            <div style={{ textAlign: 'center' }}>
                <motion.div>
                    <p
                        className={
                            styles.title + ' font-ROG lg:text-7xl md:text-4xl sm:text-5xl text-3xl'
                        }
                    >
                        CLUSTERS
                    </p>
                    <Image src={portal} alt="portal" draggable={false} className={styles.portal} />
                </motion.div>
                <div className={styles.hourCover + ' max-md:hidden'}>
                    {position.map((e, ind) => (
                        <motion.div
                            key={ind}
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={() => {
                                onMouseEnter(ind);
                            }}
                            transition={{ delay: 0.2 + ind * 0.1 }}
                            onClick={() => {
                                const dummy = [...position];
                                dummy[ind] = { x: '45%', y: '30%', opacity: 0 };
                                setPositon(dummy);
                                setTimeout(() => {
                                    router.push(
                                        `/eventcluster/${
                                            details.length > ind ? details[ind].id : 0
                                        }/${details.length > ind ? details[ind].name : ''}`,
                                    );
                                }, 1000);
                            }}
                            initial={{ left: '45%', opacity: 0 }}
                            animate={{ left: e.x, top: e.y, opacity: e.opacity }}
                            style={{ position: 'absolute' }}
                            className={styles.cover}
                        >
                            <motion.div
                                initial={{ opacity: 0, bottom: '-4rem' }}
                                animate={{ opacity: 1, bottom: '-3rem' }}
                                transition={{ delay: 0.7 + ind * 0.1 }}
                                style={{ position: 'relative' }}
                            >
                                <Image
                                    src={textBox}
                                    alt="textBox"
                                    draggable={false}
                                    className={styles.textBox}
                                />
                                <p className={styles.clusterName}>
                                    {details.length > ind ? details[ind].name : 'ROBOREX'}
                                </p>
                            </motion.div>

                            {isHovering == ind ? (
                                <Image
                                    src={hourglassYellow}
                                    alt="portal"
                                    draggable={false}
                                    className={styles.hourglass}
                                />
                            ) : (
                                <Image
                                    src={hourglassBlue}
                                    alt="portal"
                                    draggable={false}
                                    className={styles.hourglass}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
                <div className={styles.hourCover + ' md:hidden'}>
                    {positionMobile.map((e, ind) => (
                        <motion.div
                            key={ind}
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={() => {
                                onMouseEnter(ind);
                            }}
                            transition={{ delay: 0.2 + ind * 0.1 }}
                            onClick={() => {
                                const dummy = [...positionMobile];
                                dummy[ind] = { x: '45%', y: '30%', opacity: 0 };
                                setPositonMobile(dummy);
                                setTimeout(() => {
                                    router.push(
                                        `/eventcluster/${
                                            details.length > ind ? details[ind].id : 0
                                        }/${details.length > ind ? details[ind].name : ''}`,
                                    );
                                }, 1000);
                            }}
                            initial={{ left: '45%', opacity: 0 }}
                            animate={{ left: e.x, top: e.y, opacity: e.opacity }}
                            style={{ position: 'absolute' }}
                            className={styles.cover}
                        >
                            <motion.div
                                initial={{ opacity: 0, bottom: '-4rem' }}
                                animate={{ opacity: 1, bottom: '-3rem' }}
                                transition={{ delay: 0.7 + ind * 0.1 }}
                                style={{ position: 'relative' }}
                            >
                                <Image
                                    src={textBox}
                                    alt="textBox"
                                    draggable={false}
                                    className={styles.textBox}
                                />
                                <p className={styles.clusterName}>
                                    {details.length > ind ? details[ind].name : 'ROBOREX'}
                                </p>
                            </motion.div>

                            {isHovering == ind ? (
                                <Image
                                    src={hourglassYellow}
                                    alt="portal"
                                    draggable={false}
                                    className={styles.hourglass}
                                />
                            ) : (
                                <Image
                                    src={hourglassBlue}
                                    alt="portal"
                                    draggable={false}
                                    className={styles.hourglass}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clusters;
