import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Hotel from './pages/Hotel/Hotel.jsx'
import List from './pages/List/List.jsx'

createRoot(document.getElementById('root')).render(
<>
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
  <App />
  </BrowserRouter>
</>

)
