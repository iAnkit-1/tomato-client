import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Find some nice dishes here for you.</p>
        <a href='#explore-menu' className='view-menu'>View Menu</a>
      </div>
    </div>
  )
}

export default Header
