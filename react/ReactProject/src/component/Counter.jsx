import { useState } from "react"

function Counter() {
    const [num ,numdata]=useState(0);
     function inc(){
        return numdata(num + 1)
     }
     function dec(){
        return numdata(num - 1)
     }
  
    return (
 

    <>
    <h1>Counter</h1>
    <button onClick={inc}>increment</button>
    <h1>{num}</h1>
    <button onClick={dec}>decrement</button>

    </>
  )
}

export default Counter;