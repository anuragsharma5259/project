import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/anuragsharma5259').
    //     then(response=>response.json()).
    //     then(data=>{
    //         setdata(data)
    //     })
    // })

    return (
        <div className='bg-gray-600 text-white p-4 text-3xl text-center m-4
        '>Github Followers: {data.followers}
        <img src={data.avatar_url} alt='Git pictures' width={300}/>
        </div>
        
    )
}

export default Github
export const githubinfo=async ()=>{
 const   response= await fetch('https://api.github.com/users/anuragsharma5259')
 return response.json()

}
 