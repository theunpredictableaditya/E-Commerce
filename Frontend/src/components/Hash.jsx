import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './subComponents/NavBar'
import SideBar from './subComponents/SideBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Account from './pages/Account'
import Orders from './pages/Orders'
import Admin from './pages/Admin'
import Cart from './pages/Cart'

const Hash = () => {

  return (
    <>
        <NavBar/>
        <div className="flex">
            <SideBar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/admin-panel' element={<Admin/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    </>
  )
}

export default Hash
