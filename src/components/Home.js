import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All, Header, testImg } from '../styled/Home'
import Footer from './Footer'
import styledBody from '../styled/Home'
import { CSSTransitionGroup } from 'react-transition-group'
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
