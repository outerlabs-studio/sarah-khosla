import { styled } from 'styled-components'
import { Z } from 'styles'

export const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  overflow: hidden;
  z-index: ${Z.PAGE_HEADER};
`
export const NavWrapper = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15rem;
  align-items: center;
`
export const Column = styled.div`
  display: flex;
  justify-content: space-between;

  a:hover {
    opacity: 0.8;
  }
`
export const DescriptionWrapper = styled.div`
  max-width: 10rem;
  position: absolute;
  left: 28%;
`
export const LineWrapper = styled.div`
  overflow: hidden;
`
