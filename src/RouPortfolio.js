import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyOffcanvas from './OffcanvasPortf'

import Home from './Components/Home'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Contact from './Components/Contact'



function RouPortfolio() {
  return (
    <div>
      <BrowserRouter>
      <MyOffcanvas/>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/services' element={<Services/>}></Route>
         <Route path='/skills' element={<Skills/>}></Route>
         <Route path='/portfolio' element={<Portfolio/>}></Route>
         <Route path='/resume' element={<Resume/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouPortfolio
