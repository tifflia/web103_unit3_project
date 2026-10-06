import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/notbreadalone',
      element: <LocationEvents index={1} />
    },
    {
      path: '/survivalcenter',
      element: <LocationEvents index={2} />
    },
    {
      path: '/seniorcenter',
      element: <LocationEvents index={3} />
    },
    {
      path: '/dickinsonmuseum',
      element: <LocationEvents index={4} />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>Help @ Amherst</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App