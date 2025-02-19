import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import Home from './pages/home/Home.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import Plans from './pages/plans/Plans.jsx'
import Trainers from './pages/trainers/Trainers.jsx'

import Navbar from './components/Navbar'

import React from 'react'

const App = () => {
   return (
      <BrowserRouter>
      <Navbar/>
         <About />
         <Contact />
         <Gallery />
         <Home />
         <NotFound />
         <Plans />
         <Trainers />
      </BrowserRouter>
   )
}

export default App
