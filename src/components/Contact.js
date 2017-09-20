import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All } from '../styled/Home'


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
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Contact
