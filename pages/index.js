import { useEffect } from 'react'
import { Layout } from 'components'
import { Container } from 'styles'
import Image from 'next/image'
import { ProjectWrapper, SectionWrapper } from 'components/work'
import { ArticleBase, TitleHeader } from 'styles/text'
import Masonry from 'react-responsive-masonry'

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
function Home() {
  return (
    <Layout>
      <SectionWrapper>
        <Container>
          <TitleHeader>Work:</TitleHeader>
          <Masonry columnsCount={3} gutter="1rem">
            {items.map((item, i) => (
              <ProjectWrapper key={i}>
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
