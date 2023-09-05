import { styled } from 'styled-components'
import { darkTheme, media } from 'styles'

export const ProjectWrapper = styled.article`
  padding-top: 15rem;
`
export const Hero = styled.div`
  display: flex;
  gap: 5rem;

  ${media.phablet`
    flex-direction: column;
    gap: 1rem;
  `};
`
export const TitleWrapper = styled.div`
  width: 50%;
  max-width: 100rem;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
`
export const RoleWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 3rem;
`
export const ContentViewWrapper = styled.div`
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
