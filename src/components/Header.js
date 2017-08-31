import React, {Component} from 'react'
import { Top } from '../styled/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Header extends React.Component {
  render() {
    return (
      <Top>
        <div>
          <h4>Saint Paul Soap</h4>
        </div>
      </Top>
    );
  }
}


export default Header;
