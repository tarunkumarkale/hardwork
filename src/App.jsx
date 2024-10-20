import react, { useState } from 'react'
import Card from './Card'

const App=()=>{


const [first,setfirst]=useState()

const data=[
  {name:'jhon',age:'23',Id:'0'},
  {name:'kale',age:'43',Id:'1'},
  {name:'left',age:'34',Id:'2'},
  {name:'right',age:'88',Id:'3'},
]

  return(

    <div>
      {data.map((Element,index,Array)=> {<Card  {...data} />} )}
    </div>
   
  )
}
export default App