import React from 'react';
import AboutContent from './AboutContent.json';

const AboutCard: React.FC<AboutCardProps> = ({ cardRef }) => {
    const content = AboutContent.content;
    return (
        <div className="AboutCard max-md:hidden h-fit sm:w-[85%] sm:h-[70%] md:w-[70%] md:h-[65%] lg:w-[60%] lg:h-[70%] xl:w-[45%] xl:h-[55%] flex justify-center items-center p-10 ">
            <p
                ref={cardRef}
                className="pt-3 font-Nunito max-lg:text-base text-lg md:h-[80%] lg:h-[85%]"
            >
                {content}
            </p>
        </div>
    );
};

export default AboutCard;
