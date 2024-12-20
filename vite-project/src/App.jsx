import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Models, { Brands } from './pages/models'
import Footer from './components/Footer'
import Cars from './pages/Cars'
import Menu from './components/Menu'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main-content'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/models' element={<Brands />} />
        <Route path='/cars' element={<Cars />} />
      </Routes>
    </main>
  )
}

export default App

