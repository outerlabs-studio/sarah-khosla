import axios from 'axios'
import { Layout } from 'components'
import {
  ProjectWrapper,
  Hero,
  TitleWrapper,
  DescriptionWrapper,
} from 'components/project'
import { useEffect } from 'react'
import { ArticleBase, ArticleTitle, Container } from 'styles'

function Quativa({ params, data }) {
  const isLight = true
  const doc = data.data.attributes

  console.log(params)
  console.log(data)

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

export async function getStaticPaths() {
  const projects = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?fields[0]=slug`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    },
  )
  const paths = projects.data.data.map((project) => ({
    params: { project: project.attributes.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
  // {
  //   fields: [
  //     'slug',
  //     'light',
  //     'title',
  //     'description',
  //     'role',
  //     'studio'
  //   ],
  //   populate: {
  //     'display': {
  //       populate: '*'
  //     },
  //     'article': {
  //       populate: '*',
  //       on: {
  //         'project.cover': {
  //           populate: '*'
  //         },
  //         'project.split': {
  //           populate: '*'
  //         }
  //       }
  //     }
  //   }
  // }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?fields[0]=slug&fields[1]=light&fields[2]=title&fields[3]=description&fields[4]=role&fields[5]=studio&populate[display][populate]=*&populate[article][populate]=*&populate[article][on][project.cover][populate]=*&populate[article][on][project.split][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    },
  )
  const data = res.data

  return { props: { params, data } }
}
