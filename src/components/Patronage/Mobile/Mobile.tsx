'use client';
import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { CMS_URL } from '@/config/config';

const Mobile = ({ data }: PatronageProp) => {
    return (
        <div className={styles.wrapper + ' md:hidden font-ROG overflow-hidden '}>
            <div className={styles.container}>
                {data.map((patronage, index) => {
                    return (
                        <div
                            className={styles.patronageElement}
                            key={index}
                            onClick={() => {
                                window.open(patronage.href, '_blank');
                            }}
                        >
                            <div className={styles.patronageName + ' font-ROG'}>
                                {patronage.name}
                            </div>
                            <div className={styles.patronageImage}>
                                <Image
                                    src={CMS_URL + patronage.src}
                                    alt="img"
                                    width={600}
                                    height={500}
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Mobile;
