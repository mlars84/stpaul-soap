import React, {Component} from 'react'
import '../App.css'

class NavBar extends Component {
  render() {
    return(
      <nav >
        <a className="AppNav" href="*">Home</a>
        <a className="AppNav" href="*">About</a>
        <a className="AppNav" href="*">Contact</a>
      </nav>
    )
  }
}

export default NavBar
