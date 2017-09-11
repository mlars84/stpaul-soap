import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All, Header, Footer, testImg } from '../styled/Home'
import Body from './Body'
import imgOne from '../styled/img'

class Home extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <All>
          <Header>
            StPaulSoap.COM
          </Header>
          {/* <imgOne {src="src/assets/img1.JPG"} /> */}
          <Body />
          <Footer className="footer">
            thanks for stopping by :)
          </Footer>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Home
