import { NavBar, SponsorButton, SponsorCard } from '@/components';
import styles from './sponsors.module.css';
import Image from 'next/image';

import astronaut from '../../assets/images/astronaut.svg';

export default function Sponsors() {
    const sponsorsList: SponsorCardProps[] = Array(30).fill({ logo: '', name: 'hiw' });

    // backend logic
    //  sponsorsList =   await(await fetch("backend url",{next:{tags:['collection']}})).json();
    return (
        <div className="p-5">
            <NavBar />
            <div className={styles.parent}>
                <div className={styles.background}>
                    <h1 className={styles.backgroundText}>SPONSORS</h1>
                </div>
                <div className={styles.foreground}>
                    {sponsorsList.length > 0 ? (
                        <>
                            <div className={styles.sponsorButtonUp}>
                                <SponsorButton />
                            </div>
                            <div className={styles.sponsorText}>SPONSORS</div>
                            <div className={styles.sponsorList}>
                                {sponsorsList.map((e: SponsorCardProps) => (
                                    <SponsorCard name={e.name} logo={e.logo} key={e.toString()} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className={styles.sponsor}>SPONSORS</h1>
                            {sponsorsList.length <= 0 && (
                                <div className={styles.sponsorParent}>
                                    <div className={styles.sponsorButton}>
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
