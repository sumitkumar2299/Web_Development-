import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Features/TODO/todoSlice'

function Addtodo() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodohandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")


    }


  return (
    <form onSubmit={addTodohandler} className='space-x-3 mt-12'>
        <input
         type="text"
         placeholder='Enter a todo'  
         value={input}
         onChange={(e)=> setInput(e.target.value)}
         
        />
        <button
        type='submit'

        >Add Todo</button>

    </form>
  )
}

export default Addtodo