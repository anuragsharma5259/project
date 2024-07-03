import React,{useContext} from 'react'
import Usercontext from '../context/Usercontext'

function Profile() {

    const {user}=useContext(Usercontext)
    if(!user) 
        return <div>please login</div>
else{
    return <div> welcome {user.username} ji</div>
} }

export default Profile
