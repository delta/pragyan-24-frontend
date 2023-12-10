import styles from './AuthButton.module.css';

const LoginButton: React.FC<MobileAuthButtonProps> = ({ onClick, text }) => {
    return (
        <div className={`${styles.button} lg:hidden`} onClick={onClick}>
            {text}
        </div>
    );
};

export default LoginButton;
