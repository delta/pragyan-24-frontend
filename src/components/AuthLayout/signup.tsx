import React from 'react';
import styles from './form.module.css';
import Image from 'next/image';
// import { customErrorToast, customSuccessToast } from "../../Toaster";
import ArrowSolid from '@/assets/images/Keyboard arrow right.svg';
// import { Recaptcha } from "../../ReCaptcha";
import { API_URL } from '@/config/config';
import { FormInput,FormSelect } from './input';

export const SignUp: React.FC<SignupFormProps> = ({ setForm }) => {
    const [formPage, setFormPage] = React.useState<number>(7);
    const [colleges, setColleges] = React.useState<College[]>([]);
    const [confirmPassword, setConfirmPassword] = React.useState<string>('');
    const [registerForm, setRegisterForm] = React.useState<RegisterFormType>({
        user_name: '',
        user_email: '',
        user_fullname: '',
        user_password: '',
        user_sex: 'Male',
        user_nationality: '',
        user_address: '',
        user_pincode: '',
        user_state: '',
        user_phno: '',
        user_degree: 'BTech',
        user_year: '1st Year',
        user_college: '',
        user_othercollege: '',
        user_city: '',
        user_referral_code: '',
        user_sponsor: 'no',
        recaptcha_code: '',
        is_app: 0,
    });

    React.useEffect(() => {
        if (colleges && colleges.length > 0) return;
        const fetchColleges = async () => {
            const response = await fetch(`${API_URL}/colleges`);
            if (response.ok) {
                const data = await response.json();
                if (!Array.isArray(data.message)) {
                    // customErrorToast("Error fetching college list");
                } else {
                    data.message = [{ id: 0, college_name: 'Other' }].concat(data.message);
                    setColleges(data.message);
                    setRegisterForm(form => ({
                        ...form,
                        user_college: data.message[0].college_name,
                    }));
                }
            } else {
                // customErrorToast(
                // 	"Error connecting to the backend :( Check your connection and refresh the page"
                // );
            }
        };
        fetchColleges();
    }, [colleges]);

    const handleFormFields = (field: string, value: string): void => {
        setRegisterForm(form => ({ ...form, [field]: value }));
    };

    const handleFormSubmit = (): void => {
        if (registerForm.recaptcha_code === '') {
            // customErrorToast("Please verify that you are not a robot");
            return;
        }
        fetch(`${API_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerForm),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status_code === 200) {
                    // customSuccessToast(
                    // 	"Successfully created an account. Login with the given credentials"
                    // );
                    setForm('LOGIN');
                } else {
                    // customErrorToast(data.message);
                }
            });
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
                //     !registerForm.user_email ||
                //     !registerForm.user_email.match(
                //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     )
                // ) {
                //     // customErrorToast("Please enter a valid email address");
                //     break;
                // } else if (!registerForm.user_password || registerForm.user_password.length < 8) {
                //     // customErrorToast(
                //     // 	"Password must be atleast 8 characters long"
                //     // );
                //     break;
                // } else if (registerForm.user_password !== confirmPassword) {
                //     // customErrorToast("Passwords do not match");
                //     break;
                // }
                setFormPage(2);
                break;
            case 2:
                // if (!registerForm.user_name) {
                //     // customErrorToast("Please enter a username");
                //     break;
                // } else if (!registerForm.user_fullname) {
                //     // customErrorToast("Please enter your full name");
                //     break;
                // } else if (
                //     !registerForm.user_phno ||
                //     !/^\+?(0|[1-9]\d*)$/.test(registerForm.user_phno)
                // ) {
                //     // customErrorToast("Please enter a valid phone number");
                //     break;
                // }
                setFormPage(3);
                break;
            case 3:
                // if (registerForm.user_college === 'Other' && !registerForm.user_othercollege) {
                //     // customErrorToast("Please enter your college name");
                //     break;
                // }
                // if (registerForm.user_college !== 'Other') {
                //     setRegisterForm(form => ({
                //         ...form,
                //         user_othercollege: '',
                //     }));
                // }
                setFormPage(4);
                break;
            case 4:
                // if (!registerForm.user_nationality) {
                //     // customErrorToast("Please enter your country");
                //     break;
                // }
                setFormPage(5);
                break;
            case 5:
                // if (!registerForm.user_state) {
                //     // customErrorToast("Please enter your state");
                //     break;
                // } else if (!registerForm.user_city) {
                //     // customErrorToast("Please enter your city");
                //     break;
                // } else if (!registerForm.user_address) {
                //     // customErrorToast("Please enter your address");
                //     break;
                // }
                setFormPage(6);
                break;
            case 6:
                // if (
                //     !registerForm.user_pincode ||
                //     !/^\+?(0|[1-9]\d*)$/.test(registerForm.user_pincode)
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
                        {/* <div className={styles.formField}>
							<div className={styles.formLabel}>EMAIL *</div>
							<input
								className={styles.formInput}
								type="email"
								onChange={(e) => {
									handleFormFields(
										"user_email",
										e.target.value
									);
								}}
								value={registerForm.user_email}
							/>
						</div>
						<div className={styles.formField}>
							<div className={styles.formLabel}>PASSWORD *</div>
							<input
								className={styles.formInput}
								type="password"
								onChange={(e) => {
									handleFormFields(
										"user_password",
										e.target.value
									);
								}}
								value={registerForm.user_password}
							/>
						</div>
						<div className={styles.formField}>
							<div className={styles.formLabel}>
								CONFIRM PASSWORD *
							</div>
							<input
								className={styles.formInput}
								type="password"
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
								value={confirmPassword}
							/>
						</div> */}
                        <FormInput
                            label="EMAIL *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="PASSWORD *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="CONFIRM PASSWORD *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 2 && ( 
                    <>
                        {/* <div className={styles.formField}>
                            <div className={styles.formLabel}>USERNAME *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_name', e.target.value);
                                }}
                                value={registerForm.user_name}
                            />
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>FULL NAME *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_fullname', e.target.value);
                                }}
                                value={registerForm.user_fullname}
                            />
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>PHONE NUMBER *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_phno', e.target.value);
                                }}
                                value={registerForm.user_phno}
                            />
                        </div> */}
                        <FormInput
                            label="USERNAME *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="FULL NAME *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="PHONE NUMBER *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 3 && (
                    <>
                        {/* <div className={styles.formField}>
                            <div className={styles.formLabel}>GENDER *</div>
                            <select
                                className={styles.formInput}
                                onChange={e => {
                                    handleFormFields('user_sex', e.target.value);
                                }}
                                value={registerForm.user_sex}
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>COLLEGE *</div>
                            <select
                                className={styles.formInput}
                                onChange={e => {
                                    handleFormFields('user_college', e.target.value);
                                }}
                                value={registerForm.user_college}
                            >
                                {colleges &&
                                    colleges.map(college => (
                                        <option key={college.id}>{college.college_name}</option>
                                    ))}
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>
                                COLLEGE NAME &#40; if not in list &#41;
                            </div>
                            <input
                                className={`${styles.formInput} ${
                                    registerForm.user_college !== 'Other' && styles.disabledInput
                                }`}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_othercollege', e.target.value);
                                }}
                                disabled={registerForm.user_college !== 'Other'}
                                value={registerForm.user_othercollege}
                            />
                        </div> */}
                        <FormSelect
                            label="GENDER *"
                            initialValue={registerForm.user_sex}
                            inputType="email"
                            options={["Male","Female","Other"]}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormSelect
                            label="GENDER *"
                            initialValue={registerForm.user_college}
                            inputType="email"
                            options={colleges ? colleges.map(college => college.college_name) : []}
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="COLLEGE NAME (if not in list)"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 4 && (
                    <>
                        {/* <div className={styles.formField}>
                            <div className={styles.formLabel}>DEGREE *</div>
                            <select
                                className={styles.formInput}
                                onChange={e => {
                                    handleFormFields('user_degree', e.target.value);
                                }}
                                value={registerForm.user_degree}
                            >
                                <option>BTech</option>
                                <option>MTech</option>
                                <option>BE</option>
                                <option>ME</option>
                                <option>BCA</option>
                                <option>MCA</option>
                                <option>BBA</option>
                                <option>MBA</option>
                                <option>BSc</option>
                                <option>MSc</option>
                                <option>BA</option>
                                <option>MA</option>
                                <option>MBBS</option>
                                <option>MD</option>
                                <option>MS</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>YEAR OF STUDY *</div>
                            <select
                                className={styles.formInput}
                                onChange={e => {
                                    handleFormFields('user_year', e.target.value);
                                }}
                                value={registerForm.user_year}
                            >
                                <option>1st Year</option>
                                <option>2nd Year</option>
                                <option>3rd Year</option>
                                <option>4th Year</option>
                                <option>5th Year</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>COUNTRY *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_nationality', e.target.value);
                                }}
                                value={registerForm.user_nationality}
                            />
                        </div> */}
                        <FormSelect
                            label="DEGREE *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            options={[
                                "BTech",
                                "MTech",
                                "BE",
                                "ME",
                                "BCA",
                                "MCA",
                                "BBA",
                                "MBA",
                                "BSc",
                                "MSc",
                                "BA",
                                "MA",
                                "MBBS",
                                "MD",
                                "MS",
                                "Other"
                            ]}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormSelect
                            label="YEAR OF STUDY *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            options={[
                                "1st Year",
                                "2nd Year",
                                "3rd Year",
                                "4th Year",
                                "5th Year"
                            ]}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="COUNTRY *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 5 && (
                    <>
                        {/* <div className={styles.formField}>
                            <div className={styles.formLabel}>STATE *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_state', e.target.value);
                                }}
                                value={registerForm.user_state}
                            />
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>CITY *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_city', e.target.value);
                                }}
                                value={registerForm.user_city}
                            />
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>ADDRESS *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_address', e.target.value);
                                }}
                                value={registerForm.user_address}
                            />
                        </div> */}
                        <FormInput
                            label="STATE *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="CITY *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="ADDRESS *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 6 && (
                    <>
                        {/* <div className={styles.formField}>
                            <div className={styles.formLabel}>PINCODE *</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_pincode', e.target.value);
                                }}
                                value={registerForm.user_pincode}
                            />
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>REFERRAL CODE</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_referral_code', e.target.value);
                                }}
                                value={registerForm.user_referral_code}
                            />
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>
                                WOULD YOU LIKE TO RECEIVE SPONSOR MESSAGES?
                            </div>
                            <div className={styles.formRadioInputs}>
                                <div className={styles.formRadioInput}>
                                    <label htmlFor="yesCheckbox">Yes</label>
                                    <input
                                        type="radio"
                                        id="yesCheckbox"
                                        value="yes"
                                        name="user_sponsor"
                                        onChange={e => {
                                            handleFormFields('user_sponsor', e.target.value);
                                        }}
                                    />
                                </div>
                                <div className={styles.formRadioInput}>
                                    <label htmlFor="yesCheckbox">No</label>
                                    <input
                                        type="radio"
                                        id="yesCheckbox"
                                        value="no"
                                        name="user_sponsor"
                                        onChange={e => {
                                            handleFormFields('user_sponsor', e.target.value);
                                        }}
                                        defaultChecked
                                    />
                                </div>
                            </div>
                        </div> */}
                        <FormInput
                            label="PINCODE *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                        <FormInput
                            label="REFERRAL CODE *"
                            name="email"
                            inputType="email"
                            wrapperClassName={styles.signupFields}
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
                            }}
                        />
                    </>
                )}
                {formPage === 7 && (
                    <>
                        {/* <div className={styles.formField}>
                            <div className={styles.formLabel}>VOUCHER NAME</div>
                            <input
                                className={styles.formInput}
                                type="text"
                                onChange={e => {
                                    handleFormFields('user_voucher_name', e.target.value);
                                }}
                                value={registerForm.user_voucher_name}
                            />
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formLabel}>VERIFICATION *</div>
                            <div className={styles.formInput}>Verify you&apos;re not a robot</div>
                        </div> */}
                        <FormInput
                            label="VOUCHER NAME *"
                            name="email"
                            inputType="email"
                            onChange={e => {
                                handleFormFields('user_email', e.target.value);
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
