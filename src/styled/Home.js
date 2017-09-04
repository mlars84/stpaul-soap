import styled from 'styled-components'
import img1 from '../../src/assets/img1.JPG'

export const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Oswald', 'Helvetica', sans-serif;
`

export const Header = styled.header`
  ${'' /* display: flex; */}
  color: black;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 3em;
  padding: 1vmin 1vmin 1vmin 1vmin;
  border: 1px solid black;
  background-color: #BF4342;
  ${'' /* background-image: url(${img1}); */}
  background-size: cover;
  background-repeat: no-repeat;
  back
`

export const Footer = styled.footer`
float: inherit;
color: black;
text-align: center;
font-family: 'Oswald';
font-style: normal;
font-weight: 400;
font-size: 1em;
`

export const Body = styled.body`
  background-color: #E7D7C1;
`
