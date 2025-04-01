import React, { useState } from 'react'
import { useTodo } from '../contexts'
function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({todo,completed:false})
        console.log(todo)
        setTodo("")
        
    }

  return (
    <div>
        <form onSubmit={add}>
            <input type='text'
            placeholder='write todo ...'
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            />
            <button type='submit'>ADD</button> 
        </form>
    </div>
  )
}

export default TodoForm