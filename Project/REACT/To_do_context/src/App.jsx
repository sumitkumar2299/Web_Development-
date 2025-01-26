import { useState } from 'react'

import './App.css'
import { TodoProvider } from './Context/TodoContext'
import { useEffect } from 'react'

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
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toogleComplete}}>
     <h1 className='bg-gray-600'>learning react </h1>
     
    </TodoProvider>
  )
}

export default App
