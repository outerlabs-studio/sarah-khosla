import { useRef } from 'react'
import { ArticleBase, Container } from 'styles'
import {
  Column,
  DescriptionWrapper,
  LineWrapper,
  NavWrapper,
  PageHeader,
} from './styles'
import { CustomLink } from 'components'
// import { SplitText } from 'lib'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Nav = () => {
  let sectionRef = useRef()
  let navTextRef = useRef([])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          start: '10px top',
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

  return (
    <PageHeader ref={(el) => (sectionRef = el)}>
      <Container>
        <NavWrapper>
          <Column>
            <ArticleBase>
              Sarah Khosla
              <br /> Graphic Design & Art Direction
            </ArticleBase>
            <DescriptionWrapper>
              <LineWrapper>
                <ArticleBase ref={(el) => (navTextRef.current[0] = el)}>
                  Previously a Sr. Art Director
                </ArticleBase>
              </LineWrapper>
              <LineWrapper>
                <ArticleBase ref={(el) => (navTextRef.current[1] = el)}>
                  at Stink Studios, currently
                </ArticleBase>
              </LineWrapper>
              <LineWrapper>
                <ArticleBase ref={(el) => (navTextRef.current[2] = el)}>
                  freelancing.
                </ArticleBase>
              </LineWrapper>
            </DescriptionWrapper>
          </Column>
          <Column>
            <CustomLink href="/">Selected work</CustomLink>
            <CustomLink href="/playground">Playground</CustomLink>
            <CustomLink href="/about">About</CustomLink>
          </Column>
        </NavWrapper>
      </Container>
    </PageHeader>
  )
}

export default Nav
