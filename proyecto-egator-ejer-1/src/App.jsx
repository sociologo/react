import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import Home from './pages/home/Home.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import Plans from './pages/plans/Plans.jsx'
import Trainers from './pages/trainers/Trainers.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
   return (
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route index element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='contact' element={<Contact/>}/>
         <Route path='gallery' element={<Gallery/>}/>
         <Route path='plans' element={<Plans/>}/>
         <Route path='trainers' element={<Trainers/>}/>
         <Route path='*' element={<NotFound/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
   )
 }

export default App
