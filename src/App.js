import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Events from './components/Events'
import Nav from './components/Nav'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
        <Nav />
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/contact' component={ Contact } />
        <Route path='/events' component={ Events } />
        <Footer />
      </div>
    </BrowserRouter>
    )
  }
}

export default App
