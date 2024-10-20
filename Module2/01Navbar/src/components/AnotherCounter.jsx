import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const AnotherCounter = () => {
   let count = useSelector((state)=>state.counter.count)

  return (
    <>
        <h1>Counter: {count}</h1>
    </>
  )
}

export default AnotherCounter;