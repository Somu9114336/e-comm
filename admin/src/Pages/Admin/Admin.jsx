import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Addproduct from '../../Components/Addproduct/Addproduct';
import { Routes, Route } from 'react-router-dom';
import LIstproduct from '../../Components/LIstproduct/LIstproduct';

const Admin = () => {
  return (
    <div className='admin'>

      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/listproduct' element={<LIstproduct />} />


      </Routes>
    </div>
  )
}

export default Admin
