import { ProjectGrid, ProjectWrapper, SectionWrapper } from 'components/work'
import { Container } from 'styles'
import Image from 'next/image'
import { ArticleBase, TitleHeader } from 'styles/text'

// to-do: add blur-hash to images
export default function Home() {
  return (
    <SectionWrapper>
      <Container>
        <TitleHeader>Work:</TitleHeader>
        <ProjectGrid>
          {/* <ProjectWrapper>
            <Image
              src="/images/hbo/cover.jpg"
              alt="hbo"
              quality={90}
              width={0}
              height={0}
              sizes="100vw"
            />
            <ArticleBase>HBO Max, Scene in Black Network</ArticleBase>
          </ProjectWrapper>
          <ProjectWrapper>
            <Image
              src="/images/giftnow/cover.jpg"
              alt="hbo"
              quality={90}
              width={0}
              height={0}
              sizes="100vw"
            />
            <ArticleBase>Target, GiftNow</ArticleBase>
          </ProjectWrapper>
          <ProjectWrapper>
            <Image
              src="/images/quativa/cover.jpg"
              alt="hbo"
              quality={90}
              width={0}
              height={0}
              sizes="100vw"
            />
            <ArticleBase>Quativa, All-in=one</ArticleBase>
          </ProjectWrapper>
          <ProjectWrapper>
            <Image
              src="/images/iggy/cover.jpg"
              alt="hbo"
              quality={90}
              width={0}
              height={0}
              sizes="100vw"
            />
            <ArticleBase>Iggy Rosales</ArticleBase>
          </ProjectWrapper>
          <ProjectWrapper>
            <Image
              src="/images/templum/cover.jpg"
              alt="hbo"
              quality={90}
              width={0}
              height={0}
              sizes="100vw"
            />
            <ArticleBase>Templum, Next Generation</ArticleBase>
          </ProjectWrapper>
          <ProjectWrapper>
            <Image
              src="/images/allday/cover.jpg"
              alt="hbo"
              quality={90}
              width={0}
              height={0}
              sizes="100vw"
            />
            <ArticleBase>All Day Kitchens</ArticleBase>
          </ProjectWrapper> */}
        </ProjectGrid>
      </Container>
    </SectionWrapper>
  )
}
