import { styled } from 'styled-components'
import { ArticleBaseText, media } from 'styles'

export const FullHeightWrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;

  ${media.tablet`height: ${(props) => (props.keepheight ? '100vh' : 'auto')}`};
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;

  ${media.phablet`
    grid-template-columns: 1fr;
    padding: 3rem 0;
  `};
`
export const DescriptionWrapper = styled.div`
  max-width: 29rem;

  ${media.tablet`max-width: 20rem;`};
  ${media.phablet`max-width: 100%;`};
`
export const RightColumn = styled.div`
  display: flex;
  width: 100%;
  max-width: 48vw;
  justify-content: flex-end;
`
export const ImageWrapper = styled.div`
  max-width: 28rem;
  width: 100%;
  ${media.phablet`
    max-width: 100%;
    margin-top: 1rem;
  `};

  img {
    width: 100%;
    height: auto;
  }
`
export const ListRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;
  margin-top: 9vh;

  ${media.tablet`gap: 3rem;`};
  ${media.phablet`margin-top: 3rem;`};
`
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 13px !important;
    line-height: 14.5px !important;
    width: fit-content;
  }
`
export const ListTitle = styled(ArticleBaseText)`
  font-weight: 700;
  margin-bottom: 1.5rem;
`
