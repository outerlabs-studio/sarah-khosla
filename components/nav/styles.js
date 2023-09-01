import { styled } from 'styled-components'
import { Z } from 'styles'

export const PageHeader = styled.header`
  position: ${(props) => (props.notfixed ? 'relative' : 'fixed')};
  width: 100%;
  padding: 1rem 0;
  overflow: hidden;
  background-color: rgb(${(props) => props.theme.body});
  z-index: ${Z.PAGE_HEADER};
`
export const NavWrapper = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 15rem;
`
export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    opacity: 0.8;
  }
`
export const DescriptionWrapper = styled.div`
  max-width: 10rem;
`
export const LineWrapper = styled.div`
  overflow: hidden;
`
