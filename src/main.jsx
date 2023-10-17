import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import Home from './pages/Home.tsx'
import Home1 from './components/Home.jsx'
import Contact from './pages/Contact.tsx'

=======
import Home from './components/Home.jsx'
>>>>>>> b11b5934d97093473a82254edab45e8bbf30dea5

const router = createBrowserRouter([
  {
    path: "/testfitpeo/",
<<<<<<< HEAD
    element: <Home1 />,
    children: [
      {
        path: "/testfitpeo/Home",
        element: <Home1 />,
      },
      {
        path: "/testfitpeo/Contact",
        element: <Contact />,
=======
    element: <App />,
    children: [
      {
        path: "/testfitpeo/Home",
        element: <Home />,
>>>>>>> b11b5934d97093473a82254edab45e8bbf30dea5
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