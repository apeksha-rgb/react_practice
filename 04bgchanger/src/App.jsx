import { useState } from "react"


function App() {
  const [mycolor, setmyColor] = useState("olive")

  return (
    
      <div className="w-full h-screen duration-200"style={{backgroundColor:mycolor }}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={()=>setmyColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"red"}}>Red</button>
      <button onClick={() => setmyColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=> setmyColor("blue")} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=> setmyColor("purple")} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"purple"}}>purple</button>
      <button onClick={()=> setmyColor("black")} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"black"}}>Black</button>
      <button onClick={()=> setmyColor("orange")} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"orange"}}>orange</button>
      <button onClick={()=> setmyColor("maroon")} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"maroon"}}>Maroon</button></div>
      </div>
      </div>
    
  )
}

export default App
