import { useState } from 'react'

export default function Counter() {
  const [data , setData]= useState('')
// function increment (){
//   setData(data+1)
// }
// function decrement (){
//   setData(data-1)
// }
  return (
    <>
    <div>Counter</div>
    <button onClick={()=>setData(data+1)}>
    Increment</button>
    <h1>{data}</h1>
    <button onClick={()=>setData(data-1)}>Decrement</button>
    </>

  )
}
