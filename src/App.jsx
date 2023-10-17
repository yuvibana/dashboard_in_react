import React from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>
      <Outlet />

<<<<<<< HEAD
      {/* <Routes>
=======
      <Outlet />
      <Routes>
>>>>>>> b11b5934d97093473a82254edab45e8bbf30dea5
        <Route path='/' element={<Home />} />
      </Routes> */}
    </>
  )
}

export default App
