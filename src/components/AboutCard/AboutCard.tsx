import React from 'react';
import AboutContent from './AboutContent.json';

const AboutCard: React.FC<AboutCardProps> = ({ cardRef }) => {
    const content = AboutContent.content;
    const content1 = AboutContent.content1;
    const content2 = AboutContent.content2;
    return (
        <div className="AboutCard max-lg:hidden h-fit sm:w-[85%] sm:h-[70%] md:w-[50rem] md:h-[60%] md:max-h-96 flex justify-center items-center pt-20 p-11">
            <p
                ref={cardRef}
                className="font-Nunito text-xl h-[90%] w-[85%] overflow-auto p-1 text-justify"
            >
                {content}
                <br />
                <br />
                {content1}
                <br />
                <br />
                {content2}
            </p>
        </div>
    );
};

export default AboutCard;
