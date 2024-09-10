import { useState } from "react";

const App = () => {
  const [first, setfirst] = useState({
    fname: '',
    lname: ''
  });

  const [second, setsecond] = useState('');

  const hello = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setfirst((pre) => {
      if (name === 'fname') {
        return {
          fname: value,
          lname: pre.lname
        };
      } else if (name === 'lname') {
        return {
          fname: pre.fname,
          lname: value
        };
      }
      return pre;
    });
  };

  const letsgo = (e) => {
    e.preventDefault();
    const thousand = `${first.fname} and ${first.lname}`;
    setsecond(thousand);
  };

  return (
    <div>
      <form onSubmit={letsgo}>
        <input 
          type="text" 
               className="border border-red-600"
          onChange={hello} 
          value={first.fname} 
          name='fname' 
        />
        <input 
        className="border border-red-600"
          type="text" 
          onChange={hello} 
          value={first.lname} 
          name='lname' 
        />
        <button type="submit">Click</button>
        <p>{second}</p>
      </form>
    </div>
  );
};

export default App;
