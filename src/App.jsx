import React, { useEffect, useState } from 'react';

const App = () => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // State for time and background color
  const [first, setFirst] = useState({day: new Date().getDay(), date: new Date().getDate(), month: new Date().getMonth()});
  const [dayname, setDayname] = useState('');
  const [back, setBack] = useState('green');
  const [timing, setTiming] = useState({hour: 0, minute: 0, second: 0});

  useEffect(() => {
    // Updating the time and background color every second
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      setTiming({ hour, minute, second });

      // Update background color based on the time of the day
      if (hour >= 0 && hour <= 12) {
        setBack('blue');
      } else if (hour >= 13 && hour <= 20) {
        setBack('red');
      } else {
        setBack('pink');
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const showName = (day) => {
    setDayname(dayNames[day]);
  };

  return (
    <div className={`flex flex-col justify-center items-center mt-10 ${back}`}>
      <div className='text-5xl text-blue-700 font-extrabold mb-2'>
        {dayname ? dayname : first.date}
      </div>
      <div className='text-5xl text-blue-700 font-extrabold mb-2'>
        {`${timing.hour} : ${timing.minute} : ${timing.second}`}
      </div>
      <button onClick={() => showName(first.day)} className='bg-red-700 border-green-950 w-auto h-auto rounded-md block text-4xl'>
        Show Day Name
      </button>
    </div>
  );
};

export default App;
