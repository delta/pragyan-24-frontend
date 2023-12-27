import styles from './styles.module.css';

import topLeftBorder from '../../assets/images/top-left-border.svg';
import topRightBorder from '../../assets/images/top-right-border.svg';
import bottomBorder from '../../assets/images/bottom-border.svg';
import Image from 'next/image';

const SponsorCard = ({ name, logo }: SponsorCardProps) => {
    return (
        <>
            <div className={styles.parent}>
                <div className={styles.borderOverlay}>
                    <div className={`flex w-full justify-between ${styles.topBorder}`}>
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
                        {logo != '' && (
                            <Image
                                src={logo}
                                alt={name}
                                width={400}
                                height={400}
                                className={styles.logo}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default SponsorCard;
