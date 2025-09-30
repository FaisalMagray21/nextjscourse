"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    const [count,setcount]=useState(0);
  return (
    <div>
        <h1>Wellcome to the client component</h1>
        <h1>your count is {count}</h1>
        <button onClick={()=>{setcount(count+1)}}>increment</button>
        <button onClick={()=>{setcount(count-1)}}>decrement</button>



    </div>
  )
}

export default page