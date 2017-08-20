import React, {Component} from 'react'
import '../App.css'

class NavBar extends Component {
  render() {
    return(
      <nav >
        <li><a className="AppNav" href="*">Home</a></li>
        <li><a className="AppNav" href="*">About</a></li>
        <li><a className="AppNav" href="*">Contact</a></li>
      </nav>
    )
  }
}

export default NavBar
