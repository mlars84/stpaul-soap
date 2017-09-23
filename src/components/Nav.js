import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


function Nav () {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/contact'>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/events'>
          Events
        </NavLink>
      </li>
    </ul>
  )
}//end Nav function

export default Nav
