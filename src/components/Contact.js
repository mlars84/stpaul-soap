import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All } from '../styled/Home'
import imageOne from '../assets/IMG_3636.JPG'
import imageTwo from '../assets/IMG_3638.JPG'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Contact extends Component {
  constructor (props) {
    super (props)
  }
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
            <form>
              <h3>Email order form: </h3>
              <div>
                <TextField
                  hintText="Name"
                /><br />
                <TextField
                  hintText="Phone"
                /><br />
                <TextField
                  hintText="Email"
                /><br />
                <br />
                <TextField
                  hintText="Flavor?"
                />
                <TextField
                  hintText="Quantity"
                />
                <FlatButton label="Submit" primary={true} />
              </div>
            </form>
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
