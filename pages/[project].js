import axios from 'axios'
import { Layout } from 'components'
import {
  ProjectWrapper,
  Hero,
  TitleWrapper,
  DescriptionWrapper,
  ContentViewWrapper,
  RoleWrapper,
} from 'components/project'
import { blurHashToDataURL } from 'lib'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { ArticleBase, ArticleTitle, Container } from 'styles'

function Quativa({ params, data, setTheme }) {
  const doc = data.data[0].attributes

  const generateMediaJSX = (data, className = '') => {
    const isImage = data.mime.startsWith('image/')
    const src = process.env.NEXT_PUBLIC_STRAPI_API_URL + data.url

    if (isImage) {
      return (
        <Image
          src={src}
          alt={data.alternativeText}
          width={data.width}
          height={data.height}
          sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
          placeholder="blur"
          blurDataURL={blurHashToDataURL(data.blurhash)}
          className={className}
        />
      )
    } else {
      return <video src={src} autoPlay muted loop className={className} />
    }
  }

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
              <RoleWrapper>
                <ArticleBase>
                  <b>Role:</b> {doc.role}
                </ArticleBase>
                <ArticleBase>
                  <b>Studio:</b> {doc.studio}
                </ArticleBase>
              </RoleWrapper>
            </DescriptionWrapper>
          </Hero>
          {doc.article.map((item, index) => {
            const isBorder = item.border

            if (item.__component === 'project.cover') {
              const imgData = item.content.data.attributes

              return (
                <ContentViewWrapper key={index} border={isBorder}>
                  {generateMediaJSX(imgData)}
                </ContentViewWrapper>
              )
            } else if (item.__component === 'project.split') {
              const { content_left, content_right } = item
              const leftData = content_left.data.attributes
              const rightData = content_right.data.attributes

              return (
                <ContentViewWrapper key={index} split border={isBorder}>
                  {generateMediaJSX(leftData)}
                  {generateMediaJSX(rightData, 'right')}
                </ContentViewWrapper>
              )
            }

            return null
          })}
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
