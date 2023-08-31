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

const Footer = ({ email, socials }) => {
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
                    href={
                      email ? `mailto:${email}` : 'mailto:hello@sarahkhosla.com'
                    }
                    target="_blank"
                  >
                    {email ? email : 'hello@sarahkhosla.com'}
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
                {socials &&
                  socials.map((item, index, row) => (
                    <CustomLink href={item.url} target="_blank" key={index}>
                      {item.text}
                      {index + 1 === row.length ? null : ','}
                    </CustomLink>
                  ))}
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
