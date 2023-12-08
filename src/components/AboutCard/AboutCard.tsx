import AboutContent from './AboutContent.json';

const AboutCard = () => {
    const content = AboutContent.content;
    return (
        <div className="AboutCard max-md:hidden h-fit sm:w-[85%] sm:h-[70%] md:w-[70%] md:h-[60%] lg:w-[60%] lg:h-[70%] xl:w-[45%] xl:h-[55%] flex justify-center items-center p-10 ">
            <p className="pt-3 max-lg:text-base text-lg font-Nunito">{content}</p>
        </div>
    );
};

export default AboutCard;
