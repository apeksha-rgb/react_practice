import {useEffect,useState} from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] =useState([])

  const addTodo = (todo) => {
    
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
    
  }

  const deleteTodo = (id) => {
    setTodos(()=> prev.filter((todo)=> todo.id !== id ))
  }

  const updateTodo = (id,todo) => {
    setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id == id ? todo : prevTodo)))
  }
  
  const taskCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo))
  }

 

  
 
  return (
    <TodoProvider value={{addTodo,todos,taskCompleted,deleteTodo,updateTodo} }>
      <h1>Welcome , let's make todos  </h1>
      <TodoForm />
      <TodoItem />

    </TodoProvider>
  )
}

export default App
