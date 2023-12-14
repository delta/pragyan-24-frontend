'use client';
import styles from './styles.module.css';

import topLeftBorder from '../../assets/images/top-left-border.svg';
import topRightBorder from '../../assets/images/top-right-border.svg';
import bottomBorder from '../../assets/images/bottom-border.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SponsorCard = ({ name, logo }: SponsorCardProps) => {
    const [dim, setDim] = useState(1);
    useEffect(() => {
        setDim(window.innerWidth < 560 ? 0.65 : 1);
    }, []);

    return (
        <>
            <motion.div className={styles.parent} animate={{ scale: dim }}>
                <div className={styles.borderOverlay}>
                    <div className="flex w-full justify-between">
                        <Image src={topLeftBorder} alt="" className={styles.topLeftBorder} />
                        <Image src={topRightBorder} alt="" className={styles.topRightBorder} />
                    </div>
                    <Image src={bottomBorder} alt="" className={styles.bottomBorder} />
                </div>
                <div className={styles.sponsorParent}>
                    <div className={styles.title}>
                        <div className={styles.titleBorder}>{name} </div>
                    </div>
                    <div className={styles.body}>
                        {logo != '' && <Image src={logo} alt={name} width={400} height={400} />}
                    </div>
                </div>
            </motion.div>
        </>
    );
};
export default SponsorCard;
