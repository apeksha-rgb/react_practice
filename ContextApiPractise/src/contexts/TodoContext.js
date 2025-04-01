import { useContext, createContext } from 'react'

export const TodoContext = createContext({
    todos:[
        {
        id: 1,
        todomsg : "todomsg",
        completed : false,
        }
    ],
    addTodo:(todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo: (id) => {},
    taskCompleted: (id) => {}


})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider =  TodoContext.Provider


