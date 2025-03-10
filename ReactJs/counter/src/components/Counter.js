import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You Have Clicked {count} Times</p>
      <button id='btn' onClick={() => {setCount(count+1)}}>+</button>
      <button id='btn' onClick={() => {if (count > 0) setCount(count-1)}} disabled={count === 0}>-</button>
    </div>
  )
}

export default Counter
