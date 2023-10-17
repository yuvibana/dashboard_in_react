import React from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Outlet />
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
    </>
  )
}

export default App
