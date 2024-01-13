import React from 'react';
import Image from 'next/image';
import styles from './workshop.module.css';
import { CMS_URL } from '@/config/config';
import { useRouter } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WorkshopCards = (props: any) => {
    const router = useRouter();

    const navigateToWorkshopEvents = () => {
        router.push(`/workshops/${props.data.name}`);
    };

    return (
        <div className={`${styles.placeHolder}`} onClick={navigateToWorkshopEvents}>
            <Image
                src={CMS_URL + props.data.image.data.attributes.url}
                width={props.data.image.data.attributes.width}
                height={props.data.image.data.attributes.height}
                className={`${styles.workshop_image}`}
                alt="workshop_image"
            />
        </div>
    );
};

export default WorkshopCards;
