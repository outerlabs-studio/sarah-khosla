import { styled } from 'styled-components'
import { darkTheme, media } from 'styles'

export const ProjectWrapper = styled.article`
  padding-top: 15rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
`
export const TitleWrapper = styled.div`
  width: 50%;
  max-width: 100rem;
  grid-column: 1 / span 3;

  ${media.phablet`grid-column: 1 / 7;`}
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4 / 7;

  ${media.phablet`grid-column: 1 / 7;`}
`
export const RoleWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 3rem;
`
export const ContentViewWrapper = styled.div`
  grid-column: 1 / 7;
  width: 100%;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: ${(props) => (props.split ? `repeat(2, 1fr)` : '1fr')};
  gap: 1rem;
  padding: ${(props) =>
    props.logos ? '10rem 0' : props.border ? '1.5rem' : 0};
  justify-items: ${(props) => (props.logos ? 'center' : 'unset')};
  ${(props) =>
    props.border &&
    `
    background-color: rgb(${darkTheme.body});
    `}

  img,
  video {
    width: ${(props) => (props.logos ? '15rem' : '100%')};
    height: auto;
    flex: 1;
  }
`
