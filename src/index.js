import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import Routes from './routes'
import App from './App'
import NavBar from './containers/NavBar'


ReactDOM.render(
  <NavBar
  />,
  document.getElementById('root')
)
