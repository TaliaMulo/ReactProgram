import './ExpenseClock.css';

import React, { useState, useEffect } from 'react';

const ExpenseClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());

    return (
        <div className="digital-clock">
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    );
};

export default ExpenseClock;