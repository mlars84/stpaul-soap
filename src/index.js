import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import Routes from './routes'
import App from './App'
import NavBar from './containers/NavBar'
import Home from './containers/Home'

ReactDOM.render(
  <div>
    <App />
    <Home />
    <NavBar />
  </div>,
  document.getElementById('root')
)
