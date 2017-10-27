import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All, MainText } from '../styled/Home'
import imageOne from '../assets/IMG_3636.JPG'
import imageTwo from '../assets/IMG_3638.JPG'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Contact extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <All>
            <div className='styledBody'>
              <h1>Contact</h1>
              <ul className='contact-list'>
                <li>Emily Dantuma</li>
                <li className='email'><a href='dantuma65@gmail.com'>dantuma65@gmail.com</a></li>
                <li className='phone'>651-220-2458</li>
              </ul>
            </div>
            <form className="form">
              <MainText>Email order form: (Not currently functional... Email Emily directly for all orders.)</MainText>
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
            <div className="container2">
              <div className="grid2">
                <div className="cell2">
                  <img src={imageOne} alt="loading" className="responsive-image2"/>
                </div>
                <div className="cell2">
                  <img src={imageTwo} alt="loading" className="responsive-image2"/>
                </div>
              </div>
            </div>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Contact
