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
                'md:hidden flex justify-center items-center p-4 py-10 text-center'
            }
        >
            <div className={styles.topLeft}></div>
            <div className={styles.topRight}></div>
            <div className={styles.bottomLeft}></div>
            <div className={styles.bottomRight}></div>
            <p className={styles.content + ' ' + 'w-full h-full p-3 overflow-y-scroll'}>
                {content} + {content2}
            </p>
        </div>
    );
};

export default AboutCardMob;
