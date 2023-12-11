import styles from './form.module.css';

export function FormInput({
    onChange,
    name,
    inputClassName,
    wrapperClassName,
    label,
    inputType,
    disabled,
    initialValue,
}: FormProps) {
    return (
        <div className={`w-full flex flex-col justify-center mb-6 ${wrapperClassName}`}>
            <div className={'text-base mb-2 font-semibold'}>{label}</div>
            <div className={styles.formInputBorder}>
                <input
                    className={`${styles.formInput} ${inputClassName}`}
                    onChange={onChange}
                    disabled={disabled}
                    name={name}
                    value={initialValue}
                    type={inputType ?? 'text'}
                />
            </div>
        </div>
    );
}

export function FormSelect({
    onChange,
    initialValue,
    inputClassName,
    wrapperClassName,
    label,
    options,
    disabled,
}: FormProps) {
    return (
        <div className={`w-full flex flex-col justify-center mb-6 ${wrapperClassName}`}>
            <div className={'text-base mb-2 font-semibold'}>{label}</div>
            <div className={styles.formInputBorder}>
                <select
                    className={`${styles.formInput} ${inputClassName}`}
                    onChange={onChange}
                    value={initialValue}
                    disabled={disabled}
                >
                    {options?.map((option, index) => <option key={index}>{option}</option>)}
                </select>
            </div>
        </div>
    );
}
