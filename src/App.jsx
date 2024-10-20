import React, { useState } from 'react'
import Card from './Card'

const App = () => {

  const [first, setFirst] = useState('')
  const [second, setSecond] = useState([])

  const handleInputChange = (e) => {
    let task = e.target.value
    setFirst(task)
  }

  const addTask = () => {
    setSecond((prev) => [...prev, first])
    setFirst('')
  }

  const deleteTask = (index) => {
    let remainingTasks = second.filter((_, i) => i !== index)
    setSecond(remainingTasks)
  }

  return (
    <div>
      <input type="text" value={first} onChange={handleInputChange} />
      <button onClick={addTask}>click</button>

      {second.map((ele, index) => 
        <Card key={index} task={ele} del={() => deleteTask(index)} />
      )}
    </div>
  )
}

export default App
