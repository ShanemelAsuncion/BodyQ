import React from 'react'
import logo from '../../assets/logo/logo.png'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div className='header'>
        <Link to='/'>
            <div className='header__logo'>
                <img className='header__logo-img' src={logo} />
                <h3 className='header__logo-name'>BodyQ</h3>
            </div>
        </Link>
        <div className='header__navlinks'>
            <Link to='/dashboard'>
                <p className='header__nav-link'>Dashboard</p>
            </Link>
            <Link to='/account'>
                <p className='header__nav-link'>Account</p>
            </Link>
        </div>
    </div>
  )
}

export default Header