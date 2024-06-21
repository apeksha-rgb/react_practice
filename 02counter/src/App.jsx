import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  // let counter =15

  const addValue =() =>{
    if(counter < 20 ){
      counter = counter + 1
      setCounter(counter)
      console.log("clicked", counter)
    }else{
      alert("value cannot exceed 20 ")
    }
    
  }
  const removeValue = () => {
    if(counter > 0 ){
      setCounter(counter - 1)
    }else{
      alert("counter can not be negative")
    }
    
  }
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick ={addValue}> Add Value : {counter}</button>
     <br/>
     <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
