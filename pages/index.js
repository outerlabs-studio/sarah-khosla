import { useEffect } from 'react'
import { Layout } from 'components'
import { Container, ArticleBaseText, TitleHeaderText, sizes } from 'styles'
import Image from 'next/image'
import { ProjectWrapper, SectionWrapper } from 'components/work'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import axios from 'axios'
import { blurHashToDataURL } from 'lib'

function Home({ data, seo }) {
  const seoDoc = seo.data.attributes
  const projectsDoc = data.data

  return (
    <Layout
      seo={{
        title: seoDoc.SEO.title,
        description: seoDoc.SEO.description,
        image: {
          url:
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            seoDoc.SEO.OG.data.attributes.url,
        },
        keywords: seoDoc.SEO.keywords.data,
      }}
      contact={seoDoc.contact}
      socials={seoDoc.socials}
    >
      <SectionWrapper>
        <Container>
          <TitleHeaderText>Work:</TitleHeaderText>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 330: 1, 440: 2, 820: 3 }}
          >
            <Masonry gutter="1vmax">
              {projectsDoc.map((item, i) => {
                const itemDoc = item.attributes

                return (
                  <ProjectWrapper key={i} href={`/${itemDoc.slug}`}>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        itemDoc.display.image.data.attributes.url
                      }
                      alt={
                        itemDoc.display.image.data.attributes.alternativeText
                      }
                      width={itemDoc.display.image.data.attributes.width}
                      height={itemDoc.display.image.data.attributes.height}
                      sizes={`(max-width: ${sizes.phone}px) 100vw, (max-width: ${sizes.tablet}px) 50vw, 33vw`}
                      placeholder="blur"
                      blurDataURL={blurHashToDataURL(
                        itemDoc.display.image.data.attributes.blurhash,
                      )}
                      className="top"
                    />
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        itemDoc.display.gif.data.attributes.url
                      }
                      alt={itemDoc.display.gif.data.attributes.alternativeText}
                      width={itemDoc.display.gif.data.attributes.width}
                      height={itemDoc.display.gif.data.attributes.height}
                      sizes={`(max-width: ${sizes.phone}px) 100vw, (max-width: ${sizes.tablet}px) 50vw, 33vw`}
                      placeholder="blur"
                      blurDataURL={blurHashToDataURL(
                        itemDoc.display.gif.data.attributes.blurhash,
                      )}
                      className="bottom"
                    />
                    <ArticleBaseText>{itemDoc.title}</ArticleBaseText>
                  </ProjectWrapper>
                )
              })}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </SectionWrapper>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  // https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
  // {
  //   fields: [
  //     'contact',
  //   ],
  //   populate: {
  //     'SEO': {
  //       populate: '*'
  //     },
  //     'socials': {
  //       populate: '*'
  //     }
  //    }
  // }
  const dataURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?sort[0]=rank:asc&fields[0]=slug&fields[1]=title&populate[display][populate]=*`
  const seoURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?fields[0]=contact&populate[SEO][populate]=*&populate[socials][populate]=*`
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  }

  const dataRes = await axios.get(dataURL, { headers })
  const seoRes = await axios.get(seoURL, { headers })

  const data = dataRes.data
  const seo = seoRes.data

  return { props: { data, seo } }
}
