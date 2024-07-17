import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // Creating useRef hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(function(){
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str+= "!@#$%^&*_+=[]{}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()

    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()

  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div id='body' className='bg-slate-900 w-full h-screen font-sans items-center justify-items-center '>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700'>
          <h1 className='text-center text-white text-xl font-bold my-4 '>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} />
            <button 
            onClick={copyPasswordtoClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              Copy</button>
          </div>

          <div className='flex text-sm font-semibold gap-x-2'>
            <div className='flex item-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(event) => {setLength(event.target.value)}} />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} 
              id="numberInput"
              onChange={() => {setNumberAllowed((prev) => !prev)}} 
              />
              <label htmlFor='numberInput'>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed} 
              id="charInput"
              onChange={() => {setCharAllowed((prev) => !prev)}} 
              />
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
      </div>
    </div>
      
    </>
  )
}

export default App
