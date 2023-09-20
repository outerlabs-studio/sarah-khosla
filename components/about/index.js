import { styled } from 'styled-components'
import { ArticleBaseText, Container, media, sizes } from 'styles'

export const FullHeightWrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${sizes.tablet}px) and (orientation: landscape) {
    height: ${(props) => (props.keepheight ? '100vh' : 'auto')};
  }
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
  column-gap: 2vw;
  row-gap: 2vh;

  ${media.tablet`
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  `};
`
export const DescriptionWrapper = styled.div`
  grid-column: 1 / span 2;

  ${media.phablet`grid-column: 1 / span 4;`}
`
export const LeftCol = styled.div`
  grid-column: 1 / span 1;

  ${media.phablet`grid-column: 1 / span 2;`}
`
export const RightCol = styled.div`
  grid-column: 2 / 2;

  ${media.phablet`grid-column: 3 / 5;`}
`
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ListTitle = styled(ArticleBaseText)`
  font-weight: 700 !important;
  margin-bottom: 1vh !important;

  ${media.phablet`margin-bottom: 1.5rem;!important`}
`
export const ImageWrapper = styled.div`
  grid-column: 4 / 6;
  grid-row: 1 / -5;
  max-width: 35vmax;
  position: relative;
  height: 40vw;
  ${media.tablet`
    max-width: unset;
    grid-column: 3 / 5;
  `}
  ${media.phablet`
    grid-column: 1 / 5;
    grid-row: 2;
    height: 80vh;
  `}
`
