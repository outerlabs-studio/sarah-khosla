import { Layout } from 'components'
import {
  ProjectWrapper,
  Hero,
  TitleWrapper,
  DescriptionWrapper,
} from 'components/project'
import { useEffect } from 'react'
import { ArticleBase, ArticleTitle, Container } from 'styles'

function Quativa() {
  const isLight = true

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light')
    }
  }, [isLight])

  return (
    <Layout>
      <ProjectWrapper>
        <Container>
          <Hero>
            <TitleWrapper>
              <ArticleTitle>Quativa</ArticleTitle>
            </TitleWrapper>
            <DescriptionWrapper>
              <ArticleBase>
                Quativa is the all-in-one platform for people who sell and
                install solar. The solar space is crowded, no matter how you cut
                it. Whether you’re an installer, salesperson or finance partner.
                Uniquely, Quativa situates itself among all these audiences,
                connecting once disparate processes and technologies into one
                streamlined platform. Their super-powered sales application
                enables them to provide solar to consumers in over 20 regions.
                They not only centralize all of your sales tools, but connect
                you to the right partners for installing and financing a job so
                that you can focus on what you do best: selling.
              </ArticleBase>
            </DescriptionWrapper>
          </Hero>
        </Container>
      </ProjectWrapper>
    </Layout>
  )
}

export default Quativa
