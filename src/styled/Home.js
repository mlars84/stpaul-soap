import styled from 'styled-components'

export const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* flex: 1 1 auto; */}
  position: relative;/* need this to position inner content */
  overflow-y: auto;
  align-items: center;
`

export const Header = styled.header`
  display: flex;
  max-width: 100%;
  justify-content: center;
  position: static;
  color: black;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 3em;
  padding: 1vmin 1vmin 1vmin 1vmin;
  border: 1px solid #E7D7C1;
  border-radius: 5px;
  background-color: #99a7b7;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1em 3em;
`

export const StlyedFooter = styled.footer`
display: flex;
flex: 0 0 auto;
justify-content: center;
color: #aa5647;
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
