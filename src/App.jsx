import React from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>

      <Outlet />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
