import React, { useState } from 'react'
import {useDispatch } from "react-redux"
import {addTodo} from "../features/todo/todoSlice"

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")

    }
  return (
    <>
    <form onSubmit={addTodoHandler}>
        <input type="text"
        placeholder='enter your todo'
        value = {input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
        
    </form>
    </>
  )
}

export default AddTodo