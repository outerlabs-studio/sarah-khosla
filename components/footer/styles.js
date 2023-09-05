import { styled } from 'styled-components'
import { media } from 'styles'

export const PageFooter = styled.footer`
  position: relative;
  width: 100%;
  padding: ${(props) => (props.nopadding ? '0 0 2rem' : '15rem 0 2rem')};
`
export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15rem;
  align-items: bottom;

  ${media.desktop`grid-gap: 5rem;`};
  ${media.tablet`grid-gap: 0;`};
`
export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${media.thone`
    flex-direction: column;
    gap: ${(props) => (props.nopadding ? '0' : '1rem')};

    &:first-child {
      align-items: flex-start;
    }
  `};
`
export const DescriptionWrapper = styled.div`
  max-width: 10rem;
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
