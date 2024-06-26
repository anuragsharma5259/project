import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setCount] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setCount("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} >Red</button>
          <button onClick={()=>setCount("green")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} >Green</button>
          <button  onClick={()=>setCount("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}} >Black</button>
          <button  onClick={()=>setCount("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} >Blue</button>
          <button  onClick={()=>setCount("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}} >Orange</button>
          <button  onClick={()=>setCount("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"grey"}} >Grey</button>
          <button onClick={()=>setCount("aqua")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"aqua"}} >Aqua</button>

        </div>
      </div>
      </div>

    </>
  )
}

export default App
