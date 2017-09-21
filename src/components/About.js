import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All } from '../styled/Home'
import { CSSTransitionGroup } from 'react-transition-group'

class About extends Component {
  constructor (props) {
    super (props)

    this.state = {
      text: 'stuff'
    }
  }
  render() {
    console.log(this.state)
    return(
      <MuiThemeProvider>
        <All>
            <div className='styledBody'>
              <h1 className='about'>About</h1>
              <p>This is the about section. Emily plays cello and wants to play music
              for yoga practicioners.</p>
            </div>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default About
