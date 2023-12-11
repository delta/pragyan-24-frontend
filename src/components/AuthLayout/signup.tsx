/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react';
import styles from './form.module.css';
import Image from 'next/image';
import ArrowSolid from '@/assets/images/Keyboard arrow right.svg';
import { FormInput, FormSelect } from './input';
import { authConfig } from '@/utils/ApiConfig';
import { UserApi } from '../../../fest-web-client/client/src';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SITE_KEY, API_URL } from '@/config/config';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const SignUp: React.FC<SignupFormProps> = ({ setForm }) => {
    const userApi = new UserApi(authConfig);
    const [formPage, setFormPage] = React.useState<number>(1);
    const [colleges, setColleges] = React.useState<College[]>([]);
    const [confirmPassword, setConfirmPassword] = React.useState<string>('');
    const router = useRouter();

    const getColleges = async () => {
        const res = await axios.get(`${API_URL}/api/colleges`);
        setColleges(res.data.message);
    };
    useEffect(() => {
        getColleges();
    }, []);

    const [registerForm, setRegisterForm] = React.useState<RegisterFormType>({
        userName: '',
        userEmail: '',
        userFullName: '',
        userPassword: '',
        userSex: 'MALE',
        userNationality: '',
        userAddress: '',
        userPincode: '',
        userState: '',
        userPhno: '',
        userDegree: 'BTech',
        userYear: 2026,
        userCollege: 'Other',
        userOtherCollege: '',
        userCity: '',
        userReferralCode: '',
        userSponsor: 'no',
        recaptcha_code: 'wrong-code',
        is_app: 0,
        userVoucherName: '',
    });

    const handleFormFields = (field: string, value: string | null): void => {
        setRegisterForm(form => ({ ...form, [field]: value }));
    };
    const handleCaptchaSubmission = (token: string | null) => {
        handleFormFields('recaptcha_code', token);
    };

    const handleFormSubmit = (): void => {
        userApi
            .authUserRegister({
                // @ts-ignore-next-line
                user_name: registerForm.userName,
                user_othercollege: registerForm.userCollege,
                user_referral_code: registerForm.userReferralCode,
                user_password: registerForm.userPassword,
                user_email: registerForm.userEmail,
                user_fullname: registerForm.userFullName,
                user_sex: registerForm.userSex,
                user_nationality: registerForm.userNationality,
                user_address: registerForm.userAddress,
                user_pincode: registerForm.userPincode,
                user_state: registerForm.userState,
                user_city: registerForm.userCity,
                user_phone: registerForm.userPhno,
                user_degree: registerForm.userDegree,
                user_year: registerForm.userYear,
                user_college: registerForm.userCollege,
                user_recaptcha_code: registerForm.recaptcha_code,
                user_voucher_code: registerForm.userVoucherName,
            })
            .then(res => console.log(res))
            .catch(e => {
                localStorage.setItem('token', e.message);
                toast.success('Successfully created an account and logged In');
                router.push('/home');
            });
    };

    const validateFormPage = (page: number): void => {
        switch (page) {
            case 1:
                if (
                    !registerForm.userEmail ||
                    !registerForm.userEmail.match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    )
                ) {
                    toast.error('Please enter a valid email address');
                    break;
                } else if (!registerForm.userPassword || registerForm.userPassword.length < 8) {
                    toast.error('Password must be atleast 8 characters long');
                    break;
                } else if (registerForm.userPassword !== confirmPassword) {
                    toast.error('Passwords do not match');
                    break;
                }
                setFormPage(2);
                break;
            case 2:
                if (!registerForm.userEmail) {
                    toast.error('Please enter a username');
                    break;
                } else if (!registerForm.userFullName) {
                    toast.error('Please enter your full name');
                    break;
                } else if (
                    !registerForm.userPhno ||
                    !/^\+?(0|[1-9]\d*)$/.test(registerForm.userPhno)
                ) {
                    toast.error('Please enter a valid phone number');
                    break;
                }
                setFormPage(3);
                break;
            case 3:
                if (registerForm.userCollege === 'Other' && !registerForm.userOtherCollege) {
                    toast.error('Please enter your college name');
                    break;
                }
                if (registerForm.userCollege !== 'Other') {
                    setRegisterForm(form => ({
                        ...form,
                        userOtherCollege: '',
                    }));
                }
                setFormPage(4);
                break;
            case 4:
                if (!registerForm.userNationality) {
                    toast.error('Please enter your country');
                    break;
                }
                if (!registerForm.userYear) {
                    toast.error('Please enter your graduation year');
                }
                setFormPage(5);
                break;
            case 5:
                if (!registerForm.userState) {
                    toast.error('Please enter your state');
                    break;
                } else if (!registerForm.userCity) {
                    toast.error('Please enter your city');
                    break;
                } else if (!registerForm.userAddress) {
                    toast.error('Please enter your address');
                    break;
                }
                setFormPage(6);
                break;
            case 6:
                if (
                    !registerForm.userPincode ||
                    !/^\+?(0|[1-9]\d*)$/.test(registerForm.userPincode)
                ) {
                    toast.error('Please enter a valid pincode');
                    break;
                }
                setFormPage(7);
                break;
            default:
                break;
        }
    };

    // TODO:(P4) Change all form input to FormInput component
    return (
        <div className={` ${styles.formContainer} ${styles.registerFormContainer}`}>
            <div className={styles.formFields}>
                {formPage === 1 && (
                    <>
                        <FormInput
                            label="EMAIL *"
                            name="email"
                            inputType="email"
                            initialValue={registerForm.userEmail}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userEmail', e.target.value);
                            }}
                        />
                        <FormInput
                            label="PASSWORD *"
                            name="password"
                            inputType="password"
                            initialValue={registerForm.userPassword}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userPassword', e.target.value);
                            }}
                        />
                        <FormInput
                            label="CONFIRM PASSWORD *"
                            name="confirm_password"
                            inputType="password"
                            initialValue={confirmPassword}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 2 && (
                    <>
                        <FormInput
                            label="USERNAME *"
                            name="email"
                            inputType="text"
                            initialValue={registerForm.userName}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userName', e.target.value);
                            }}
                        />
                        <FormInput
                            label="FULL NAME *"
                            name="email"
                            inputType="text"
                            initialValue={registerForm.userFullName}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userFullName', e.target.value);
                            }}
                        />
                        <FormInput
                            label="PHONE NUMBER *"
                            name="text"
                            inputType="email"
                            initialValue={registerForm.userPhno}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userPhno', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 3 && (
                    <>
                        <FormSelect
                            label="GENDER *"
                            initialValue={registerForm.userSex}
                            options={['MALE', 'FEMALE', 'OTHER']}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userSex', e.target.value);
                            }}
                        />
                        <FormSelect
                            label="COLLEGE *"
                            initialValue={registerForm.userCollege}
                            inputType="email"
                            options={
                                colleges
                                    ? colleges.map(college => college.college_name)
                                    : ['NIT Trichy']
                            }
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userCollege', e.target.value);
                            }}
                        />
                        <FormInput
                            label="COLLEGE NAME (if not in list)"
                            name="college"
                            initialValue={registerForm.userOtherCollege}
                            disabled={registerForm.userCollege !== 'Other'}
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userOtherCollege', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 4 && (
                    <>
                        <FormSelect
                            label="DEGREE *"
                            wrapperClassName={styles.signupFields}
                            options={[
                                'BTech',
                                'MTech',
                                'BE',
                                'ME',
                                'BCA',
                                'MCA',
                                'BBA',
                                'MBA',
                                'BSc',
                                'MSc',
                                'BA',
                                'MA',
                                'MBBS',
                                'MD',
                                'MS',
                                'Other',
                            ]}
                            onChange={e => {
                                handleFormFields('userDegree', e.target.value);
                            }}
                        />
                        <FormInput
                            label="YEAR OF GRADUATION *"
                            wrapperClassName={styles.signupFields}
                            initialValue={registerForm.userYear}
                            onChange={e => {
                                handleFormFields('userYear', e.target.value);
                            }}
                        />
                        <FormInput
                            label="COUNTRY *"
                            inputType="text"
                            initialValue={registerForm.userNationality}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userNationality', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 5 && (
                    <>
                        <FormInput
                            label="STATE *"
                            name="state"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            initialValue={registerForm.userState}
                            onChange={e => {
                                handleFormFields('userState', e.target.value);
                            }}
                        />
                        <FormInput
                            label="CITY *"
                            name="city"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            initialValue={registerForm.userCity}
                            onChange={e => {
                                handleFormFields('userCity', e.target.value);
                            }}
                        />
                        <FormInput
                            label="ADDRESS *"
                            name="address"
                            inputType="text"
                            initialValue={registerForm.userAddress}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userAddress', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 6 && (
                    <>
                        <FormInput
                            label="PINCODE *"
                            name="pincode"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            initialValue={registerForm.userPincode}
                            onChange={e => {
                                handleFormFields('userPincode', e.target.value);
                            }}
                        />
                        <FormInput
                            label="REFERRAL CODE"
                            name="referralcode"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            initialValue={registerForm.userReferralCode}
                            onChange={e => {
                                handleFormFields('userReferralCode', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 7 && (
                    <>
                        <FormInput
                            label="VOUCHER NAME*"
                            name="voucherName"
                            inputType="text"
                            initialValue={registerForm.userVoucherName}
                            onChange={e => {
                                handleFormFields('userVoucherName', e.target.value);
                            }}
                        />
                        <div className={styles.captcha}>
                            <ReCAPTCHA
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={handleCaptchaSubmission}
                                theme={'dark'}
                            />
                        </div>
                        <div className={styles.extraSpace}></div>
                    </>
                )}
            </div>
            <div className={styles.formFieldExtras}></div>
            <div className={styles.formFieldSubmitContainer}>
                <div className={styles.authRedirectContainer}>
                    {formPage === 1 && (
                        <>
                            <span className={styles.newHere}>Already have an account?</span>
                            <span className={styles.authRedirect} onClick={() => setForm('LOGIN')}>
                                Sign In
                            </span>
                        </>
                    )}
                    {formPage === 7 && (
                        <div className={styles.buttonContainer}>
                            <button
                                className={`${styles.signUpButton} ${styles.submitButton}`}
                                onClick={handleFormSubmit}
                            >
                                SIGN UP
                            </button>
                        </div>
                    )}
                </div>
                <div className={styles.formPageNav}>
                    {formPage > 1 && (
                        <Image
                            className={`${styles.formPageNavArrow} ${styles.formPageNavArrowLeft}`}
                            src={ArrowSolid}
                            alt="Navigation Arrow Right"
                            width={20}
                            height={20}
                            onClick={() => setFormPage(formPage - 1)}
                        />
                    )}
                    {formPage < 7 && (
                        <Image
                            className={styles.formPageNavArrow}
                            src={ArrowSolid}
                            alt="Navigation Arrow Right"
                            width={20}
                            height={20}
                            onClick={() => validateFormPage(formPage)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
