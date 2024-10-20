import React, { useState } from 'react'
const App = () => {
  const [first,setfirst]=useState('')
  const [second,setsecond]=useState('')

  const click =()=>{
    setsecond(first)
  }

  return (
<div>
    <input type="text"  onChange={(e)=>setfirst(e.target.value)} value={first} />    



                <button onClick={click}>click</button>
                <h1>{second}</h1>
</div>
  )
}

export default App
