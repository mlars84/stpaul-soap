import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
