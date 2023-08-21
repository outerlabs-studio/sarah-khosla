import { ProjectGrid, ProjectWrapper, SectionWrapper } from 'components/work'
import { Container } from 'styles'
import Image from 'next/image'
import { ArticleBase, TitleHeader } from 'styles/text'

const items = [
  {
    title: 'HBO Max, Scene in Black Network',
    image: '/images/hbo/cover.jpg',
    gif: '/images/hbo/video.gif',
    link: '/hbo',
  },
  {
    title: 'Target, GiftNow',
    image: '/images/giftnow/cover.jpg',
    gif: '/images/giftnow/video.gif',
    link: '/giftnow',
  },
  {
    title: 'Quativa, All-in-one',
    image: '/images/quativa/cover.jpg',
    gif: '/images/quativa/video.gif',
    link: '/quativa',
  },
  {
    title: 'Iggy Rosales',
    image: '/images/iggy/cover.jpg',
    gif: '/images/iggy/video.gif',
    link: '/iggy',
  },
  {
    title: 'Templum, Next Generation',
    image: '/images/templum/cover.jpg',
    gif: '/images/templum/video.gif',
    link: '/templum',
  },
  {
    title: 'All Day Kitchens',
    image: '/images/allday/cover.jpg',
    gif: '/images/allday/video.gif',
    link: '/allday',
  },
]

// to-do: add blur-hash to images
export default function Home() {
  return (
    <SectionWrapper>
      <Container>
        <TitleHeader>Work:</TitleHeader>
        <ProjectGrid>
          {items.map((item) => (
            <ProjectWrapper key={item.title}>
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
        </ProjectGrid>
      </Container>
    </SectionWrapper>
  )
}
