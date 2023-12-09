import styles from './form.module.css';

export function FormInput({
    onChange,
    name,
    inputClassName,
    wrapperClassName,
    label,
    inputType,
}: FormProps) {
    return (
        <div className={`w-full flex flex-col justify-center mb-6 ${wrapperClassName}`}>
            <div className={'text-base mb-2 font-semibold'}>{label}</div>
            <div className={styles.formInputBorder}>
                <input
                    className={`${styles.formInput} ${inputClassName}`}
                    onChange={onChange}
                    name={name}
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
}: FormProps) {
    return (
        <div className={`w-full flex flex-col justify-center mb-6 ${wrapperClassName}`}>
            <div className={'text-base mb-2 font-semibold'}>{label}</div>
            <div className={styles.formInputBorder}>
                <select
                    className={`${styles.formInput} ${inputClassName}`}
                    onChange={onChange}
                    value={initialValue}
                >
                    {options?.map((option, index) => (
                        <option key={index} >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
