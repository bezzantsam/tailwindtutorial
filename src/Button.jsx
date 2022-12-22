import React from 'react'
import {useState} from 'react'
const Button = () => {
    const [count, setCount] = useState(0)
    const [rocks, setRocks] = useState(100)
    
  
    function greeting() {
      setCount(count+1)
      burnt()
     
    }
    function burnt(){
      setRocks(rocks-1)
    }
  
  return (
    <div>
    <button onClick={greeting}>
   
  </button>
  <p> You took {count} hits
    {rocks} rocks remaining</p>
  </div>


  )
}

export default Button