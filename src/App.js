import React from 'react'
import Footer from './components/Footer'
import './App.css'
import styled from 'styled-components';
const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: palevioletred;
  color: white;
  border: 2px solid palevioletred;
`


class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1>Saint Paul Soap</h1><Button>Button</Button>
        <Footer />
      </div>
    );
  }
}

export default App;
