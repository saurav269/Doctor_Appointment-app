import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import Doctors from './../Pages/Doctors/Doctors';
import DoctorDetails from '../Pages/Doctors/DoctorDetails';
import Contact from './../Pages/Contact';
import Services from './../Pages/Services';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  )
}

export default Routers
