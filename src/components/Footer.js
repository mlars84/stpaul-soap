import React from 'react'
import { StlyedFooter } from '../styled/Home'

class Footer extends React.Component {
  render() {
    return (
      <StlyedFooter>
        <div>
          <h4>Saint Paul Soap</h4>
          <h5>Site built with ReactJS <a href="http://www.matthewlarsondev.com/">Matthew Larson</a></h5>
        </div>
      </StlyedFooter>
    );
  }
}


export default Footer;
