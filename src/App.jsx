import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Services from './Pages/Services';



const App = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer/>
   
  </>
  )
}

export default App