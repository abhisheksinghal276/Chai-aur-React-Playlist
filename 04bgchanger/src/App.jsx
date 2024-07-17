import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>

      <div className='justify-center text-center font-sans font-bold text-xl px-3 py-3'
      style={{backgroundColor: "#292d30", color: "white"}}>
      <h1 className='w-auto'>Background Color Changer</h1>
      </div>

      <div className='w-full h-screen duration-200 delay-100'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2'>

            <div className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}>Red</div>

            <div className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "green"}}
            onClick={() => setColor("green")}>Green</div>

            <div className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "blue"}}
            onClick={() => setColor("blue")}>Blue</div>

            <div className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "yellow"}}
            onClick={() => setColor("yellow")}>Yellow</div>

            <div className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "purple"}}
            onClick={() => setColor("purple")}>Purple</div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
