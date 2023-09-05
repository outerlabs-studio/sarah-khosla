import { styled } from 'styled-components'
import { ArticleBaseText, Container, media } from 'styles'

export const FullHeightWrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;

  ${media.tablet`height: ${(props) => (props.keepheight ? '100vh' : 'auto')};`}
`
export const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;

  ${media.phablet`
    padding-top: 2rem;
    padding-bottom: 2rem;
  `}
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 2rem;

  ${media.tablet`grid-template-columns: repeat(4, 1fr);`};
`
export const DescriptionWrapper = styled.div`
  grid-column: 1 / span 2;

  ${media.phablet`grid-column: 1 / span 6;`}
`
export const LeftCol = styled.div`
  grid-column: 1 / span 1;

  ${media.phablet`grid-column: 1 / span 3;`}
`
export const RightCol = styled.div`
  grid-column: 2 / 2;

  ${media.phablet`grid-column: 4 / 6;`}
`
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ListTitle = styled(ArticleBaseText)`
  font-weight: 700 !important;
`
export const ImageWrapper = styled.div`
  grid-column: 4 / 6;
  grid-row: 1 / -5;
  max-width: 35rem;
  ${media.tablet`grid-column: 3 / 6;`}
  ${media.phablet`
    grid-column: 1 / span 6;
    grid-row: 2;
  `}

  img {
    width: 100%;
    height: auto;
  }
`
