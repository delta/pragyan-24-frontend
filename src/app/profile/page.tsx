'use client';
import { NavBar, Loader } from '@/components';
import styles from './profile.module.css';
import { useEffect, useState } from 'react';
import { ProfileApi } from '../../../fest-web-client/client/src';
import { apiConfig } from '@/utils/ApiConfig';

const Profile = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const [userCollege, setUserCollege] = useState<string | null>(null);
    const [userQr, setUserqr] = useState<string | null>(null);
    useEffect(() => {
        const profileApi = new ProfileApi(apiConfig);
        // eslint-disable-next-line
        profileApi.profileDetails().then((profileDetails: any) => {
            setUserName(profileDetails.message.user_fullname);
            setUserCollege(profileDetails.message.user_college);
        });
        // eslint-disable-next-line
        profileApi.profileQR().then((qr: any) => {
            setUserqr(qr.message);
        });
    }, []);
    return userName === null || userQr === null ? (
        <Loader />
    ) : (
        <>
            <div className="h-screen w-screen profilebg text-center max-sm:p-3 p-5 overflow-hidden pl-0 pr-0">
                <NavBar />
                <div className=" h-full w-full flex">
                    <div
                        className={`${styles.glasses} h-[90%] w-full flex justify-evenly items-center overflow-hidden relative p-5`}
                    >
                        <div className="h-[40%] w-[70%] flex items-center justify-center gap-[30%] sm:gap-[20%] lg:gap-[10%] relative">
                            <div
                                className={`flex flex-col h-[80%] w-[50%] sm:w-[35%] justify-center items-center`}
                            >
                                <div className={`font-ROG ${styles.deets}`}>
                                    <p className="text-[0.7rem] sm:text-lg text-[#B0B0B0]">
                                        WELCOME
                                        <span className="text-[1.2rem] sm:text-3xl ml-2 text-white">
                                            {userName && userName.split(' ')[0]}
                                        </span>
                                    </p>
                                </div>
                                <div className={`font-ROG overflow-x-auto ${styles.deets}`}>
                                    <p className="text-[0.7rem] sm:text-lg text-[#B0B0B0]">
                                        FROM
                                        <span className="ml-2 text-[1.2rem] sm:text-3xl text-white">
                                            {userCollege}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className={`h-[80%] min-w-24 w-[40%] relative`}>
                                <img
                                    src={userQr}
                                    alt="qr"
                                    className="h-[100%] w-[100%] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
