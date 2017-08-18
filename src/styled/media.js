import {css} from 'styled-components'


const media = {
  handheld: (...args) => css`
    @media (max-width: 800px) {
      ${ css(...args) }
    }
  `
}

export default media
