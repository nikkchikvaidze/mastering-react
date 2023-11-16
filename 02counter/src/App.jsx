import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15;
  const [counter, setCounter] = useState(0)

  function addValue() {
      setCounter(counter + 1);
  };

  function removeValue() {
      setCounter(counter - 1);
  }

  return (
    <>
    <h1>React Course {counter}</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button> {' '}
    <button onClick={removeValue}>Remove value</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
