import { useCallback, useState, useEffect, useRef } from 'react'


function App() { 
  // to track length of the password
  const [length, setLength] = useState(8)
  // to allow numbers in the password
  const [numberAllowed,setNumberAllowed] = useState(false)
  // to allow special char in the password
  const [characterAllowed,setCharAllowed] = useState(false)
  // input field me data jo aega uske state me rkhne ke liye 
  const [password, setPassword] = useState("")

  // {hook: useRef()}
  const passwordRef = useRef(null)


  // page jese load hoga automatic method chlne lgega
  // { hook:useCallback(fn, dependencies) } 
  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*"

    //for password length : loop kitni baar chlega yeh length btara h 
    for(let i=1 ; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  },[length, numberAllowed, characterAllowed,setPassword])
  //useCallback =  reRendering

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
   <div className='flex justify-center my-40 bg-gray-200'>
    <div className='w-full max-w-md shadow-md rounded-lg px-4 py-3 my-10  bg-gray-800 text-orange-500  '>
      <h1 className='text-white text-center my-3'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden md-4 mb-2 '>
         <input type='text' value={password} className='outline-none w-full py-1 px-3'placeholder='password' readOnly
         ref={passwordRef}></input>
         <button onClick={copyPasswordToClipboard} className='hover:bg-sky-700 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         >Copy</button>
      </div>
      
    
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range' 
        min={6} 
        max={100} 
        value={length} 
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}>
        </input>
        <label>Length: {length}</label>
        </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' 
        defaultChecked={numberAllowed} 
        id='numberInput'
        onChange={() => {setNumberAllowed((prev) => !prev)}}></input>
        <label htmlFor='numberInput'> Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox' 
        defaultChecked={characterAllowed}id='characterInput'
        onChange={()=>{setCharAllowed((prev) => !prev)}}></input>
        <label htmlFor='characterInput'>Character</label>
      </div>
    </div>

   </div>
   </div>
  )
}

export default App
