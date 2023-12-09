/* eslint-disable */
'use client';

import React from 'react';
// import Modal from "react-modal";
import styles from './form.module.css';
// import DAuthLogin from '@/utils/dauthlogin';
// import { Recaptcha } from "../../ReCaptcha";
// import DAuthLogin from "../../DauthLogin/DauthLogin";
import { FormInput } from './input';
import Link from 'next/link';
import { useCallback, useState, useContext } from 'react';
import { UserApi } from '../../../fest-web-client/client/src';
import { apiConfig, authConfig } from '@/utils/ApiConfig';
import { useRouter } from 'next/navigation';
import { userContext } from '@/contexts/UserContext';
import { DAUTH_CLIENT_ID, DAUTH_REDIRECT_URI, API_URL } from '@/config/config';

enum AuthStatusEnum {
    PRE,
    START,
    WAITING,
    ACCEPTED,
    REJECTED,
    AUTH,
    ERROR,
}

export const Login: React.FC<SignupFormProps> = ({ setForm }) => {
    const [loginForm, setLoginForm] = React.useState<LoginFormRequest>({
        userEmail: '',
        userPassword: '',
    });

    const isMobile = false;

    const userApi = new UserApi(authConfig);
    const [authStatus, setAuthStatus] = useState(AuthStatusEnum.PRE);
    const { setuserID, setIsLoggedIn } = useContext(userContext);

    const router = useRouter();

    const generateDauthAuthorizeUrl = () => {
        const dauthAuthorizeURL = new URL('https://auth.delta.nitt.edu/authorize');

        const dauthQueryParameters = {
            client_id: DAUTH_CLIENT_ID,
            redirect_uri: DAUTH_REDIRECT_URI,
            response_type: 'code',
            state: 'code',
            grant_type: 'authorization_code',
            scope: 'email+openid+profile+user',
            nonce: '',
        };

        const appendQueryParametersToURL = (url: URL, queryParams: Object) => {
            Object.keys(queryParams).forEach(query => {
                url.searchParams.append(query, (queryParams as any)[query]);
            });
        };

        appendQueryParametersToURL(dauthAuthorizeURL, dauthQueryParameters);

        return dauthAuthorizeURL;
    };

    const sendAuthCodeToServer = useCallback(async (code: string) => {
        try {
            setAuthStatus(AuthStatusEnum.WAITING);
            //backend url
            const authApi = new UserApi(authConfig);
            authApi
                .dAuthUserLogin(code)
                .then(res => console.log(res))
                .catch(e => console.log(e));
        } catch (err) {
            console.log(err);
            setAuthStatus(AuthStatusEnum.ERROR);
        }
    }, []);

    const handleLogin = useCallback(() => {
        try {
            setAuthStatus(AuthStatusEnum.WAITING);
            //backend url
            console.log(loginForm);

            const authApi = new UserApi(authConfig);
            authApi
                .authUserLogin({
                    user_email: loginForm.userEmail,
                    user_password: loginForm.userPassword,
                })
                .then(res => {
                    console.log('successfully logged In');
                })
                .catch(e => console.log(e));
        } catch (err) {
            console.log(err);
            setAuthStatus(AuthStatusEnum.ERROR);
        }
    }, [loginForm]);

    const BASE_URL = typeof window !== 'undefined' ? window.location.origin : null;

    const receiveMessage = useCallback(
        async (event: MessageEvent) => {
            if (event.origin !== BASE_URL) {
                return;
            }
            const { data } = event;
            if (data.source === 'dauth-login-callback') {
                if (!data.code) {
                    setAuthStatus(AuthStatusEnum.REJECTED);
                } else {
                    setAuthStatus(AuthStatusEnum.ACCEPTED);
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
            setAuthStatus(AuthStatusEnum.WAITING);

            window.addEventListener('message', receiveMessage, false);

            setPreviousUrl(url);
        },
        [previousUrl, receiveMessage, windowObjectReference],
    );

    const generateDauthStringAndOpenUrl = useCallback(() => {
        const dauthURL = generateDauthAuthorizeUrl();
        openSignInWindow(dauthURL.toString(), 'dauthURL');
        setAuthStatus(AuthStatusEnum.START);
    }, [openSignInWindow]);

    // const [modalIsOpen, setIsOpen] = React.useState(false);
    // const [forgotPasswordEmail, setForgotPasswordEmail] = React.useState("");
    // const [forgotPasswordRecaptcha, setForgotPasswordRecaptcha] =
    // 	React.useState("");

    // const handleRecaptcha = (_: string, value: string) => {
    // 	setForgotPasswordRecaptcha(value);
    // };

    //const router = useRouter();

    const handleFormChange = (field: string, value: string) => {
        setLoginForm({ ...loginForm, [field]: value });
    };

    // const handleForgotPassword = () => {
    // 	if (!forgotPasswordRecaptcha) {
    // 		// TODO: customErrorToast("Please verify that you are not a robot");
    // 		return;
    // 	}
    // 	fetch(`${BACKEND_URL}/auth/sendPasswordResetLink`, {
    // 		method: "POST",
    // 		headers: {
    // 			"Content-Type": "application/json",
    // 		},
    // 		body: JSON.stringify({
    // 			email: forgotPasswordEmail,
    // 			recaptcha_code: forgotPasswordRecaptcha,
    // 		}),
    // 	})
    // 		.then((res) => res.json())
    // 		.then((data) => {
    // 			if (data.status_code === 200) {
    // 				customSuccessToast(
    // 					"Password reset link sent to your email"
    // 				);
    // 				setForgotPasswordEmail("");
    // 			} else customErrorToast(data.message);
    // 			setIsOpen(false);
    // 		});
    // };

    const handleFormSubmit = () => {
        console.log(loginForm.userPassword);
        if (!loginForm.userPassword) console.log('Please enter your password');
        else {
            handleLogin();
        }
    };

    return (
        <>
            <div className={styles.formContainer}>
                <div className={styles.formFields}>
                    {/* <div className={styles.formField}>
						<div className={styles.formLabel}>EMAIL *</div>
						<input
							className={styles.formInput}
							onChange={(e) => {
								handleFormChange("user_email", e.target.value);
							}}
						/>
					</div> */}
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
                {loginForm.userEmail}
                {loginForm.userPassword}
                <div className={styles.formFieldExtras}>
                    <div
                        className={styles.forgotPassword}
                        // onClick={() => setIsOpen(true)}
                    >
                        <div>Forgot Password?</div>
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
            {/* <Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setIsOpen(false)}
				ariaHideApp={false}
			>
				<div className={styles.resetFormContainer}>
					<div className={styles.formFields}>
						<div className={styles.formField}>
							<div className={styles.formLabel}>Email*</div>
							<input
								className={styles.formInput}
								type="email"
								value={forgotPasswordEmail}
								onChange={(e) => {
									setForgotPasswordEmail(e.target.value);
								}}
							/>
						</div>
						<div className={styles.formField}>
							<Recaptcha handleFormFields={handleRecaptcha} />
						</div>
					</div>
					<button
						className={styles.registerButton}
						onClick={handleForgotPassword}
					>
						Reset Password
					</button>
				</div>
			</Modal> */}
        </>
    );
};
