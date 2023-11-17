import Clock from '../Clock/Clock';
import Social from './Social';

const Footer = () => {
  const footerText = `Made with <3 by Delta and Graphique`;
  return (
    <div className="absolute w-[90vw] h-14 bottom-4 left-1/2 -translate-x-1/2 flex justify-center lg:justify-between items-center px-10 footer-bg font-Orbitron">
      <div className="lg:basis-1/5 max-lg:hidden">
        <Clock />
      </div>
      <div className="lg:basis-3/5 flex justify-center items-center">
        <p className="lg:text-lg sm:text-sm text-xs text-center">
          {footerText}
        </p>
      </div>
      <div className="lg:basis-1/5 max-lg:hidden">
        <Social />
      </div>
    </div>
  );
};

export default Footer;
