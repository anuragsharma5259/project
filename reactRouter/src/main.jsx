import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { Link } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfo } from './components/Github/Github.jsx'
// const router=createBrowserRouter([
//   {path:'/',
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//   {
//     path:"About",
//     element:<About/>

//   },
//   {
//     path:"Contact",
//     element:<Contact/>

//   }

// ]
//   }
// ])
//method 2 for rending

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
    <Route  path='' element={<Home/>}/>
    <Route  path='about' element={<About/>}/>
    <Route  path='Contact' element={<Contact/>}/>
    <Route  path='user/:userid' element={<User/>}/>
    <Route   loader={githubinfo
      
    }path='github' element={<Github/>}/>




      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
