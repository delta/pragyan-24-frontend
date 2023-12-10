'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Login } from './login';
import { SignUp } from './signup';
import Arrow from '../../assets/images/arrow_back_auth.svg';
import PragyanLogo from '../../assets/images/main-logo.png';
import styles from './AuthLayout.module.css';
// import { userContext } from "../../contexts/UserContext";

const AuthLayout: React.FC<AuthLayoutProps> = ({ formType }) => {
    const [form, setForm] = React.useState<FormType>(formType);
    return (
        <div className={styles.authWrapper}>
            <div className={styles.authContainer}>
                <div className={styles.authHeader}>
                    <Link className={styles.homeNavLink} href="/home">
                        <Image src={Arrow} alt="Arrow Left" width={20} height={20} />
                        <span className={styles.homeNavLinkText}>Home</span>
                    </Link>
                    <div className={styles.pragyanLogoSection}>
                        <Image
                            className={styles.pragyanLogo}
                            src={PragyanLogo}
                            alt="Pragyan Logo"
                            width={250}
                            height={100}
                        />
                    </div>
                </div>
                <div className={styles.authBody}>
                    <div className={styles.formWrapper}>
                        <div className={styles.formHeaderTextContainer}>
                            <div className={styles.formHeaderText}>
                                SYSTEM{' '}
                                <span className={styles.formHeaderTextHighLight}>
                                    {form === 'LOGIN' ? 'LOGIN' : 'SIGN UP'}
                                </span>
                            </div>
                        </div>
                        <div className={styles.formBodyContainer}>
                            <div className={styles.formArea}>
                                {form === 'LOGIN' ? (
                                    <Login setForm={setForm}></Login>
                                ) : (
                                    <SignUp setForm={setForm}></SignUp>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
