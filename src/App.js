import React from 'react'
import Footer from './components/Footer'
import './App.css'
import styled from 'styled-components'

class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1>Saint Paul Soap</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
