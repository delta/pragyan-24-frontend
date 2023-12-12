'use client';
import { NavBar } from '@/components';
import Back from '@/assets/images/Back.png';
import BackEnlarge from '@/assets/images/BackEnlarge.png';
import ImageChanger from '@/components/BackButton/back';
import Carousel from '@/components/Carousel/carousel';
import styles from '../../../carousel.module.css';

const events = ({ params }: { params: { clusterId: number; name: string; eventId: number } }) => {
    return (
        <div className={`min-h-screen w-full text-center lg:p-7 p-5 event + ${styles.event}`}>
            <NavBar />
            <ImageChanger defaultImage={Back} hoverImage={BackEnlarge} />
            <p
                className={`${styles.eventClusterName} font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 transition-all`}
            >
                {params.name.replaceAll('%20', ' ')}
            </p>
            <div className={`mt-12 w-full ${styles.slide}`}>
                <Carousel id={params.clusterId} eventId={params.eventId} />
            </div>
        </div>
    );
};

export default events;
