import { styled } from 'styled-components'
import { ArticleBase } from 'styles'

export const FullHeightWrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
`
export const DescriptionWrapper = styled.div`
  max-width: 29rem;
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
export const ListTitle = styled(ArticleBase)`
  font-weight: 700;
  margin-bottom: 1.5rem;
`
