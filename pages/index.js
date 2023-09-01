import { useEffect } from 'react'
import { Layout } from 'components'
import { Container, ArticleBase, TitleHeader } from 'styles'
import Image from 'next/image'
import { ProjectWrapper, SectionWrapper } from 'components/work'
import Masonry from 'react-responsive-masonry'
import axios from 'axios'

const items = [
  {
    title: 'HBO Max, Scene in Black Network',
    image: '/images/hbo/cover.jpg',
    gif: '/images/hbo/video.gif',
    link: '/hbo',
  },
  {
    title: 'Quativa, All-in-one',
    image: '/images/quativa/cover.jpg',
    gif: '/images/quativa/video.gif',
    link: '/quativa',
  },
  {
    title: 'Templum, Next Generation',
    image: '/images/templum/cover.jpg',
    gif: '/images/templum/video.gif',
    link: '/templum',
  },
  {
    title: 'Target, GiftNow',
    image: '/images/giftnow/cover.jpg',
    gif: '/images/giftnow/video.gif',
    link: '/giftnow',
  },
  {
    title: 'Iggy Rosales',
    image: '/images/iggy/cover.jpg',
    gif: '/images/iggy/video.gif',
    link: '/iggy',
  },
  {
    title: 'All Day Kitchens',
    image: '/images/allday/cover.jpg',
    gif: '/images/allday/video.gif',
    link: '/allday',
  },
]

// to-do: add blur-hash to images
function Home({ data }) {
  const doc = data.data.attributes

  return (
    <Layout
      seo={{
        title: doc.SEO.title,
        description: doc.SEO.description,
        image: {
          url:
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            doc.SEO.OG.data.attributes.url,
        },
        keywords: doc.SEO.keywords.data,
      }}
      contact={doc.contact}
      socials={doc.socials}
    >
      <SectionWrapper>
        <Container>
          <TitleHeader>Work:</TitleHeader>
          <Masonry columnsCount={3} gutter="1rem">
            {items.map((item, i) => (
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
            ))}
          </Masonry>
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
  const res = await axios.get(
    process.env.NEXT_PUBLIC_STRAPI_API_URL +
      '/api/global?fields[0]=contact&populate[SEO][populate]=*&populate[socials][populate]=*',
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    },
  )
  const data = res.data

  return { props: { data } }
}
