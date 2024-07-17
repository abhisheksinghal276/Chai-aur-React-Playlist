import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>

<div class="relative w-full bg-white">
  <div class="mx-auto flex max-w-7xl justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="flex justify-items-center align-sub-center space-x-2">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-palette2" viewBox="0 0 16 16">
          <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a3 3 0 0 1-2.121-.879A3 3 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495zm0 12.495V13z"/>
        </svg>
      </span>
      <span class="font-bold text-xl ">Background Color Changer</span>
    </div>
  </div>
</div>


      {/* <div className='justify-center text-center font-sans font-bold text-xl px-3 py-3'
      style={{backgroundColor: "#292d30", color: "white"}}>
      <h1 className='w-auto'>Background Color Changer</h1>
      </div> */}

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
