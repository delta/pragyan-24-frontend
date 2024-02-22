/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import { useCallback, useState } from 'react';
import styles from './form.module.css';
import { FormInput } from './input';
import { UserApi } from '../../../fest-web-client/client/src';
import { apiConfig, authConfig } from '@/utils/ApiConfig';
import { useRouter } from 'next/navigation';
import { DAUTH_CLIENT_ID, DAUTH_REDIRECT_URI, RECAPTCHA_SITE_KEY } from '@/config/config';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import ReCAPTCHA from 'react-google-recaptcha';

interface DauthQueryParameters {
    [key: string]: string;
}

export const Login: React.FC<SignupFormProps> = ({ setForm }) => {
    const [loginForm, setLoginForm] = useState<LoginFormRequest>({
        userEmail: '',
        userPassword: '',
    });

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>('');
    const [recaptchaToken, setRecaptchaToken] = useState<string>('');

    const isMobile = false;

    const router = useRouter();

    const generateDauthAuthorizeUrl = () => {
        const dauthAuthorizeURL = new URL('https://auth.delta.nitt.edu/authorize');

        const dauthQueryParameters: DauthQueryParameters = {
            client_id: DAUTH_CLIENT_ID,
            redirect_uri: DAUTH_REDIRECT_URI,
            response_type: 'code',
            state: 'code',
            grant_type: 'authorization_code',
            scope: 'email+openid+profile+user',
            nonce: '',
        };

        const appendQueryParametersToURL = (url: URL, queryParams: DauthQueryParameters) => {
            Object.keys(queryParams).forEach((query: string) => {
                url.searchParams.append(query, queryParams[query]);
            });
        };

        appendQueryParametersToURL(dauthAuthorizeURL, dauthQueryParameters);

        return dauthAuthorizeURL;
    };

    const sendAuthCodeToServer = useCallback(async (code: string) => {
        try {
            const authApi = new UserApi(authConfig);
            authApi
                .dAuthUserLogin(code, '')
                //@ts-ignore
                .then(res => {
                    // @ts-ignore-next-line
                    localStorage.setItem('token', res.message);
                    toast.success('Logged In Successfully');
                    router.push('/home');
                })
                .catch(e => toast.error(e.message));
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleLogin = useCallback(() => {
        try {
            const authApi = new UserApi(authConfig);
            authApi
                .authUserLogin({
                    // @ts-ignore-next-line
                    user_email: loginForm.userEmail,
                    user_password: loginForm.userPassword,
                })
                .then(res => {
                    // @ts-ignore-next-line
                    localStorage.setItem('token', res.message);
                    toast.success('Logged In Successfully');
                    router.push('/home');
                })
                .catch(e => toast.error(e.message));
        } catch (err) {
            console.log(err);
        }
    }, [loginForm, router]);

    const BASE_URL = typeof window !== 'undefined' ? window.location.origin : null;

    const receiveMessage = useCallback(
        async (event: MessageEvent) => {
            if (event.origin !== BASE_URL) {
                return;
            }
            const { data } = event;
            if (data.source === 'dauth-login-callback') {
                if (data.code) {
                    sendAuthCodeToServer(data.code);
                }
            }
        },
        [BASE_URL, sendAuthCodeToServer],
    );

    const [windowObjectReference, setWindowObjectReference] = useState<Window | null>(null);
    const [previousUrl, setPreviousUrl] = useState<string | null>(null);

    const openSignInWindow = useCallback(
        (url: string, name: string) => {
            window.removeEventListener('message', receiveMessage);

            const strWindowFeatures = isMobile
                ? '_blank'
                : 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

            if (windowObjectReference === null || windowObjectReference.closed) {
                setWindowObjectReference(window.open(url, name, strWindowFeatures));
            } else if (previousUrl !== url) {
                setWindowObjectReference(window.open(url, name, strWindowFeatures));
                windowObjectReference?.focus();
            } else {
                windowObjectReference.focus();
            }

            window.addEventListener('message', receiveMessage, false);

            setPreviousUrl(url);
        },
        [previousUrl, receiveMessage, windowObjectReference, isMobile],
    );

    const generateDauthStringAndOpenUrl = useCallback(() => {
        const dauthURL = generateDauthAuthorizeUrl();
        openSignInWindow(dauthURL.toString(), 'dauthURL');
    }, [openSignInWindow]);

    const handleFormChange = (field: string, value: string) => {
        setLoginForm({ ...loginForm, [field]: value });
    };

    const handleFormSubmit = () => {
        if (!loginForm.userPassword) console.log('Please enter your password');
        else {
            handleLogin();
        }
    };

    const handleForgotPassword = async () => {
        const userApi = new UserApi(apiConfig);
        try {
            console.log(forgotPasswordEmail);
            await userApi
                .verifyEmail({
                    // @ts-ignore-next-line
                    user_email: forgotPasswordEmail,
                    user_recaptcha_code: recaptchaToken,
                })
                .then(res => {
                    // @ts-ignore-next-line
                    toast.success(res.message);
                })
                .catch(e => {
                    toast.error(e.message);
                });
        } catch (err) {
            console.log(err);
        }
    };

    const handleCaptchaSubmission = (token: string | null) => {
        if (token) {
            setRecaptchaToken(token);
        }
    };

    return (
        <>
            <div className={styles.formContainer}>
                <div className={styles.formFields}>
                    <FormInput
                        label="Email *"
                        name="email"
                        inputType="email"
                        onChange={e => {
                            handleFormChange('userEmail', e.target.value);
                        }}
                    />
                    <FormInput
                        label="Password *"
                        name="password"
                        inputType="password"
                        onChange={e => {
                            handleFormChange('userPassword', e.target.value);
                        }}
                    />
                </div>
                <div className={styles.formFieldExtras}>
                    <div className={styles.forgotPassword} onClick={() => setIsOpen(true)}>
                        <div className="font-ROG text-[#fffc47]">Forgot Password?</div>
                    </div>
                    <div>
                        <span className={styles.newHere}>New Here?</span>
                        <div
                            className={styles.authRedirect}
                            onClick={() => {
                                setForm('SIGN UP');
                            }}
                        >
                            Sign Up
                        </div>
                    </div>
                </div>
                <div className={styles.formFieldSubmitContainer}>
                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.submitButton}
                            onClick={() => generateDauthStringAndOpenUrl()}
                        >
                            Login with DAuth
                        </button>
                        <button className={styles.submitButton} onClick={handleFormSubmit}>
                            Login
                        </button>
                    </div>
                </div>
                <div className={styles.formFieldSubmitContainer}>{/* <DAuthLogin /> */}</div>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                ariaHideApp={false}
                className="md:w-[50%] md:h-[50%] bg-[#1a1a1a] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <div className={styles.resetFormContainer}>
                    <div className={styles.formFields}>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>Email*</div>
                            <input
                                className={styles.formInput}
                                type="email"
                                value={forgotPasswordEmail}
                                onChange={e => {
                                    console.log(e.target.value);
                                    setForgotPasswordEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className={' flex items-center justify-center'}>
                            {/* <Recaptcha handleFormFields={handleRecaptcha} /> */}
                            <ReCAPTCHA
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={handleCaptchaSubmission}
                                theme={'dark'}
                            />
                        </div>
                    </div>
                    <button className={styles.registerButton} onClick={handleForgotPassword}>
                        Reset Password
                    </button>
                </div>
            </Modal>
        </>
    );
};
