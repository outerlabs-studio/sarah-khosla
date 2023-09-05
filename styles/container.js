import { styled } from 'styled-components'
import media from './media'

const Container = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;

  ${media.phablet`
    padding-right: 1rem;
    padding-left: 1rem;
  `};
  ${media.phone`
    padding-right: 3.5vw;
    padding-left: 3.5vw; 
  `};
`

export default Container
