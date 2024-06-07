import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {

    return (

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
           
            {/* <Route path="/x" element={<x />} /> */}
        </Routes>
        
    )
}

