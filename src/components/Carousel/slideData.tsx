'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EventImage from '../../assets/images/randomEventPic.jpg';
import MapDrop from '../../assets/images/MapDrop.png';
import styles from './caro.module.css';

const SlideData = () => {
    const [index, setIndex] = useState(1);
    const [isActive, setIsActive] = useState(1);
    const [data, setData] = useState(
        <p>
            Duis id est sint sint sunt enim ipsum officia voluptate incididunt laboris. Dolor
            laboris pariatur laborum enim ea est. Et laborum elit culpa mollit. Ex reprehenderit
            adipisicing esse aliquip non.
        </p>,
    );

    useEffect(() => {
        switch (index) {
            case 1:
                setData(
                    <p>
                        This event is designed for those who are ardent puzzle and quiz enthusiasts.
                        The event will evaluate the participant’s wit by testing them on a plethora
                        of genres and domains as they attempt to maximise their scores.
                        <br />
                        <br /> # The event will have only one round, with different levels based on
                        various topics (for example, What’s the good word, Greek Mythology,
                        Football, etc.). <br /> # The levels are divided into three sections. <br />{' '}
                        # Section-1 normal questions(Q&A), Section-2 riddles Section-3 labyrinth
                        Each section has 8 levels, consisting of three questions of the same genre.
                    </p>,
                );
                setIsActive(1);
                break;
            case 2:
                setData(
                    <p>
                        M-Decoder is a one-of-a-kind mathematical event conducted by Pragyan in
                        collaboration with Spider and Maximus Clubs of NIT Trichy! Do you find
                        yourself working out everyday problems in your head? Does the sound of a
                        fascinating new conundrum get you excited? Imagine yourself in a room filled
                        with puzzles. The only way to get out is by solving all of them in the most
                        efficient way possible. Featuring a range of intriguing puzzles, paramount
                        problems, and mind-blowing riddles, M-Decoder surely seeks to bring out the
                        Edward Nygma in you.
                    </p>,
                );
                setIsActive(2);
                break;
            case 3:
                setData(
                    <p>
                        Pariatur elit ex enim dolor. Elit veniam mollit aliquip elit. Aliqua enim
                        veniam exercitation consectetur eu Lorem sint cillum occaecat excepteur enim
                        aute. Magna enim occaecat ex culpa proident sunt pariatur tempor dolor qui
                        non sunt Lorem. Officia sit tempor enim nisi reprehenderit incididunt
                        cupidatat id.Eiusmod tempor voluptate ad mollit. Consectetur velit ad veniam
                        irure minim proident ullamco enim labore tempor laboris elit voluptate. Quis
                        ea reprehenderit laborum ea tempor ea quis consequat. Commodo cillum labore
                        amet adipisicing excepteur consectetur cupidatat consectetur enim tempor
                        adipisicing cillum. Ut minim nisi consectetur culpa est. In sunt anim
                        adipisicing duis tempor enim velit reprehenderit minim aliquip. Duis
                        occaecat minim tempor sunt qui.Ut ea do ut fugiat. Commodo consectetur
                        officia laborum enim. Id nulla incididunt Lorem Lorem officia ea. Veniam
                        velit ex exercitation ullamco dolor proident eiusmod dolore sint pariatur
                        excepteur culpa est. Ex incididunt exercitation sunt labore laborum ipsum
                        quis nostrud minim sit. Sint adipisicing dolor et consectetur est laborum
                        amet consectetur ipsum consectetur anim irure consectetur velit. Tempor ut
                        velit dolore velit sint velit velit cupidatat nostrud. Enim fugiat cupidatat
                        aute nulla eiusmod veniam. Nisi mollit tempor laborum do enim id incididunt
                        exercitation. Quis consectetur aute excepteur dolore velit
                        consectetur.Aliquip adipisicing ad sint proident in pariatur ad fugiat enim
                        proident. Ullamco aute aliqua adipisicing in voluptate minim labore
                        consectetur non eu minim proident qui. Eiusmod amet in non velit. Dolor
                        velit nisi anim do in est id do.Excepteur qui eu irure ex Lorem ex id
                        exercitation sunt adipisicing reprehenderit aliquip nisi consequat.
                        Excepteur enim eiusmod mollit irure nostrud ullamco magna sunt cillum id.
                        Voluptate commodo enim veniam amet cupidatat elit veniam quis nisi sit
                        consequat tempor laboris. Sit Lorem consectetur mollit Lorem mollit aliqua
                        cupidatat aliqua elit tempor. Commodo dolore proident amet laborum sit nulla
                        ipsum do Lorem commodo proident sint nisi. Excepteur ad adipisicing nisi
                        aute qui consectetur id dolor consectetur ipsum commodo ipsum laborum.Dolor
                        sit aliqua magna duis Lorem irure duis consequat ex esse laboris ullamco
                        magna ea. Labore incididunt magna eu labore id proident proident dolore.
                        Reprehenderit sint do minim irure pariatur minim dolor ad excepteur dolore
                        sunt et qui. Consectetur exercitation officia cupidatat est.
                    </p>,
                );
                setIsActive(3);
                break;
            case 4:
                setData(
                    <p>
                        Minim ullamco et mollit consequat deserunt enim commodo proident. Officia
                        mollit mollit ullamco nostrud magna enim reprehenderit aliquip. Do
                        reprehenderit fugiat exercitation exercitation officia est in irure est
                        fugiat pariatur proident ut.
                    </p>,
                );
                setIsActive(4);
                break;
        }
    }, [index]);

    return (
        <div className={`${styles.slideElem} flex justify-center align-middle`}>
            <div
                className={`${styles.leftSC} flex justify-center align-middle max-lg:hidden`}
            ></div>
            <div className={`flex justify-center flex-col w-full  h-auto ${styles.eventSlide}`}>
                <div
                    className={`flex justify-center flex-col items-center w-1/3 h-full p-7 ${styles.slideIntro1}`}
                >
                    <div className="font-ROG 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xs max-lg:mt-4 text-xs h-1/6 transition-all">
                        EVENT NAME
                    </div>
                    <Image
                        src={EventImage}
                        alt="image about event"
                        className={`h-5/6 w-full rounded-xl ${styles.eventImg}`}
                    />
                </div>
                <div className={`flex justify-between w-full ${styles.eventI}`}>
                    <div className="flex justify-center items-center w-1/2 h-full">
                        <div className="flex justify-begin items-center mt-auto mb-auto font-Orbitron 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-xs w-full">
                            11/09/2001
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-auto mb-auto font-Orbitron 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-xs w-1/2">
                        <span>
                            <Image src={MapDrop} alt="Location" width={13} height={13} />
                        </span>
                        <span className="ml-2"> ORION </span>
                    </div>
                </div>
                <div className={`${styles.mainSlide} flex justify-center flex-col align-middle`}>
                    <div className={`flex justify-center w-full h-5/6 ${styles.slideInfo}`}>
                        <div
                            className={`flex justify-center items-center flex-col w-1/3 h-full p-7 max-lg:hidden ${styles.slideIntro}`}
                        >
                            <div className="font-ROG 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs h-1/6 transition-all">
                                EVENT NAME
                            </div>
                            <Image
                                src={EventImage}
                                alt="image about event"
                                className="h-5/6 w-full rounded-xl"
                            />
                        </div>
                        <div
                            className={`flex justify-center flex-col w-full h-full p-4 ${styles.eventDes}`}
                        >
                            <div className="flex justify-around items-center w-full h-1/5">
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 1 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(1)}
                                >
                                    Description
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 2 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(2)}
                                >
                                    Judging Criteria
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 3 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(3)}
                                >
                                    Rules
                                </div>
                                <div
                                    className={`font-Orbitron 2xl:text-lg xl:text-base lg:text-sm md-text-xs sm-text-xs  text-xs cursor-pointer ${
                                        styles.tabs
                                    } ${isActive == 4 ? `${styles.active}` : ''}`}
                                    onClick={() => setIndex(4)}
                                >
                                    Contact
                                </div>
                            </div>
                            <div
                                className={`w-full h-4/5 font-Nunito 2xl:text-base xl:text-sm lg:text-sm sm:text-xs text-sm p-3 ${styles.content}`}
                            >
                                {data}
                            </div>
                        </div>
                    </div>
                    <div className={`flex justify-center h-1/6 m-0 p-0 ${styles.slideEnd}`}>
                        <div className="flex justify-center align-middle flex-col w-1/4 h-full max-lg:hidden">
                            <div className="flex justify-center align-middle mt-auto mb-auto font-Orbitron 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                                <span>11/09/2001</span>
                            </div>
                            <div className="flex justify-center align-middle mt-auto mb-auto font-Orbitron 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm w-full">
                                <span>
                                    <Image src={MapDrop} alt="Location" width={13} height={13} />
                                </span>
                                <span className="ml-2"> ORION </span>
                            </div>
                        </div>
                        <div
                            className={`flex justify-center w-2/3 h-full p-0 ${styles.registerBlock}`}
                        >
                            <div className={`flex justify-center ${styles.registerButton}`}></div>
                        </div>
                        <div className="flex justify-center align-bottom w-1/4 h-full max-lg:hidden">
                            <div className="font-OrbitronG 2xl:text-base xl:text-sm lg:text-sm sm:text-sm text-sm mt-auto mb-auto">
                                PRIZE MONEY : $100,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.rightSC} flex justify-center align-middle max-lg:hidden`}
            ></div>
        </div>
    );
};

export default SlideData;
