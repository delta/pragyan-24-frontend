'use client';

import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState<string>('00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          timeStyle: 'medium',
          hour12: false,
        }),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Time = time;

  return (
    <div className="flex text-2xl font-custom">
      <div>{Time}</div>
    </div>
  );
}

export default Clock;
