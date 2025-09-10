import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Suits from './pages/Suits'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'


function App() {

 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App

