interface AuthLayoutProps {
    formType: 'LOGIN' | 'SIGN UP';
}

type FormType = 'LOGIN' | 'SIGN UP';

interface SignupFormProps {
	setForm: (form: FormType) => void;
}

interface FormProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    name?: string;
    inputClassName?: string;
    wrapperClassName?: string;
    label: string;
    inputType?: string;
	options?: string[];
	initialValue?: string;
}

interface LoginFormRequest {
    userEmail: string;
    userPass: string;
}

interface RegisterFormType {
	user_name: string;
	user_email: string;
	user_fullname: string;
	user_password: string;
	user_sex: string;
	user_nationality: string;
	user_address: string;
	user_pincode: string;
	user_state: string;
	user_phno: string;
	user_degree: string;
	user_year: string;
	user_college: string;
	user_othercollege?: string;
	user_city: string;
	user_sponsor?: string;
	user_voucher_name?: string;
	user_referral_code?: string;
	recaptcha_code?: string;
	is_app?: number;
}

interface College {
	id: number;
	college_name: string;
}

interface LoginFormType {
	user_email: string;
	user_pass: string;
}

interface ReCaptchaState {
	handleFormFields: (field: string, value: string) => void;
}