import styled from 'styled-components'

export const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* flex: 1 1 auto; */}
  position: relative;/* need this to position inner content */
  overflow-y: auto;
  align-items: center;
  font-family: 'Oswald', 'Helvetica', sans-serif;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: static;
  color: black;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 3em;
  padding: 1vmin 1vmin 1vmin 1vmin;
  border: 1px solid black;
  background-color: #BF4342;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  padding: 1em 3em;
`

export const StlyedFooter = styled.footer`
display: flex;
flex: 0 0 auto;
justify-content: center;
color: #BF4342;
text-align: center;
font-family: 'Oswald';
font-style: normal;
font-weight: 400;
font-size: 1em;
`

export const styledBody = styled.body`
  background-color: #E7D7C1;
  padding: 10em 10em;
`
