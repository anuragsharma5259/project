import React,{useContext,useState} from 'react'
import Usercontext from '../context/Usercontext'

function Login() {
    const [username,setusername]=useState('') 
    const [password,setpassword]=useState('')
    const {setuser}=useContext(Usercontext)



    const handleSubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})

      
    }
    return (
        <div> 
            <h2>Login</h2>
            <input value={username}
            onChange={(e)=>setusername(e.target.value)} 
             type='text'
              placeholder='username'/>
                {" "}
            <input
            value={password}
            onChange={(e)=>setpassword(e.target.value)} 
             type='text'
              placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>

             </div>
    )
}

export default Login
