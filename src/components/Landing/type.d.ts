interface LoadingProps {
    month: string;
    date: string;
    year: string;
    hours: string;
    minutes: string;
    isButtonClicked: boolean;
    isLeftLightOn: boolean;
    setClicked: Dispatch<SetStateAction<boolean>>;
}
