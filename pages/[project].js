import axios from 'axios'
import { Layout } from 'components'
import {
  ProjectWrapper,
  Hero,
  TitleWrapper,
  DescriptionWrapper,
} from 'components/project'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { ArticleBase, ArticleTitle, Container } from 'styles'

function Quativa({ params, data, setTheme }) {
  const doc = data.data[0].attributes

  return (
    <Layout theme={doc.light ? 'light' : 'dark'}>
      <ProjectWrapper>
        <Container>
          <Hero>
            <TitleWrapper>
              <ArticleTitle>{doc.title}</ArticleTitle>
            </TitleWrapper>
            <DescriptionWrapper>
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <ArticleBase {...props} />,
                }}
              >
                {doc.description}
              </ReactMarkdown>
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
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?filters[slug][$eq]=${params.project}&fields[0]=slug&fields[1]=light&fields[2]=title&fields[3]=description&fields[4]=role&fields[5]=studio&populate[display][populate]=*&populate[article][populate]=*&populate[article][on][project.cover][populate]=*&populate[article][on][project.split][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    },
  )
  const data = res.data

  return { props: { params, data } }
}
