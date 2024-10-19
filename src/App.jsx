import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [ampm, setAMPM] = useState('');
  
  const fun=()=>{
    const time=new Date().getHours()

if(timeing>=0 && timeing<=12 ){
setTime(  new Date().toLocaleTimeString )
setGreeting('goodmorning')
setAMPM('am')
}
else if(timeing>12 && timeing<=23 ){
setTime(  new Date().toLocaleTimeString )
setGreeting('not goodmorning')
setAMPM('pm')
}

  }

setInterval( fun, 1000);



  return (
    <div>
      <h1>{greeting}</h1>
      <h2>Current Time: {time}</h2>
      <h3>{ampm}</h3>
    </div>
  );
};

export default App;
