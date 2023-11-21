'use client';

import { useEffect, useState } from 'react';

function Clock() {
    const [time, setTime] = useState<string>('Hours To Go');

    useEffect(() => {
        const endDate: Date = new Date('February 24, 2024 00:00:00');
        const timer = setInterval(() => {
            const currDate: Date = new Date();
            const timeDifference: number = endDate.getTime() - currDate.getTime();

            const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setTime(`${hoursDifference} : ${minutesDifference} : ${secondsDifference}`);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const Time = time;

    return (
        <div className="flex text-xl font-custom">
            <div>{Time}</div>
        </div>
    );
}

export default Clock;
