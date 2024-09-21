import { useState } from 'react'
import './App.css'

const user = {
  username: "Apeksha Shakya",
  imageUrl:"/images/main_image.png",
  imageSize: 300
}

function MyButton(){
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count + 1)
  
  }
  return(
    <>
    <button onClick={handleClick} count ={count}>
      Clicked {count} times
    </button>
    <button onClick={handleClick} count ={count}>
      Clicked {count} times
    </button>
    </>
  )
}

const skills = [
  {title: 'Sketching', isTechnical: false ,id :1},
  {title: 'RadioJockey',isTechnical: false,id:2},
  {title: 'Developer',isTechnical: true,id:3}
]




function App() {
  const listItems = skills.map(skill =>
    <li
    key= {skill.id}
    style={{color : skill.isTechnical ? 'magenta' : 'darkgreen'

    }}
    >
      {skill.title}
    </li>
  )
  return (
    <>
      <h1>Welcome to My Profile</h1>
      <h2>{user.username}</h2>
      <img className= "avatar" 
      src = {user.imageUrl}
      style={{
        width: user.imageSize,
        height:user.imageSize
      
      }}/><br></br>
      <MyButton/>
      <h3>These are my Skills</h3>
      <ul>{listItems}</ul>
    </>
  )
}

export default App
