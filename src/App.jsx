import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/home/navigation/Navbar'
import FullScreenNav from './components/home/navigation/FullScreenNav'
import NavContext from './context/NavContext'
import Contect from './pages/Contect'


const App = () => {


  return (

    <div className='text-white'>

      <Navbar /> 
      <FullScreenNav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contect' element={<Contect />} />
      </Routes>
    </div>
  )
}

export default App