'use client'

import {
  LinksWrapper,
  PageFooter,
  ContentWrapper,
  DescriptionWrapper,
  Column,
  LinkWrapper,
} from './styles'
import { ArticleBase, Container } from 'styles'
import { useLenis } from '@studio-freight/react-lenis'
import CustomLink from 'components/link'

const Footer = () => {
  const lenis = useLenis()

  return (
    <PageFooter>
      <Container>
        <ContentWrapper>
          <Column>
            <ArticleBase>&copy; Sarah Khosla</ArticleBase>
            <DescriptionWrapper>
              <ArticleBase>
                Los Angeles, California{' '}
                <CustomLink href="mailto:hello@sarahkhosla.com" target="_blank">
                  hello@sarahkhosla.com
                </CustomLink>
              </ArticleBase>
            </DescriptionWrapper>
          </Column>
          <Column>
            <LinksWrapper>
              <CustomLink href="/linkedin" target="_blank">
                Linkedin,
              </CustomLink>
              <CustomLink href="/wnw" target="_blank">
                WNW,
              </CustomLink>
              <CustomLink href="/instagram" target="_blank">
                Instagram
              </CustomLink>
            </LinksWrapper>
            <LinkWrapper>
              <CustomLink onClick={() => lenis.scrollTo('top')}>
                Back to top
              </CustomLink>
            </LinkWrapper>
          </Column>
        </ContentWrapper>
      </Container>
    </PageFooter>
  )
}

export default Footer
