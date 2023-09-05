import { styled } from 'styled-components'
import { Container, Z, media } from 'styles'

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

  .logo {
    z-index: ${Z.PAGE_HEADER};
  }

  ${media.desktop`grid-gap: 10rem;`};
  ${media.tablet`
    grid-template-columns: 1fr auto;
    grid-gap: 0;
  `};
`
export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    justify-content: normal;
    align-items: normal;
  `};

  a {
    ${media.tablet`display: none;`};

    &:hover {
      opacity: 0.8;
    }
  }
`
export const DescriptionWrapper = styled.div`
  max-width: 10rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  ${media.tablet`margin-left: 3rem;`};
  ${media.phone`display: none;`};
`
export const LineWrapper = styled.div`
  overflow: hidden;
`
export const Hamburger = styled.button`
  position: relative;
  outline: none;
  height: 20px;
  width: 20px;
  border: 0px;
  padding: 0px;
  background: transparent;
  transition: all 250ms ease-out;
  cursor: pointer;
  display: none;
  z-index: ${Z.PAGE_HEADER};

  ${media.tablet`display: flex;`};

  &:before,
  &:after {
    content: '';
    width: 20px;
    height: 1.25px;
    position: absolute;
    background: rgb(${(props) => props.theme.text});
    transition: all 250ms ease-out;
    will-change: transform;
  }

  &:before {
    transform: ${(props) =>
      props.menuOpen ? 'translateY(5px)' : 'translateY(2px)'};
  }

  &:after {
    transform: ${(props) =>
      props.menuOpen ? 'translateY(5px)' : 'translateY(8px)'};
  }
`

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  outline: 0;
  z-index: ${Z.MENU};

  ${media.tablet`display: block;`};
`
export const MenuWrapper = styled(Container)`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  padding-top: 15vh;
  background-color: rgb(${(props) => props.theme.body});
  width: 100vw;
  height: 100vh;
`
export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  a {
    font-size: 28px !important;
    line-height: 29px !important;
  }
`
export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`
