import axios from 'axios'
import { Layout } from 'components'
import { FullHeightWrapper } from 'components/about'
import { styled } from 'styled-components'
import { Container, ArticleBaseText, TitleHeaderText } from 'styles'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function PageNotFound({ seo }) {
  const seoDoc = seo.data.attributes

  return (
    <FullHeightWrapper keepheight>
      <Layout
        seo={{ title: `Page not found | ${seoDoc.SEO.title}` }}
        contact={seoDoc.contact}
        socials={seoDoc.socials}
      >
        <SectionWrapper>
          <Container>
            <TitleHeaderText>404</TitleHeaderText>
            <ArticleBaseText>
              Either the internet is broken or we couldn’t find the file that
              you were looking for.
            </ArticleBaseText>
          </Container>
        </SectionWrapper>
      </Layout>
    </FullHeightWrapper>
  )
}

export default PageNotFound

export async function getStaticProps({ params }) {
  const seoURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?fields[0]=contact&populate[SEO][populate]=*&populate[socials][populate]=*`
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  }

  const seoRes = await axios.get(seoURL, { headers })
  const seo = seoRes.data

  return { props: { seo } }
}
