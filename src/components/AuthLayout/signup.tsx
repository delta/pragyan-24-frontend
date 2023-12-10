/* eslint-disable */
import React from 'react';
import styles from './form.module.css';
import Image from 'next/image';
// import { customErrorToast, customSuccessToast } from "../../Toaster";
import ArrowSolid from '@/assets/images/Keyboard arrow right.svg';
// import { Recaptcha } from "../../ReCaptcha";
// import { API_URL } from '@/config/config';
import { FormInput, FormSelect } from './input';
import { authConfig } from '@/utils/ApiConfig';
import { UserApi } from '../../../fest-web-client/client/src';

export const SignUp: React.FC<SignupFormProps> = ({ setForm }) => {
    const userApi = new UserApi(authConfig);
    const [formPage, setFormPage] = React.useState<number>(1);
    const [colleges, setColleges] = React.useState<College[]>([]);
    const [confirmPassword, setConfirmPassword] = React.useState<string>('');
    const [registerForm, setRegisterForm] = React.useState<RegisterFormType>({
        userName: 'username',
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
        userYear: 2020,
        userCollege: 'NIT TRICHY',
        userOtherCollege: '',
        userCity: '',
        userReferralCode: '',
        userSponsor: 'no',
        recaptcha_code: '',
        is_app: 0,
    });

    React.useEffect(() => {
        if (colleges && colleges.length > 0) return;
        const fetchColleges = async () => {
            // const response = await fetch(`${API_URL}/colleges`);
            // if (response.ok) {
            //     const data = await response.json();
            //     if (!Array.isArray(data.message)) {
            //         // customErrorToast("Error fetching college list");
            //     } else {
            //         data.message = [{ id: 0, college_name: 'Other' }].concat(data.message);
            //         setColleges(data.message);
            //         setRegisterForm(form => ({
            //             ...form,
            //             userCollege: data.message[0].college_name,
            //         }));
            //     }
            // } else {
            //     // customErrorToast(
            //     // 	"Error connecting to the backend :( Check your connection and refresh the page"
            //     // );
            // }
        };
        fetchColleges();
    }, [colleges]);

    const handleFormFields = (field: string, value: string): void => {
        setRegisterForm(form => ({ ...form, [field]: value }));
    };

    const handleFormSubmit = (): void => {
        // if (registerForm.recaptcha_code === '') {
        //     // customErrorToast("Please verify that you are not a robot");
        //     return;
        // }
        console.log('submitting');
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
            })
            .then(res => console.log(res))
            .catch(e => console.log(e));
        // fetch(`${API_URL}/user/register`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(registerForm),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.status_code === 200) {
        //             // customSuccessToast(
        //             // 	"Successfully created an account. Login with the given credentials"
        //             // );
        //             setForm('LOGIN');
        //         } else {
        //             // customErrorToast(data.message);
        //         }
        //     });
        // .catch(() =>
        // 	customErrorToast(
        // 		"Registration failed :( Check your network connection and try again"
        // 	)
        // );
    };

    const validateFormPage = (page: number): void => {
        switch (page) {
            case 1:
                // if (
                //     !registerForm.userEmail ||
                //     !registerForm.userEmail.match(
                //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     )
                // ) {
                //     // customErrorToast("Please enter a valid email address");
                //     break;
                // } else if (!registerForm.userPassword || registerForm.userPassword.length < 8) {
                //     // customErrorToast(
                //     // 	"Password must be atleast 8 characters long"
                //     // );
                //     break;
                // } else if (registerForm.userPassword !== confirmPassword) {
                //     // customErrorToast("Passwords do not match");
                //     break;
                // }
                setFormPage(2);
                break;
            case 2:
                // if (!registerForm.userEmail) {
                //     // customErrorToast("Please enter a username");
                //     break;
                // } else if (!registerForm.userFullName) {
                //     // customErrorToast("Please enter your full name");
                //     break;
                // } else if (
                //     !registerForm.userPhno ||
                //     !/^\+?(0|[1-9]\d*)$/.test(registerForm.userPhno)
                // ) {
                //     // customErrorToast("Please enter a valid phone number");
                //     break;
                // }
                setFormPage(3);
                break;
            case 3:
                // if (registerForm.userCollege === 'Other' && !registerForm.userOtherCollege) {
                //     // customErrorToast("Please enter your college name");
                //     break;
                // }
                // if (registerForm.userCollege !== 'Other') {
                //     setRegisterForm(form => ({
                //         ...form,
                //         userOtherCollege: '',
                //     }));
                // }
                setFormPage(4);
                break;
            case 4:
                // if (!registerForm.userNationality) {
                //     // customErrorToast("Please enter your country");
                //     break;
                // }
                setFormPage(5);
                break;
            case 5:
                // if (!registerForm.userState) {
                //     // customErrorToast("Please enter your state");
                //     break;
                // } else if (!registerForm.userCity) {
                //     // customErrorToast("Please enter your city");
                //     break;
                // } else if (!registerForm.userAddress) {
                //     // customErrorToast("Please enter your address");
                //     break;
                // }
                setFormPage(6);
                break;
            case 6:
                // if (
                //     !registerForm.userPincode ||
                //     !/^\+?(0|[1-9]\d*)$/.test(registerForm.userPincode)
                // ) {
                //     // customErrorToast("Please enter a valid pincode");
                //     break;
                // }
                setFormPage(7);
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
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userEmail', e.target.value);
                            }}
                        />
                        <FormInput
                            label="PASSWORD *"
                            name="password"
                            inputType="password"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userPassword', e.target.value);
                            }}
                        />
                        <FormInput
                            label="CONFIRM PASSWORD *"
                            name="confirm_password"
                            inputType="password"
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
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userEmail', e.target.value);
                            }}
                        />
                        <FormInput
                            label="FULL NAME *"
                            name="email"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userFullName', e.target.value);
                            }}
                        />
                        <FormInput
                            label="PHONE NUMBER *"
                            name="text"
                            inputType="email"
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
                                handleFormFields('userEmail', e.target.value);
                            }}
                        />
                        <FormInput
                            label="COLLEGE NAME (if not in list)"
                            name="college"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userCollege', e.target.value);
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
                        <FormSelect
                            label="YEAR OF STUDY *"
                            wrapperClassName={styles.signupFields}
                            options={['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year']}
                            onChange={e => {
                                handleFormFields('userYear', e.target.value);
                            }}
                        />
                        <FormInput
                            label="COUNTRY *"
                            inputType="text"
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
                            onChange={e => {
                                handleFormFields('userState', e.target.value);
                            }}
                        />
                        <FormInput
                            label="CITY *"
                            name="city"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userCity', e.target.value);
                            }}
                        />
                        <FormInput
                            label="ADDRESS *"
                            name="address"
                            inputType="text"
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
                            onChange={e => {
                                handleFormFields('userPincode', e.target.value);
                            }}
                        />
                        <FormInput
                            label="REFERRAL CODE *"
                            name="referralcode"
                            inputType="text"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('userReferralCode', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 7 && (
                    <>
                        <FormInput
                            label="VOUCHER NAME *"
                            name="voucherName"
                            inputType="text"
                            onChange={e => {
                                handleFormFields('user_voucher_name', e.target.value);
                            }}
                        />
                        {/* <Recaptcha handleFormFields={handleFormFields} /> */}
                        <div> Bro Captch Bro </div>
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
