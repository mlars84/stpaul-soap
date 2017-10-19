import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All } from '../styled/Home'
import { CSSTransitionGroup } from 'react-transition-group'
import imageOne from '../assets/IMG_3642.JPG'
import imageTwo from '../assets/IMG_3630.JPG'

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
              <h3>Emily Dantuma began making soap in her garage 7 years ago and has since perfected
              her recipe and sold soap at craft sales throughout the Twin Cities.</h3>
            </div>
            <div className="container">
              <div className="grid">
                <div className="cell">
                  <img className="imageOne" src={imageOne} alt="" className="responsive-image"/>
                </div>
                <div className="cell">
                  <img className="imageOne" src={imageTwo} alt="" className="responsive-image"/>
                </div>
              </div>
            </div>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default About
