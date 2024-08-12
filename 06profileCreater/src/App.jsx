
import './App.css'

const user = {
  username: "Apeksha Shakya",
  imageUrl:"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
  imageSize: 70
}

function MyButton(){
  return(
    <>
    <button>
      Click to know more
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
