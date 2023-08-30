import { styled } from 'styled-components'
import { darkTheme } from 'styles'

export const ProjectWrapper = styled.article`
  padding-top: 15rem;
`
export const Hero = styled.div`
  display: flex;
  gap: 5rem;
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
  ${(props) =>
    props.border &&
    `
    background-color: rgb(${darkTheme.body});
    padding: 1.5rem;
    `}

  img,
  video {
    width: 100%;
    height: auto;
    flex: 1;
  }
`
