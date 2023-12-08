import { ClusterCarousel, NavBar } from '@/components';
import Back from '@/assets/images/Back.png';
import BackEnlarge from '@/assets/images/BackEnlarge.png';
import ImageChanger from '@/components/BackButton/back';
import styles from './eventcluster.module.css';

const events = () => {
    return (
        <div className={`min-h-screen w-full text-center lg:p-7 p-5 event + ${styles.event}`}>
            <NavBar />
            <ImageChanger defaultImage={Back} hoverImage={BackEnlarge} />
            <p
                className={`${styles.eventClusterName} font-ROG 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-12 transition-all`}
            >
                CLUSTER NAME
            </p>
            <div className="flex w-full h-[60vh] justify-center items-center">
                <ClusterCarousel />
            </div>
        </div>
    );
};

export default events;
