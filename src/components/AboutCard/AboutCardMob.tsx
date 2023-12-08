import React from 'react';
import styles from './AboutCard.module.css';
import AboutContent from './AboutContent.json';

const AboutCardMob = () => {
    const content: string = AboutContent.content;
    const content2: string = AboutContent.content2;
    return (
        <div
            className={
                styles.parent +
                ' ' +
                'md:hidden flex justify-center items-center p-4 py-10 text-center AboutCardContent z-0'
            }
        >
            <div className={styles.topLeft + ' ' + styles.edge}></div>
            <div className={styles.topRight + ' ' + styles.edge}></div>
            <div className={styles.bottomLeft + ' ' + styles.edge}></div>
            <div className={styles.bottomRight + ' ' + styles.edge}></div>
            <div className={styles.content + ' ' + 'w-full h-full p-3 overflow-y-scroll relative'}>
                {content} + {content2}
            </div>
        </div>
    );
};

export default AboutCardMob;
