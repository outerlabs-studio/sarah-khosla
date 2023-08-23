import { styled } from 'styled-components'
import { ArticleBase } from 'styles'

export const AboutPageWrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContentWrapper = styled.div`
  display: flex;
  gap: 5rem;
`
export const DescriptionWrapper = styled.div`
  max-width: 29rem;
  padding: 6rem 0 3vh;
`
export const RightColumn = styled.div`
  display: flex;
  width: 100%;
  max-width: 48vw;
  justify-content: flex-end;
  padding: 6rem 0 3vh;
`
export const ImageWrapper = styled.div`
  max-width: 30rem;

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
  }
`
export const ListTitle = styled(ArticleBase)`
  font-weight: 700;
  margin-bottom: 1.5rem;
`
