/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import Modal from 'react-modal';

import styles from './resetpass.module.css';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { UserApi } from '../../../fest-web-client/client/src';
import { apiConfig } from '@/utils/ApiConfig';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SITE_KEY } from '@/config/config';

const ForgotPasswordPage: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState<string>('');

    const router = useRouter();

    const searchParams = useSearchParams();

    const handleResetPassword = () => {
        if (recaptchaToken == '') {
            toast.error('Please verify the captcha');
            return;
        }

        if (!password || password.length < 8) {
            toast.error('Password must be atleast 8 characters long');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        const code = searchParams.get('code');
        const email = searchParams.get('email');

        const userApi = new UserApi(apiConfig);

        if (code && email) {
            userApi
                .changePassword({
                    // @ts-ignore-next-line
                    user_code: code,
                    user_email: email,
                    user_password: password,
                    user_recaptcha_code: recaptchaToken,
                })
                .then(res => {
                    // @ts-ignore-next-line
                    toast.success(res.message);
                    router.push('/login');
                })
                .catch(err => {
                    toast.error(err.message);
                });
        } else {
            toast.error('Invalid code or email');
        }
    };

    const handleCaptchaSubmission = (token: string | null) => {
        if (token) {
            setRecaptchaToken(token);
        }
    };

    return (
        <>
            <div className={styles.forgotPasswordPage}>
                <Modal
                    isOpen={true}
                    ariaHideApp={false}
                    className="w-[50%] h-[50%] bg-[#1d1c1c] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <div className={styles.resetFormContainer}>
                        <div className={styles.formFields}>
                            <div className={styles.formField}>
                                <div className={styles.formLabel}>New Password*</div>
                                <input
                                    className={styles.formInput}
                                    type="password"
                                    onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.formLabel}>Confirm Password*</div>
                                <input
                                    className={styles.formInput}
                                    type="password"
                                    onChange={e => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                styles.recaptchaContainer + ' flex items-center justify-center'
                            }
                        >
                            <ReCAPTCHA
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={handleCaptchaSubmission}
                                theme={'dark'}
                            />
                        </div>
                        <button className={styles.registerButton} onClick={handleResetPassword}>
                            Reset Password
                        </button>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default ForgotPasswordPage;
