'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../../app/events/carousel.module.css';
import { useRouter } from 'next/navigation';

interface ImageChangerProps {
    defaultImage: StaticImageData;
    hoverImage: StaticImageData;
    page: string;
}

const ImageChanger = (props: ImageChangerProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (
        <Image
            src={isHovered ? props.hoverImage : props.defaultImage}
            alt="Back to cluster"
            className={`${styles.Back} xl:w-52 lg:w-44 md:w-32 sm:w-24 w-16 absolute left-28 top-32 z-20 max-md:left-10 max-md:w-28`}
            onClick={() => {
                if (props.page === 'event') router.push('/clusters');
                else if (props.page === 'workshop') router.push('/workshops');
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
};

export default ImageChanger;
