// import { useState } from 'react'
import { Router, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Homepage from './pages/HomePage'
import Layout from './Layout'
import Project from './pages/Project'
import Faq from './pages/Faq'
import Team from './pages/Team'
import Details from './pages/Details'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Singles from './pages/Singles'
import Contact from './pages/Contact'
import TeamS from './pages/TeamS'
import Articles from './pages/Articles'
import './App.css'


const router = createBrowserRouter( 
  createRoutesFromElements(

  <Route path='/' element={<Layout/>}>
     <Route index element = {<Homepage/>}/>
     <Route path='/project' element={<Project/>}/>
     <Route path='/faq' element={<Faq/>}/>
     <Route path='/team' element={<Team/>}/>
     <Route path='/details' element={<Details/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/pricing' element={<Pricing/>}/>
     <Route path='/singles' element={<Singles/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/teams' element={<TeamS/>}/>
     <Route path='/articles' element={<Articles/>}/>
  </Route>
 
)
)
function App() {
  return  <RouterProvider router={router}/>
}

export default App
