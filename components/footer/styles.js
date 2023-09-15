import { styled } from 'styled-components'
import { media } from 'styles'

export const PageFooter = styled.footer`
  position: relative;
  width: 100%;
  padding: ${(props) => (props.nopadding ? '0 0 1vw' : '15vw 0 1vw')};

  ${media.desktop`padding: ${(props) =>
    props.nopadding ? '0 0 1rem' : '15rem 0 1rem'};`}
`
export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15rem;
  align-items: bottom;

  ${media.desktop`grid-gap: 5rem;`}
  ${media.tablet`grid-gap: 5vw;`}
  ${media.phablet`grid-gap: 0;`}
  ${media.phone`
    grid-template-columns: ${(props) =>
      props.nopadding ? 'repeat(2, 1fr)' : '1fr'};
    grid-gap: 1rem;
  `}
`
export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &:first-child {
    ${media.thone`align-items: flex-start;`}
    ${media.phone`flex-direction: column;`}
  }

  ${media.thone`
    flex-direction: column;
    gap: ${(props) => (props.nopadding ? '0' : '1rem')};
  `};
  ${media.phone`
    align-items: flex-start;
    flex-direction: row;
  `}
`
export const LinksWrapper = styled.div`
  display: flex;
  gap: 5px;
`
export const LinkWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 5px;

    &:before {
      content: '';
      height: 10px;
      width: 10px;
      background-color: rgb(${(props) => props.theme.text});
      border-radius: 50%;
      display: inline-block;
    }
  }
`
