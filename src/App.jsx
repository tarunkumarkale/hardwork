import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
const[time,settime]=useState(0) 
const[hello,sethello]=useState(0) 

let final=new Date().getHours()

const funtimer=()=>{
if(final >=0){
    set
}
}

useEffect(()=>{
setInterval(funtimer,1000)
},[])


  return (
    <div>
      {time}
    </div>
  )
}

export default App
