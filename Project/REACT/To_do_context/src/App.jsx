import { useState } from 'react'

import './App.css'
import { TodoProvider } from './Context/TodoContext'
import { useEffect } from 'react'
import { TodoForm, Todoitem } from './Components'

function App() {

  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }


  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevTodo)=> {prevTodo.id === todo.id ? todo : prevTodo}))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  const toogleComplete = (id) => {
    setTodos((prev)=> 
      prev.map((prevTodo)=> 
      prevTodo.id === id ? {...prevTodo, completed: 
        !prevTodo.completed} : prevTodo
      
  )
    
    )
  }


  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("todo") )
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=> {
    localStorage.setItem("todo", JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toogleComplete}}>
     <TodoForm/>
     {
      todos.map((todo)=>(
        <div key={todo.id}>
          <Todoitem todo = {todo}/>
        </div>

      ) )
     }
     
    </TodoProvider>
  )
}

export default App
