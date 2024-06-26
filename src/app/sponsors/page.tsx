'use client';
import { NavBar, SponsorButton, SponsorCard } from '@/components';
import styles from './sponsors.module.css';
import Image from 'next/image';

import astronaut from '../../assets/images/astronaut.svg';
import { getMediaSponsors, getSponsors } from '@/utils/events_cms';
import { useEffect, useState } from 'react';

export default function Sponsors() {
    const [sponsorsList, setSponsorsList] = useState<SponsorCardProps[]>([]);
    const [mediaSponsorsList, setMediaSponsorsList] = useState<SponsorCardProps[]>([]);
    useEffect(() => {
        const getSponsorsFromCMS = async () => {
            setSponsorsList(await getSponsors());
            setMediaSponsorsList(await getMediaSponsors());
        };
        getSponsorsFromCMS();
    }, []);

    return (
        <div className={styles.page}>
            <NavBar />
            <div className={styles.parent}>
                <div className={styles.background}>
                    <h1 className={styles.backgroundText}>SPONSORS</h1>
                </div>
                <div className={styles.foreground}>
                    {sponsorsList.length > 0 || mediaSponsorsList.length > 0 ? (
                        <div className="flex flex-col">
                            <div className={styles.sponsorText}>SPONSORS</div>
                            <div className={styles.sponsorButtonUp}>
                                <SponsorButton />
                            </div>
                            <div className={styles.parentList}>
                                <div className={styles.sponsorList}>
                                    {sponsorsList.map((e: SponsorCardProps) => (
                                        <SponsorCard
                                            name={e.name}
                                            logo={e.logo}
                                            title={e.title}
                                            key={e.name}
                                            link={e.link}
                                        />
                                    ))}
                                    {mediaSponsorsList.map((e: SponsorCardProps) => (
                                        <SponsorCard
                                            name={e.name}
                                            logo={e.logo}
                                            key={e.name}
                                            title={e.title}
                                            link={e.link}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className={styles.sponsor}>SPONSORS</h1>
                            {sponsorsList.length <= 0 && (
                                <div className={styles.sponsorParent}>
                                    <div className={`${styles.sponsorButton} ${styles.empty}`}>
                                        <SponsorButton />
                                    </div>
                                    <Image
                                        src={astronaut}
                                        alt="astronaut"
                                        className={styles.astro}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
