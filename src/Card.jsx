import React from 'react'

const Card = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.task} 
          <button onClick={props.del}>Delete</button>
        </li>
      </ul>
    </div>
  )
}

export default Card
