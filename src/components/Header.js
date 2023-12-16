import React from 'react'
import logo from '../images/Logo .svg'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <img src={logo} alt="Logo" />
        <Nav/>
      </div>
    </header>
  )
}

export default Header
