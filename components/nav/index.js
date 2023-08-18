import { ArticleBase, Container } from 'styles'
import { Column, NavWrapper, PageHeader } from './styles'
import { CustomLink } from 'components'

const Nav = () => {
  return (
    <PageHeader>
      <Container>
        <NavWrapper>
          <Column>
            <ArticleBase>
              Sarah Khosla
              <br /> Graphic Design & Art Direction
            </ArticleBase>
            <ArticleBase>
              Previously a Sr. Art Director
              <br /> at Stink Studios, currently <br />
              freelancing.
            </ArticleBase>
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
