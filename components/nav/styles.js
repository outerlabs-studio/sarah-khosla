import Link from 'next/link'
import { styled } from 'styled-components'
import { ArticleBase, Container, Z, media } from 'styles'

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
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;

  ${media.tablet`grid-template-columns: repeat(4, 1fr);`};

  /* ${media.desktop`grid-gap: 8rem;`};
  ${media.tablet`
    grid-template-columns: 1fr auto;
    grid-gap: 0;
  `}; */
`
export const Logo = styled(Link)`
  ${ArticleBase}
  width: fit-content;
  height: fit-content;
  grid-column: 1 / span 2;
  z-index: ${Z.PAGE_HEADER};
  color: rgb(${(props) => props.theme.text});
  text-decoration: none;

  ${media.thone`grid-column: 1 / span 3;`};
`
export const Column = styled.div`
  display: contents;
  grid-column: 4 / span 3;

  ${media.tablet`
    display: flex;
    justify-content: flex-end;
    align-items: normal;
  `};
  ${media.thone`grid-column: -1 / -1;`}

  &.nav {
    a {
      ${media.tablet`display: none;`};
    }
  }
`
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    width: fit-content;
    height: fit-content;

    &:hover {
      opacity: 0.8;
    }
  }

  &:first-child {
    grid-column: 4 / 4;
  }
  &:nth-child(2) {
    grid-column: 5 / 5;
  }
  &:last-child {
    grid-column: 6 / 6;
  }
`
export const DescriptionWrapper = styled.div`
  width: 11rem;
  display: ${(props) => (props.visible ? 'static' : 'none')};

  ${media.tablet`
    padding-left: 3rem;
    width: 15rem;
  `};
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
  height: 100%;
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
