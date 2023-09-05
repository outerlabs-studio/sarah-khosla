import { useEffect } from 'react'
import { Layout } from 'components'
import { Container, ArticleBase, TitleHeader } from 'styles'
import Image from 'next/image'
import { ProjectWrapper, SectionWrapper } from 'components/work'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import axios from 'axios'
import { blurHashToDataURL } from 'lib'

// const items = [
//   {
//     title: 'HBO Max, Scene in Black Network',
//     image: '/images/hbo/cover.jpg',
//     gif: '/images/hbo/video.gif',
//     link: '/hbo',
//   },
//   {
//     title: 'Quativa, All-in-one',
//     image: '/images/quativa/cover.jpg',
//     gif: '/images/quativa/video.gif',
//     link: '/quativa',
//   },
//   {
//     title: 'Templum, Next Generation',
//     image: '/images/templum/cover.jpg',
//     gif: '/images/templum/video.gif',
//     link: '/templum',
//   },
//   {
//     title: 'Target, GiftNow',
//     image: '/images/giftnow/cover.jpg',
//     gif: '/images/giftnow/video.gif',
//     link: '/giftnow',
//   },
//   {
//     title: 'Iggy Rosales',
//     image: '/images/iggy/cover.jpg',
//     gif: '/images/iggy/video.gif',
//     link: '/iggy',
//   },
//   {
//     title: 'All Day Kitchens',
//     image: '/images/allday/cover.jpg',
//     gif: '/images/allday/video.gif',
//     link: '/allday',
//   },
// ]

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
          <TitleHeader>Work:</TitleHeader>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 440: 2, 820: 3 }}
          >
            <Masonry gutter="1rem">
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
                      sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
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
                      sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
                      placeholder="blur"
                      blurDataURL={blurHashToDataURL(
                        itemDoc.display.gif.data.attributes.blurhash,
                      )}
                      className="bottom"
                    />
                    <ArticleBase>{itemDoc.title}</ArticleBase>
                  </ProjectWrapper>
                )
              })}
              {/* {items.map((item, i) => (
              <ProjectWrapper key={i} href="/quativa">
                <Image
                  src={item.image}
                  alt={item.title}
                  quality={90}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="top"
                />
                <Image
                  src={item.gif}
                  alt={item.title}
                  quality={90}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="bottom"
                />
                <ArticleBase>{item.title}</ArticleBase>
              </ProjectWrapper>
            ))} */}
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
  const dataURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?sort[0]=id&fields[0]=slug&fields[1]=title&populate[display][populate]=*`
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
