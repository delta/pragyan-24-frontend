import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import youtube from '../../assets/images/youtube.svg';
import medium from '../../assets/images/medium.svg';

import Image from 'next/image';

const Social = () => {
    return (
        <div className="flex justify-around items-center">
            <Image
                src={twitter}
                alt="Twitter"
                className="w-6 hover:cursor-pointer hover:scale-125"
            />
            <Image src={medium} alt="Medium" className="w-7 hover:cursor-pointer hover:scale-125" />
            <Image
                src={instagram}
                alt="Instagram"
                className="w-7 hover:cursor-pointer hover:scale-125"
            />
            <Image
                src={youtube}
                alt="YouTube"
                className="w-7 hover:cursor-pointer hover:scale-125"
            />
            <Image
                src={facebook}
                alt="Facebook"
                className="w-7 hover:cursor-pointer hover:scale-125"
            />
        </div>
    );
};

export default Social;
