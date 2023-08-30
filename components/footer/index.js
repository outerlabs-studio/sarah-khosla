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
import { useRouter } from 'next/router'

const Footer = () => {
  const lenis = useLenis()
  const router = useRouter()

  return (
    <PageFooter
      nopadding={router.pathname === '/about' || router.pathname === '/404'}
    >
      <Container>
        <ContentWrapper>
          <Column>
            <ArticleBase>&copy; Sarah Khosla</ArticleBase>
            {router.pathname === '/' || router.pathname === '/playground' ? (
              <DescriptionWrapper>
                <ArticleBase>
                  Los Angeles, California{' '}
                  <CustomLink
                    href="mailto:hello@sarahkhosla.com"
                    target="_blank"
                  >
                    hello@sarahkhosla.com
                  </CustomLink>
                </ArticleBase>
              </DescriptionWrapper>
            ) : (
              <div />
            )}
          </Column>
          <Column>
            {router.pathname === '/' ||
            router.pathname === '/playground' ||
            router.pathname === '/[project]' ? (
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
            ) : (
              <div />
            )}
            <LinkWrapper>
              {router.pathname === '/about' || router.pathname === '/404' ? (
                <CustomLink href="/">Back to homepage</CustomLink>
              ) : (
                <CustomLink onClick={() => lenis.scrollTo('top')}>
                  Back to top
                </CustomLink>
              )}
            </LinkWrapper>
          </Column>
        </ContentWrapper>
      </Container>
    </PageFooter>
  )
}

export default Footer
