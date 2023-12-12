import React from 'react';
import styles from './AboutCard.module.css';
import AboutContent from './AboutContent.json';

const AboutCardMob: React.FC<AboutCardProps> = ({ cardRef }) => {
    const content: string = AboutContent.content;
    const content1: string = AboutContent.content1;
    const content2: string = AboutContent.content2;
    return (
        <div
            className={
                styles.parent +
                ' ' +
                'lg:hidden flex justify-center items-center p-4 py-10 text-center AboutCardContent z-0'
            }
            ref={cardRef}
        >
            <div className={styles.topLeft + ' ' + styles.edge}></div>
            <div className={styles.topRight + ' ' + styles.edge}></div>
            <div className={styles.bottomLeft + ' ' + styles.edge}></div>
            <div className={styles.bottomRight + ' ' + styles.edge}></div>
            <div
                className={
                    styles.content +
                    ' ' +
                    'w-full h-full p-3 relative font-Nunito overflow-y-auto z-10'
                }
            >
                {content}
                <br />
                <br />
                {content1}
                <br />
                <br />
                {content2}
            </div>
        </div>
    );
};

export default AboutCardMob;
