import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = ({name}) => {
  const navigate=useNavigate()
const Navi=()=>{

  navigate('/contact')
}

  return (
    <div>
      {name}
      <button onClick={Navi} className='bg-orange-800'>tocontact</button>
    </div>
  )
}

export default About
