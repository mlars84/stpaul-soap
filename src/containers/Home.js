import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All, Body, Header, Footer } from '../styled/Home'

class Home extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <All>
          <Header>
            StPaulSoap.COM
          </Header>
          <Body>
            This is the body
          </Body>
          <Footer>
            thanks for stopping by :)
          </Footer>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Home
