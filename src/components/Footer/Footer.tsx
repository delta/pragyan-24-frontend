import Clock from '../Clock/Clock';
import Social from './Social';

const Footer = () => {
  return (
    <div className="absolute w-[90vw] h-14 bottom-4 left-1/2 -translate-x-1/2 flex justify-between items-center px-10 footer-bg font-Orbitron">
      <div className="basis-1/5">
        <Clock />
      </div>
      <div className="basis-3/5 flex justify-center">
        Made with love by Delta and Graphique
      </div>
      <div className="basis-1/5">
        <Social />
      </div>
    </div>
  );
};

export default Footer;
