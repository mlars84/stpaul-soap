import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All } from '../styled/Home'
import imageOne from '../assets/IMG_3636.JPG'
import imageTwo from '../assets/IMG_3638.JPG'
import styles from '../theme/global.css'

class Contact extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <All>
            <div className='styledBody'>
              <h1>Contact</h1>
              <ul className='contact-list'>
                <li className='email'><a href='dantuma65@gmail.com'>dantuma65@gmail.com</a></li>
                <li className='phone'>651-220-2458</li>
              </ul>
            </div>
            <div className="container">
              <div className="grid">
                <div className="cell">
                  <img src={imageOne} alt="loading" className="responsive-image"/>
                </div>
                <div className="cell">
                  <img src={imageTwo} alt="loading" className="responsive-image"/>
                </div>
              </div>
            </div>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Contact
