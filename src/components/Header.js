import React from 'react'
// import { Link } from 'react-router-dom'
import  '../styles/Header.css'
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <>
    <div className='Navbar'>
        <h2 className='name'>Abhinav</h2>
        <nav className='Nav'>
        

<NavLink className='home' to="/">Home</NavLink>
<NavLink className= 'about' to="/about">About</NavLink>
<NavLink className='skills'to="/skills">Skills</NavLink>
<NavLink className='works' to="/works">Works</NavLink>
<NavLink className='contact
' to="/contact">Contact</NavLink>

        </nav>
    </div>
    </>
  )
}

export default Header