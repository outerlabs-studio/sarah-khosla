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
import { ArticleBaseText, ArticleTitleText, Container } from 'styles'

function Quativa({ params, data, setTheme, seo, nextProject }) {
  const doc = data.data[0].attributes
  const seoDoc = seo.data.attributes

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
          placeholder="blur"
          quality={100}
          blurDataURL={blurHashToDataURL(data.blurhash)}
          className={className}
        />
      )
    } else {
      return (
        <video
          src={src}
          playsInline
          autoPlay
          muted
          loop
          className={className}
        />
      )
    }
  }

  return (
    <Layout
      theme={doc.light ? 'light' : 'dark'}
      seo={{
        title: doc.title
          ? `${doc.title} | ${seoDoc.SEO.title}`
          : params.project,
        description: seoDoc.SEO.description,
        image: {
          url:
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            seoDoc.SEO.OG.data.attributes.url,
        },
        keywords: seoDoc.SEO.keywords.data,
      }}
      contact={seoDoc.contact}
      socials={seoDoc.socials}
      nextProject={nextProject.attributes.slug}
    >
      <Container>
        <ProjectWrapper>
          {params.project !== 'logos' && (
            <TitleWrapper>
              <ArticleTitleText>{doc.title}</ArticleTitleText>
            </TitleWrapper>
          )}
          <DescriptionWrapper>
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <ArticleBaseText {...props} />,
              }}
            >
              {doc.description}
            </ReactMarkdown>
            <RoleWrapper>
              {doc.role && (
                <ArticleBaseText>
                  <b>Role:</b> {doc.role}
                </ArticleBaseText>
              )}
              {doc.studio && (
                <ArticleBaseText>
                  <b>Studio:</b> {doc.studio}
                </ArticleBaseText>
              )}
            </RoleWrapper>
          </DescriptionWrapper>

          {doc.article.map((item, index) => {
            const isBorder = item.border

            if (item.__component === 'project.cover') {
              const imgData = item.content.data.attributes

              return (
                <ContentViewWrapper
                  key={index}
                  border={isBorder}
                  logos={params.project === 'logos'}
                >
                  {generateMediaJSX(imgData)}
                </ContentViewWrapper>
              )
            } else if (item.__component === 'project.split') {
              const { content_left, content_right } = item
              const leftData = content_left.data.attributes
              const rightData = content_right.data.attributes

              return (
                <ContentViewWrapper
                  key={index}
                  split
                  border={isBorder}
                  logos={params.project === 'logos'}
                >
                  {generateMediaJSX(leftData)}
                  {generateMediaJSX(rightData, 'right')}
                </ContentViewWrapper>
              )
            }

            return null
          })}
        </ProjectWrapper>
      </Container>
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
    params: { project: project.attributes.slug, id: project.id },
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
  const allProjectsURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?sort[0]=id&fields[0]=id&fields[1]=slug`
  const dataURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?filters[slug][$eq]=${params.project}&fields[0]=slug&fields[1]=light&fields[2]=title&fields[3]=description&fields[4]=role&fields[5]=studio&populate[display][populate]=*&populate[article][populate]=*&populate[article][on][project.cover][populate]=*&populate[article][on][project.split][populate]=*`
  const seoURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?fields[0]=contact&populate[SEO][populate]=*&populate[socials][populate]=*`
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  }

  const dataRes = await axios.get(dataURL, { headers })
  const seoRes = await axios.get(seoURL, { headers })
  const allProjectsRes = await axios.get(allProjectsURL, { headers })

  const data = dataRes.data
  const seo = seoRes.data
  const allProjects = allProjectsRes.data.data

  // Calculate the index of the current project
  const currentIndex = allProjects.findIndex(
    (project) => project.attributes.slug === params.project,
  )

  // Determine the index of the next project
  const nextIndex =
    currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1

  // Get the next project
  const nextProject = allProjects[nextIndex]

  return { props: { params, data, seo, nextProject } }
}
