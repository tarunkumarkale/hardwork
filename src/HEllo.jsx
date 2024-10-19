import React from 'react'
import add ,{hello} from './First'

const {total,sub}=add(4,5)
console.log(total)
console.log(hello(4,8))

const Second = () => {
  return (
    <div>
      <h1>{total}</h1>
     <h1> {hello(4,4)}</h1>
     

    </div>
  )
}

export default Second
