import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All } from '../styled/Home'

class Events extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <All>
            <div className='styledBody'>
              <h1>No Events currently schedule. Check back soon!</h1>
            </div>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Events
