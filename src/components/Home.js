import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All, Header, testImg } from '../styled/Home'
import Footer from './Footer'
import styledBody from '../styled/Home'
import { CSSTransitionGroup } from 'react-transition-group'
import imageOne from '../assets/IMG_3648.JPG'
import imageTwo from '../assets/IMG_3631.JPG'
import imageThree from '../assets/IMG_3632.JPG'
import imageFour from '../assets/IMG_3633.JPG'
import imageFive from '../assets/IMG_3634.JPG'
import imageSix from '../assets/IMG_3635.JPG'
// import LoadAssets from 'react-asset-loader'



class Home extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <All>
          <Header>
            StPaulSoap.COM
          </Header>
          <styledBody className="styledBody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="container">
              <div className="grid">
                <div className="cell">
                  <img src={imageOne} className="responsive-image" />
                  <h3>All Five!</h3>
                </div>
                <div className="cell">
                  <img src={imageTwo} className="responsive-image" />
                  <h3>Mojito</h3>
                </div>
                <div className="cell">
                  <img src={imageThree} className="responsive-image" />
                  <h3>Blah Blah</h3>
                </div>
                <div className="cell">
                  <img src={imageFour} className="responsive-image" />
                  <h3>All Five!</h3>
                </div>
                <div className="cell">
                  <img src={imageFive} className="responsive-image" />
                  <h3>All Five!</h3>
                </div>
                <div className="cell">
                  <img src={imageSix} className="responsive-image" />
                  <h3>Vetiver</h3>
                </div>
              </div>
            </div>

            {/* <div class="container">
              <div class="images">
                <img className="imageOne" src={imageOne} alt="Loading . . ." />
                <img className="imageTwo" src={imageTwo} alt="Loading . . ." />
                <img className="imageThree" src={imageThree} alt="Loading . . ." />
              </div>
            </div> */}
            {/* <LoadAssets assets={[{"uri":"/static/images/IMG_3629.JPG"}]} /> */}
            {/* <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {Header}
            </CSSTransitionGroup> */}
          </styledBody>
        </All>
      </MuiThemeProvider>
    )
  }
}//end Home

export default Home
