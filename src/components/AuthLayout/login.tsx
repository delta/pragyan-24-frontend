import React from 'react';
// import Modal from "react-modal";
import styles from './form.module.css';
// import { Recaptcha } from "../../ReCaptcha";
// import DAuthLogin from "../../DauthLogin/DauthLogin";
import { FormInput } from './input';
import Link from 'next/link';

export const Login: React.FC = () => {
    const [loginForm, setLoginForm] = React.useState<LoginFormRequest>({
        userEmail: '',
        userPass: '',
    });
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
        if (!loginForm.userPass)
            // TODO:customErrorToast("Please enter your password");
            ``;
        else {
            // fetch(`${BACKEND_URL}/auth/web`, {
            // 	method: "POST",
            // 	credentials: "include",
            // 	headers: {
            // 		"Content-Type": "application/json",
            // 	},
            // 	body: JSON.stringify(loginForm),
            // })
            // 	.then((res) => res.json())
            // 	.then((data) => {
            // 		if (data.status_code === 200) {
            // 			setIsLoggedIn(true);
            // 			setuserID(data.message.user_id);
            // 			customSuccessToast("Successfully logged in :)");
            // 			router.push("/");
            // 		} else customErrorToast(data.message);
            // 	})
            // 	.catch(() =>
            // 		customErrorToast(
            // 			"There was a problem logging you in :( Check your credentials and try again."
            // 		)
            // 	);
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
                            handleFormChange('user_email', e.target.value);
                        }}
                    />
                    <FormInput
                        label="Password *"
                        name="password"
                        inputType="password"
                        onChange={e => {
                            handleFormChange('user_pass', e.target.value);
                        }}
                    />
                </div>
                <div className={styles.formFieldExtras}>
                    <div
                        className={styles.forgotPassword}
                        // onClick={() => setIsOpen(true)}
                    >
                        <div>Forgot Password?</div>
                    </div>
                    <div>
                        <span className={styles.newHere}>New Here?</span>
                        <Link href="/signup" className={styles.authRedirect}>
                            Sign Up
                        </Link>
                    </div>
                </div>
                <div className={styles.formFieldSubmitContainer}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.submitButton} onClick={handleFormSubmit}>
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
