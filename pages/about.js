import axios from 'axios'
import { CustomLink, Layout } from 'components'
import {
  FullHeightWrapper,
  ContentWrapper,
  DescriptionWrapper,
  ImageWrapper,
  ListRow,
  ListTitle,
  ListWrapper,
  RightColumn,
} from 'components/about'
import Image from 'next/image'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { ArticleBase, Container } from 'styles'
import { blurHashToDataURL } from 'lib'

function AboutItem({ item }) {
  if (item.__component === 'about.default') {
    return (
      <ListWrapper>
        <ListTitle>{item.title}</ListTitle>
        <ArticleBase
          dangerouslySetInnerHTML={{
            __html: item.text.replace(/\n/g, '<br/>'),
          }}
        />
      </ListWrapper>
    )
  }

  if (item.__component === 'about.links') {
    return (
      <ListWrapper>
        <ListTitle>{item.title}</ListTitle>
        {item.link.map((link, index) => (
          <CustomLink key={index} underline href={link.url} target="_blank">
            {link.text}
          </CustomLink>
        ))}
      </ListWrapper>
    )
  }

  if (item.__component === 'about.list') {
    return (
      <ListWrapper>
        <ListTitle>{item.title}</ListTitle>
        {item.list_item.map((item, index) => (
          <ArticleBase m={index !== 0 && '0.45rem 0 0 0'} key={index}>
            {item.text}
          </ArticleBase>
        ))}
      </ListWrapper>
    )
  }

  return null // Handle other cases if needed
}

function About({ data }) {
  const doc = data.data.attributes

  return (
    <FullHeightWrapper>
      <Layout>
        <Container>
          <ContentWrapper>
            <DescriptionWrapper>
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <ArticleBase nm {...props} />,
                }}
              >
                {doc.description}
              </ReactMarkdown>
              <ListRow>
                {doc.top_row.map((item, index) => (
                  <AboutItem key={index} item={item} />
                ))}
              </ListRow>
              <ListRow>
                {doc.bottom_row.map((item, index) => (
                  <AboutItem key={index} item={item} />
                ))}
              </ListRow>
            </DescriptionWrapper>
            <RightColumn>
              <ImageWrapper>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_API_URL +
                    doc.image.data.attributes.url
                  }
                  alt={doc.image.data.attributes.alternativeText}
                  quality={90}
                  width={doc.image.data.attributes.width}
                  height={doc.image.data.attributes.height}
                  sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
                  className="top"
                  placeholder="blur"
                  blurDataURL={blurHashToDataURL(
                    doc.image.data.attributes.blurhash,
                  )}
                />
              </ImageWrapper>
            </RightColumn>
          </ContentWrapper>
        </Container>
      </Layout>
    </FullHeightWrapper>
  )
}

export default About

export async function getStaticProps() {
  // https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
  // {
  //   populate: {
  //     'top_row': {
  //       populate: '*',
  //       on: {
  //         'about.default': {
  //           populate: '*'
  //         },
  //         'about.links': {
  //           populate: '*'
  //         },
  //         'about.list': {
  //           populate: '*'
  //         }
  //       }
  //     },
  //     'bottom_row': {
  //       populate: '*',
  //       on: {
  //         'about.default': {
  //           populate: '*'
  //         },
  //         'about.links': {
  //           populate: '*'
  //         },
  //         'about.list': {
  //           populate: '*'
  //         }
  //       }
  //     },
  //     'image': {
  //       populate: '*'
  //     }
  //   }
  // }
  const res = await axios.get(
    process.env.NEXT_PUBLIC_STRAPI_API_URL +
      '/api/about?populate[top_row][populate]=*&populate[top_row][on][about.default][populate]=*&populate[top_row][on][about.links][populate]=*&populate[top_row][on][about.list][populate]=*&populate[bottom_row][populate]=*&populate[bottom_row][on][about.default][populate]=*&populate[bottom_row][on][about.links][populate]=*&populate[bottom_row][on][about.list][populate]=*&populate[image][populate]=*',
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    },
  )
  const data = res.data

  return { props: { data } }
}
