import { useState } from "react";

const App = () => {
  const [first, setfirst] = useState({
    fname: '',
    lname: ''
  });

  const [second, setsecond] = useState([]);

  const hello = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setfirst((pre) => ({
      ...pre,
      [name]: value
    }));
  };

  console.log(first);

  const letsgo = (e) => {
    e.preventDefault();
    const thousand = `${first.fname} and ${first.lname}`;
    setsecond((pre) => [...pre, thousand]);
  };

  console.log(second);

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
      </form>
      <div>
        {second.map((ele, index) => (
          <p key={index}>{ele}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
