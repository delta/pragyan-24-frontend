interface AuthLayoutProps {
    formType: 'LOGIN' | 'SIGN UP';
}

interface FormProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
    inputClassName?: string;
    wrapperClassName?: string;
    label: string;
    inputType?: string;
}

interface LoginFormRequest {
    userEmail: string;
    userPass: string;
}
