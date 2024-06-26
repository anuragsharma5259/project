import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setLentgh] = useState(8)
  const[numallowed,setnumallowed]=useState(false)
  const[charAllow,setcharAllow]=useState(false)
  const [Password,setpassword]=useState("")
  const passgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str+="0123456789"
    if(charAllow) str+="@#$%&*()_+{}[]"
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }
    setpassword(pass)

  },[length,numallowed,charAllow,setpassword])

  useEffect(()=>{

    passgenerator()
  },[length,charAllow,numallowed,passgenerator])

  const passref=useRef(null)
  const copyallpass=useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
    passref.current?.select()
    passref.current?.setSelectionRange(0,999)

  },[Password])
  return (
    <>
   <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
           type="text" value={Password} 
           className='outline-none w-full py-1 px-3'
           placeholder='Password'
           ref={passref}
          
           readOnly />
           <button
           
           onClick={copyallpass}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

    </div>
    <div className='flex text-sm gap-x-2'> <div className='flex items-center gap-x-1'>
      <input type='range'
      min={6}
      max={100}
      value={length}
      className=' cursor-pointer'
      onChange={(e)=>{setLentgh(e.target.value)}}/>
      <label>Length:({length})</label>


      </div>
      <div className='flex text-sm gap-x-1'>

      <input type='checkbox'

      defaultChecked={numallowed} 
      id='numberInput'
      onChange={()=>{setnumallowed((prev)=>!prev)}}/>
      <label htmlFor='numberInput'>Numbers</label>
     
      </div>
      <div className='flex text-sm gap-x-1'>

      <input type='checkbox'

      defaultChecked={charAllow} 
      id='characterInput'
      onChange={()=>{setcharAllow((prev)=>!prev)}}/>
      <label htmlFor='numberInput'>Character</label>
     
      </div>
      
      </div>
   </div>
     </> 
  )
}

export default App
 