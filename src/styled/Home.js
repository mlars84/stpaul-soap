import styled from 'styled-components'
import logo from '../assets/stpsoapLogo.png'

export const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  position: relative;
  align-items: center;
`

export const Header = styled.header`
  display: flex;
  max-width: 100%;
  justify-content: center;
  position: static;
  color: black;
  text-shadow: 1px 1px 30px #f0f5d4;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 3em;
  border: 1px solid #E7D7C1;
  border-radius: 20px;
  background-color: #779c52;
  width: 100vw;
  background-size: auto;
  background-repeat: no-repeat;
  padding: 1em 2.5em 2em 1em;
`

export const MainText = styled.h3`
  display: flex;
  justify-content: center;
  margin: 10vh 10vw 2vh 10vw;
`

export const Divider = styled.hr`
  width: 80vw;
`

// export const Header = styled.header`
//   display: flex;
//   max-width: 100%;
//   justify-content: center;
//   background-image: url(${logo});
//   position: static;
//   color: black;
//   text-align: center;
//   font-family: 'Dancing Script', cursive;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 3em;
//   border: 1px solid #E7D7C1;
//   border-radius: 5px;
//   background-color: white;
//   background-size: auto;
//   background-repeat: no-repeat;
//   padding: 1em 3em;
// `

export const StlyedFooter = styled.footer`
display: flex;
flex: 0 0 auto;
justify-content: center;
color: black;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1em;
`

export const styledBody = styled.body`
  background-color: #E7D7C1;
  padding: 10em 10em;
`
