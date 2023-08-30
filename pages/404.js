import { Layout } from 'components'
import { FullHeightWrapper } from 'components/about'
import { styled } from 'styled-components'
import { Container, ArticleBase, TitleHeader } from 'styles'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function PageNotFound() {
  return (
    <FullHeightWrapper>
      <Layout>
        <SectionWrapper>
          <Container>
            <TitleHeader>404</TitleHeader>
            <ArticleBase>
              Either the internet is broken or we couldn’t find the file that
              you were looking for.
            </ArticleBase>
          </Container>
        </SectionWrapper>
      </Layout>
    </FullHeightWrapper>
  )
}

export default PageNotFound
