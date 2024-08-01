'use client';
import React, { useState } from 'react'

const Counter = () => {
  const [ value, setValue ] = useState(0)
  
  const incrementar = () => {
    setValue(value + 1)
  }
  const decrementar = () => {
    if (value === 0) {
        return
    }
    setValue(value - 1)
  }

    return (
    <div className="flex flex-col items-center my-10">
      <h1 className='text-white font- text-2xl'>Contador</h1>
      <div className='my-2 flex flex-row gap-10 justify-center align-center'>
          <button onClick={decrementar} className='transition duration-200 rounded-lg w-10 h-10 bg-pink-200 text-black text-3xl hover:bg-pink-800 hover:text-white hover:scale-110 hover:transition-600 font-bold'>-</button>
          <h4 className='text-3xl'>{value}</h4>
          <button onClick={incrementar} className='transition duration-200 rounded-lg w-10 h-10 bg-pink-200 text-black text-3xl hover:bg-pink-800 hover:text-white hover:scale-110 font-bold'>+</button>
      </div>
    </div>
  )
}

export default Counter