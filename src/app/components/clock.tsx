// ColorfulClock.tsx
import React, { useState, useEffect } from 'react';

const ColorfulClock: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const updateDateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedDate = now.toDateString();

    setTime(formattedTime);
    setDate(formattedDate);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateDateTime();
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full rounded-full border bg-gradient-to-br from-accent-blue to-accent-purple text-white">
      <h1 className="text-4xl font-bold mb-4">{time}</h1>
      <p className="text-lg">{date}</p>
    </div>
  );
};

export default ColorfulClock;
