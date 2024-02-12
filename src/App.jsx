import react, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import Publication from './pages/Publication.jsx'
import Teaching from './pages/Teaching.jsx'
import People from './pages/People.jsx'
import Lab from './pages/Lab.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/research" element={<Research/>} />
      <Route path="/publication" element={<Publication/>} />
      <Route path="/teaching" element={<Teaching/>} />  
      <Route path="/people" element={<People/>} />  
      <Route path="/lab" element={<Lab/>} />  
      <Route path="/project" element={<Project/>} />  
      <Route path="/contact" element={<Contact/>} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
