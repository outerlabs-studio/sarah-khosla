import { styled } from 'styled-components'
import { darkTheme, media } from 'styles'

export const ProjectWrapper = styled.article`
  display: grid;
  grid-template-columns: ${(props) =>
    props.logos ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)'};
  grid-gap: 1rem;
  padding-top: ${(props) => (props.logos ? '10vh' : '35vh')};
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
  grid-column: ${(props) => (props.logos ? '3 / 3' : '1 / 7')};
  width: 100%;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: ${(props) => (props.split ? `repeat(2, 1fr)` : '1fr')};
  gap: 1rem;
  padding: ${(props) => (props.logos ? '10vw 0' : props.border ? '1.5rem' : 0)};
  justify-items: ${(props) => (props.logos ? 'center' : 'unset')};
  ${(props) =>
    props.border &&
    `
    background-color: rgb(${darkTheme.body});
    `}

  ${media.thone`
    grid-column: ${(props) => (props.logos ? '2 / 5' : '1 / 7')};
  `}

  img,
  video {
    width: 100%;
    height: auto;
    flex: 1;
  }
`
