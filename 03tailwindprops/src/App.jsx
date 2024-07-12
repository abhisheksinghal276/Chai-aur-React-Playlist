import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-xl mb-4 text-black p-4'>Tailwind test</h1>
      <Card username="Abhishek Singhal" btntext="Click Me!" />
      <Card username="Anurag Singhal" btntext="Visit Me!" />
    </>
  )
}

export default App
