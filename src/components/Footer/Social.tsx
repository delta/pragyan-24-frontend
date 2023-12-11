import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import youtube from '../../assets/images/youtube.svg';
import medium from '../../assets/images/medium.svg';
import Link from 'next/link';
import Image from 'next/image';

const FooterItem = ({ link, imageSrc }: { link: string; imageSrc: string }) => {
    return (
        <Link href={link}>
            <Image
                src={imageSrc}
                alt="Twitter"
                className="w-6 hover:cursor-pointer hover:scale-125"
            />
        </Link>
    );
};

const images = [
    {
        src: twitter,
        link: 'https://twitter.com/nitt_pragyan',
    },
    {
        src: medium,
        link: 'https://medium.com/pragyan-blog',
    },
    {
        src: instagram,
        link: 'https://www.instagram.com/pragyan_nitt/',
    },
    {
        src: youtube,
        link: 'https://youtube.com/@PragyanNITTrichy',
    },
    {
        src: facebook,
        link: 'https://m.facebook.com/pragyan.nitt',
    },
];

const Social = () => {
    return (
        <div className="flex justify-around items-center">
            {images.map((image, index) => (
                <FooterItem key={index} link={image.link} imageSrc={image.src} />
            ))}
        </div>
    );
};

export default Social;
