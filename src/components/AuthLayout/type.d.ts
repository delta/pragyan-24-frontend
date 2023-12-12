/* eslint-disable */

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
    initialValue?: string | number;
    disabled?: boolean;
}

interface LoginFormRequest {
    userEmail: string;
    userPassword: string;
}

interface RegisterFormType {
    userName: string;
    userEmail: string;
    userFullName: string;
    userPassword: string;
    userSex: string;
    userNationality: string;
    userAddress: string;
    userPincode: string;
    userState: string;
    userPhno: string;
    userDegree: string;
    userYear: number;
    userCollege: string;
    userOtherCollege?: string;
    userCity: string;
    userSponsor?: string;
    userVoucherName?: string;
    userReferralCode?: string;
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
