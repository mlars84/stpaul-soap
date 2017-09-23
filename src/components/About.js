import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All } from '../styled/Home'
import { CSSTransitionGroup } from 'react-transition-group'
import imageOne from '../assets/IMG_3642.JPG'

class About extends Component {
  constructor (props) {
    super (props)
    console.log('props', props)
  }
  render() {
    console.log('this.props:', this.props)
    return(
      <MuiThemeProvider>
        <All>
            <div className='styledBody'>
              <h1 className='about'>About</h1>
              <p>This is the about section. Saint Paul Soap is good soap.</p>
            </div>
            <div class="container">
              <div class="grid">
                <div class="cell">
                  <img className="imageOne" src={imageOne} alt="" class="responsive-image"/>
                </div>
              </div>
            </div>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default About
