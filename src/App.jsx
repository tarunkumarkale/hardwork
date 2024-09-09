
import { useState } from "react"
import bike from "./bike"
import Card from "./card"

const App=()=>{

const [bikedetails,setbikedetails]=useState(bike)
console.log(bikedetails[3].name)

return (
<>
{
bikedetails.map((element, index) => (
  <Card {...element} key={Element.name}/>
))}
</>
)

}

export default App
