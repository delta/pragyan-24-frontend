'use client';
import Clock from '../Clock/Clock';
import Social from './Social';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const ommitedPaths = ['/login/', '/signup/'];

    if (ommitedPaths.includes(pathname)) {
        return null;
    }

    return (
        <div className="fixed w-[90vw] h-14 bottom-4 left-1/2 -translate-x-1/2 flex justify-center lg:justify-between items-center px-10 footer-bg font-Orbitron">
            <div className="lg:basis-1/5 max-lg:hidden">
                <Clock />
            </div>
            <div className="lg:basis-3/5 flex justify-center items-center">
                <p className="lg:text-lg sm:text-sm text-xs text-center">
                    Made With <span className="text-red-500 scale-150">&#x2665;</span> by
                    <a
                        href="https://delta.nitt.edu/"
                        className="animate-pulse text-green-600 hover:scale-150 ease-in-out"
                    >
                        {' '}
                        DELTA FORCE
                    </a>{' '}
                    and Graphique
                </p>
            </div>
            <div className="lg:basis-1/5 max-lg:hidden">
                <Social />
            </div>
        </div>
    );
};

export default Footer;
