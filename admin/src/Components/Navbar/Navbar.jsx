import React from 'react'
import './Navbar.css'
import navalogo from '../../assets/nav-logo.svg'
import navaProfile from '../../assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navalogo} alt="" className="nav-logo" />
      <img src={navaProfile}  className="nav-profile" alt="" />
    </div>
  )
}

export default Navbar
