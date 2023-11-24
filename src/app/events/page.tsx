import { NavBar } from '@/components';
import Back from '@/assets/images/Back.png';
import BackEnlarge from '@/assets/images/BackEnlarge.png';
import ImageChanger from '@/components/BackButton/back';
import Carousel from '@/components/Carousel/carousel';
import styles from './carousel.module.css';

const events = () => {
  return (
    <div
      className={`min-h-screen w-full text-center lg:p-7 p-5 event + ${styles.event}`}
    >
      <NavBar />
      <ImageChanger defaultImage={Back} hoverImage={BackEnlarge} />
      <p className="font-ROG 2xl:text-6xl xl:text-5xl lg:text-4.5xl sm:text-4xl text-3xl mt-12 transition-all">
        CLUSTER NAME
      </p>
      <div className={`mt-12 w-full ${styles.slide}`}>
        <Carousel />
      </div>
    </div>
  );
};

export default events;
