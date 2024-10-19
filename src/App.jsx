import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [ampm, setAMPM] = useState('');
  
  const fun=()=>{
    const time=new Date().getHours()

if(time>=0 && time<=12 ){
setTime( new Date().toLocaleTimeString() )
setGreeting('goodmorning')
setAMPM('am')
}
else if(time>12 && time<=23 ){
setTime(  new Date().toLocaleTimeString())
setGreeting('not goodmorning')
setAMPM('pm')
}

  }




useEffect(()=>{
  let first=setInterval(fun, 1000);
     return ()=>clearInterval(first)
},[])

return (
    <div>
      <h1>{greeting}</h1>
      <h2>Current Time: {time}</h2>
      <h3>{ampm}</h3>
    </div>
  );
};

export default App;
