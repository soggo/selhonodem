// import { useState } from 'react'
import { Router, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './Layout'
import Project from './pages/Project'
import Faq from './pages/Faq'
import Team from './pages/Team'
import './App.css'

const router = createBrowserRouter( 
  createRoutesFromElements(

  <Route path='/' element={<Layout/>}>
     <Route index element = {<HomePage/>}/>
     <Route path='/project' element={<Project/>}/>
     <Route path='/faq' element={<Faq/>}/>
     <Route path='/team' element={<Team/>}/>
  </Route>
 
)
)
function App() {
  return  <RouterProvider router={router}/>
}

export default App
