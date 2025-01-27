import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/TODO/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
   <>
   <div>Todos</div>
   {todos.map((todo)=> {
    <li key={todos.id}>
        {todos.text}
        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
    </li>
    
   })}
   </>
  )
}

export default Todo;