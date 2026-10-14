import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Benefits from './pages/Benefits.jsx'
import Process from './pages/Process.jsx'
import Doctors from './pages/Doctors.jsx'
import Clinical from './pages/Clinical.jsx'
import Privacy from './pages/Privacy.jsx'
import Imprint from './pages/Imprint.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'elonyok', element: <Benefits /> },
        { path: 'folyamat', element: <Process /> },
        { path: 'orvosaink', element: <Doctors /> },
        { path: 'klinikai-informaciok', element: <Clinical /> },
        { path: 'adatkezeles', element: <Privacy /> },
        { path: 'impresszum', element: <Imprint /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') },
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
