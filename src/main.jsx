import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/testfitpeo/",
    element: <App />,
    children: [
      {
        path: "/testfitpeo/Home",
        element: <Home />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>,
)