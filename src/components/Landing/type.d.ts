interface LoadingProps {
    month: string;
    date: string;
    year: string;
    hours: string;
    minutes: string;
    isButtonClicked: boolean;
    setClicked: Dispatch<SetStateAction<boolean>>;
}
