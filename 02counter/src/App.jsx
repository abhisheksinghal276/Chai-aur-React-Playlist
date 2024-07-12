import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  // let counter = 5

  const addValue = () => {
    console.log("clicked",counter)

    if(counter < 20){
      // Increasing the value of counter
      counter = counter +  1
      // Updating the counter value
      setCounter(counter)
    }
    else{
      window.alert("Values greater than 20 invalid!!")
    }
  }

  const removeValue = () => {
    console.log("clicked",counter)

    // // Decreasing the value of counter
    // counter = counter -  1
    // // Updating the counter value
    // setCounter(counter)
    
    // OR we can directly update the value using
    // setCounter() method

    if(counter > 0) {
      setCounter(counter-1)
    }
    else{
      window.alert("Negative values invalid!")
    }
    
  }

  return (
    <>
      <h1>Counting App</h1>
      <h2>Count: {counter}</h2>

      <button
      onClick={addValue}>Add Count</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Count</button>
    </>
  )
}

export default App
