import React, { useCallback, useState } from 'react'

import { ChildButton } from '../childButton/childButton'


export const Counter = () => {
    const[count, setCount]=useState(0)
    
    const handleClick=useCallback(()=>{
        alert("Вы нажали на кнопку")
    }, [])

  return (
    <div>
        <h2>Счетчик:{count} </h2>
        <button onClick={()=> setCount(prev=>prev+1)}>Увеличить счетчик</button>

        <ChildButton onClick={handleClick} label ="Нажми"/>
    </div>
  )
}
