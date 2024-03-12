import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import Navbar from './component/Navbar'

function App() {

  return (
    <div className='h-screen w-screen'>
            <Navbar/>
            <Dashboard/>
    </div>
  )
}

export default App
