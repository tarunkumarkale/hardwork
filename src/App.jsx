import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
const [first,setfirst]=useState(0)
  // api call practice

   useEffect(()=>{
 const controller= new AbortController()
 console.log(controller)
 const signal=controller.signal


        const Cat=async()=>{
try {
  const response=await fetch ('https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=beng&api_key=REPLACE_ME',{signal})
  const data= await response.json()
  setfirst(data)
  console.log(signal)
console.log(data)
} catch (error) {
  console.log(error)
}
}

Cat()
return ()=>controller.abort()
   },[])

  return (
    <div>
          
    </div>
  )
}

export default App
