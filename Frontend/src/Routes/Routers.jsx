import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import Doctors from './../Pages/Doctors/Doctors';
import DoctorDetails from '../Pages/Doctors/DoctorDetails';
import Contact from './../Pages/Contact';
import Services from './../Pages/Services';
import MyAccount from '../Dashboard/user-account/MyAccount';
import DashBoard from '../Dashboard/doctor-account/DashBoard';
import ProtectedRoute from './ProtectedRoute';

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
      <Route path='/users/profile/me' element=
      {<ProtectedRoute allowedRoles={['patient']}>
        <MyAccount />
      </ProtectedRoute>} />
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}>
        <DashBoard />
      </ProtectedRoute>} />
    </Routes>
  )
}

export default Routers
