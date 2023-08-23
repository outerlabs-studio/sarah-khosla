import { CustomLink, Layout } from 'components'
import {
  AboutPageWrapper,
  ContentWrapper,
  DescriptionWrapper,
  ImageWrapper,
  ListRow,
  ListTitle,
  ListWrapper,
  RightColumn,
} from 'components/about'
import Image from 'next/image'
import { ArticleBase, Container } from 'styles'

function About() {
  return (
    <AboutPageWrapper>
      <Layout>
        <Container>
          <ContentWrapper>
            <DescriptionWrapper>
              <ArticleBase>
                Sarah Khosla is an independent graphic designer and art director
                located in Los Angeles. She has a strong focus in branding,
                typography, and interaction design. She is currently
                freelancing, and working on a women’s based surf film. Formerly
                a Senior Art Director at Stink Studios.
              </ArticleBase>
              <ListRow>
                <ListWrapper>
                  <ListTitle>Contact</ListTitle>
                  <ArticleBase>
                    Los Angeles, California
                    <br /> (408) 416 1750 <br />
                    hello@sarahkhosla.com
                  </ArticleBase>
                </ListWrapper>
                <ListWrapper>
                  <ListTitle>Follow</ListTitle>
                  <CustomLink underline>WNW</CustomLink>
                  <CustomLink underline>LinkedIn</CustomLink>
                  <CustomLink underline>Instagram</CustomLink>
                </ListWrapper>
              </ListRow>
              <ListRow>
                <ListWrapper>
                  <ListTitle>Creative Services</ListTitle>
                  <ArticleBase>Brand Identity</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Typography</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>
                    Campaign Art Direction
                  </ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>
                    Editorial Design
                  </ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Print Design</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Digital Design</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Package Design</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>UI/UX Design</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Prototyping</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>
                    3D Motion Graphics
                  </ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>
                    Film/Digital Photography
                  </ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Video Editing</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Animation</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Casting</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Consulting</ArticleBase>
                </ListWrapper>
                <ListWrapper>
                  <ListTitle>Selected Clients</ListTitle>
                  <ArticleBase>Emmy's Cookies</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Google</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Harley Davidson</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>HBO Max</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Iggy Rosales</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>KitKat</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Keap</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>
                    Bonterra Organic Vineyeards
                  </ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Clarti</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>MetaMask</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Pure Cosmetics</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Robinhood</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Sentient Jet</ArticleBase>
                  <ArticleBase m={'0.45rem 0 0 0'}>Tesorio</ArticleBase>
                </ListWrapper>
              </ListRow>
            </DescriptionWrapper>
            <RightColumn>
              <ImageWrapper>
                <Image
                  src="/images/sarah.jpg"
                  alt="Sarah Khosla"
                  quality={90}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="top"
                />
              </ImageWrapper>
            </RightColumn>
          </ContentWrapper>
        </Container>
      </Layout>
    </AboutPageWrapper>
  )
}

export default About
