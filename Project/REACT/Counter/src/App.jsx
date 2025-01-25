import { useState } from 'react'

import './App.css'

function App() {
    // let counter = 0;
    const[counter, setCounter] = useState(0);
    // setcounter is a function 

    const addValue = ()=>{
      setCounter((prevValue) => prevValue+1);
    }

    const removeValue = () => {
      setCounter((prevValue) => prevValue-1);
    }

  return (
    <>
      <h1>hey i am sumit {counter} </h1>
      <h2>counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button> 
      <p>footer:{counter}</p>
    </>
  )
}

export default App
