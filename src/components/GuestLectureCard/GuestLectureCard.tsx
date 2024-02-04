import styles from './styles.module.css';

const GuestLecturesCard = () => {
    return (
        <div
            className={` ${styles.card} ${styles.outer} bg-white w-[15vw] xl:h-[40vh] lg:h-[25vh] h-[15vh] relative`}
        >
            <div className={`${styles.inner} h-[100%] w-[100%]`}></div>
            <p className="absolute bottom-3 min-h-10 font-ROG text-white text-lg text-center w-[100%]">
                NAME
            </p>
        </div>
    );
};

export default GuestLecturesCard;
