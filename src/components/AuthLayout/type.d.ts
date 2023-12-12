type FormType = 'LOGIN' | 'SIGN UP';

interface AuthLayoutProps {
    formType: FormType;
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

/* eslint-disable */
interface SignupFormProps {
    setForm: (form: FormType) => void;
    // setForm: React.Dispatch<React.SetStateAction<FormType>>;
}

interface ReCaptchaState {
    handleFormFields: (field: string, value: string) => void;
}
