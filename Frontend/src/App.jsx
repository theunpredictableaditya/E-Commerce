import React from 'react'
import RegisterLogin from './components/RegisterLogin'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/subComponents/NavBar'
import SideBar from './components/subComponents/SideBar'
import Hash from './components/hash'

const App = () => {
  return( 
  <Routes>
    <Route path='/' element={<RegisterLogin/>} />
    <Route path='/entry/*' element={<Hash/>} />
  </Routes>)
}

export default App
