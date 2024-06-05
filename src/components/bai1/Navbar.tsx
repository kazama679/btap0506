import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <NavLink to='/bai1Home'>Home</NavLink>
      <NavLink to='/bai1About'>About</NavLink>
      <NavLink to='/bai1Contact'>Contact</NavLink>
      <br />
      <Outlet /> 
    </div>
  )
}
