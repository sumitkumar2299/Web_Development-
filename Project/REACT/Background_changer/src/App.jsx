import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-600 m-4 py-6 text-center font-bold'>hello react </h1>
      <h2 className='bg-gray-600 m-4 text-center'>once again learning css </h2>

    </>
  )
}

export default App
