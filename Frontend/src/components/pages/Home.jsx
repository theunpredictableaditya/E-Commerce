import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../subComponents/NavBar';
import SideBar from '../subComponents/SideBar';

const Home = () => {

    const location = useLocation();
    const [userRole, setuserRole] = useState("")

    useEffect(() => {
        setuserRole(location.state?.role)
    }, [])
    console.log(userRole);


  return (
    <div>
        I am home
    </div>
  )
}

export default Home
