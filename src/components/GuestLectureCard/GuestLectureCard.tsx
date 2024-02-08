'use client';
import { CMS_URL } from '@/config/config';
import Tilt from 'react-parallax-tilt';

import styles from './styles.module.css';

const GuestLecturesCard: React.FC<GlCardProps> = (props: GlCardProps) => {
    return (
        <Tilt
            className={`${styles.tilt} w-72 h-[40vh] relative cursor-pointer`}
            perspective={600}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#ffffff"
            glarePosition="all"
            transitionSpeed={2000}
            style={{
                clipPath: 'polygon(56% 0, 100% 27%, 100% 100%, 0 100%, 0 0)',
            }}
        >
            <div
                className={`${styles.outer} bg-white w-72 h-[40vh] relative cursor-pointer`}
                style={{
                    clipPath: 'polygon(56% 0, 100% 27%, 100% 100%, 0 100%, 0 0)',
                    backgroundImage: `url(${CMS_URL + props.image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                onClick={() => {
                    console.log(props.cluster_name, props.name);
                    window.location.href = `/gl/${props.cluster_name}/${props.name}`;
                }}
            >
                <div className={`${styles.inner} h-[100%] w-[100%] `}></div>
                <p className="absolute bottom-3 min-h-10 font-ROG text-white text-lg text-center w-[100%]">
                    {props.name}
                </p>
            </div>
        </Tilt>
    );
};

export default GuestLecturesCard;
