import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className='container d-flex gap-4'>
      <Link to={'/'}><h4>Home</h4></Link>
      <Link to={'/cart'}><h4>Cart</h4></Link>
    </div>
    </>
  )
}
