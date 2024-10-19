import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [ampm, setAMPM] = useState('');
  
  // Function to update time and greeting
  const updateTime = () => {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    const formattedTime = now.toLocaleTimeString(); // Get formatted time like '10:30:50 AM'
    let greetingText = '';
    let AMPM = '';

    if (hour >= 0 && hour < 12) {
      greetingText = 'Good Morning';
      AMPM = 'AM';
    } else if (hour >= 12 && hour < 17) {
      greetingText = 'Good Afternoon';
      AMPM = 'PM';
    } else if (hour >= 17 && hour < 21) {
      greetingText = 'Good Evening';
      AMPM = 'PM';
    } else {
      greetingText = 'Good Night';
      AMPM = 'PM';
    }

    setTime(formattedTime);
    setGreeting(greetingText);
    setAMPM(AMPM);
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(updateTime, 1000); // Updates every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>Current Time: {time}</h2>
      <h3>{ampm}</h3>
    </div>
  );
};

export default App;
