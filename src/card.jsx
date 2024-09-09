import React from 'react'

const Card = ({name,price,date_of_release,bike_type,color_options}) => {
  return (
 <div >
<h1>{name}</h1>
  
  <h2>{price}</h2>

<h2>{date_of_release}</h2>


<h4>{bike_type}</h4>

<h5>{color_options.map((Ele)=>Ele)}</h5>
   
    </div>
  )
}

export default Card
