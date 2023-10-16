import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Home1 from './components/Home.jsx'
import Contact from './pages/Contact.tsx'


const router = createBrowserRouter([
  {
    path: "/testfitpeo/",
    element: <Home1 />,
    children: [
      {
        path: "/testfitpeo/Home",
        element: <Home1 />,
      },
      {
        path: "/testfitpeo/Contact",
        element: <Contact />,
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
