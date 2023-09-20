import { useCallback, useEffect, useRef, useState } from 'react'
import { ArticleBaseText, Container, sizes } from 'styles'
import {
  Column,
  DescriptionWrapper,
  Hamburger,
  LineWrapper,
  LinkWrapper,
  Logo,
  MenuContainer,
  MenuFooter,
  MenuLinks,
  MenuWrapper,
  NavWrapper,
  PageHeader,
} from './styles'
import { CustomLink } from 'components'
// import { SplitText } from 'lib'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import gsap from 'gsap'
import { useRouter } from 'next/router'
import { useLenis } from '@studio-freight/react-lenis'
import Div100vh from 'react-div-100vh'

const Nav = ({ email }) => {
  let sectionRef = useRef()
  let navTextRef = useRef([])
  const lenis = useLenis()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const { width } = useWindowSize()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          start: '20px top',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(navTextRef.current, {
        yPercent: 100,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.inOut',
      })
    })

    return () => ctx.revert()
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  const handleResize = useCallback(() => {
    if (width > sizes.tablet && menuOpen) toggleMenu()
  }, [menuOpen, toggleMenu])

  const handleKeydown = useCallback(
    (e) => {
      if (!menuOpen) return

      if (e.which === 27 || e.key === 'Escape') toggleMenu()
    },
    [menuOpen, toggleMenu],
  )

  useEffect(() => {
    if (lenis) {
      if (menuOpen) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }
  }, [menuOpen, lenis])

  return (
    <PageHeader
      ref={(el) => (sectionRef = el)}
      notfixed={router.pathname === '/about' || router.pathname === '/404'}
    >
      <Container>
        <NavWrapper>
          <Logo href={'/'}>
            Sarah Khosla
            <br /> Graphic Design & Art Direction
          </Logo>

          <DescriptionWrapper visible={router.pathname === '/'}>
            <LineWrapper>
              <ArticleBaseText ref={(el) => (navTextRef.current[0] = el)}>
                Previously a Sr. Art Director
              </ArticleBaseText>
            </LineWrapper>
            <LineWrapper>
              <ArticleBaseText ref={(el) => (navTextRef.current[1] = el)}>
                at Stink Studios, currently
              </ArticleBaseText>
            </LineWrapper>
            <LineWrapper>
              <ArticleBaseText ref={(el) => (navTextRef.current[2] = el)}>
                freelancing.
              </ArticleBaseText>
            </LineWrapper>
          </DescriptionWrapper>

          <Column className="nav">
            <LinkWrapper>
              <CustomLink href="/">Selected work</CustomLink>
            </LinkWrapper>
            <LinkWrapper>
              <CustomLink href="/playground">Playground</CustomLink>
            </LinkWrapper>
            <LinkWrapper>
              <CustomLink href="/about">About</CustomLink>
            </LinkWrapper>
            <Hamburger
              menuOpen={menuOpen}
              onClick={toggleMenu}
              aria-label="Menu"
            />
          </Column>
        </NavWrapper>
        {menuOpen && (
          <MenuContainer>
            <Div100vh>
              <MenuWrapper>
                <MenuLinks>
                  <CustomLink href="/">Selected work</CustomLink>
                  <CustomLink href="/about">About</CustomLink>
                  <CustomLink href="/playground">Playground</CustomLink>
                </MenuLinks>
                <MenuFooter>
                  <ArticleBaseText>&copy; Sarah Khosla</ArticleBaseText>
                  <ArticleBaseText>
                    Los Angeles, California
                    <br />
                    <CustomLink
                      href={
                        email
                          ? `mailto:${email}`
                          : 'mailto:hello@sarahkhosla.com'
                      }
                      target="_blank"
                    >
                      {email ? email : 'hello@sarahkhosla.com'}
                    </CustomLink>
                  </ArticleBaseText>
                </MenuFooter>
              </MenuWrapper>
            </Div100vh>
          </MenuContainer>
        )}
      </Container>
    </PageHeader>
  )
}

export default Nav
