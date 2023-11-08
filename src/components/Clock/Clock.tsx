'use client';

import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState<Date>();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Time = time?.toLocaleTimeString(undefined, {
    timeStyle: 'medium',
    hour12: false,
  });

  return (
    <div className="flex text-2xl font-custom">
      <div>{Time}</div>
    </div>
  );
}

export default Clock;
