import React from 'react'

function TodoItem() {
  return (
    <div>
      <input
      type ="checkbox"
      checked = {todo.completed}
      onChange={taskCompleted} />
      <input 
      type = "text"
       value={todoMsg}
       onChange={(e) => setTodoMsg(e.target.value)}
       readOnly />

       <button></button>
    </div>
  )
}

export default TodoItem