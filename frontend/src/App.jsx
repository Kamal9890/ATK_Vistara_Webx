// File: src/App.jsx

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AffordalbeHome from './pages/AffordalbeHome'
import LuxuryHome from './pages/LuxuryHome'
import Login from './pages/Login'
import Signup from './pages/Signup'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/affordable" element={<AffordalbeHome />} />
      <Route path="/luxury" element={<LuxuryHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App
