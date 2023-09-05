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
import { ArticleBaseText, Container, sizes } from 'styles'
import { blurHashToDataURL } from 'lib'
import { useMedia } from 'react-use'

function AboutItem({ item }) {
  if (item.__component === 'about.default') {
    return (
      <ListWrapper>
        <ListTitle>{item.title}</ListTitle>
        <ArticleBaseText
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
          <ArticleBaseText m={index !== 0 && '0.45rem 0 0 0'} key={index}>
            {item.text}
          </ArticleBaseText>
        ))}
      </ListWrapper>
    )
  }

  return null // Handle other cases if needed
}

function BioImage({ doc }) {
  return (
    <Image
      src={
        process.env.NEXT_PUBLIC_STRAPI_API_URL + doc.image.data.attributes.url
      }
      alt={doc.image.data.attributes.alternativeText}
      width={doc.image.data.attributes.width}
      height={doc.image.data.attributes.height}
      sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
      className="top"
      placeholder="blur"
      blurDataURL={blurHashToDataURL(doc.image.data.attributes.blurhash)}
    />
  )
}

function About({ data, seo }) {
  const doc = data.data.attributes
  const seoDoc = seo.data.attributes
  const mobileView = useMedia(`(max-width: ${sizes.phablet}px)`)

  return (
    <FullHeightWrapper>
      <Layout
        seo={{
          title: `About | ${seoDoc.SEO.title}`,
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
      >
        <Container>
          <ContentWrapper>
            <DescriptionWrapper>
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <ArticleBaseText nm {...props} />,
                }}
              >
                {doc.description}
              </ReactMarkdown>
              {mobileView && (
                <ImageWrapper>
                  <BioImage doc={doc} />
                </ImageWrapper>
              )}
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
            {!mobileView && (
              <RightColumn>
                <ImageWrapper>
                  <BioImage doc={doc} />
                </ImageWrapper>
              </RightColumn>
            )}
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
  const dataURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about?populate[top_row][populate]=*&populate[top_row][on][about.default][populate]=*&populate[top_row][on][about.links][populate]=*&populate[top_row][on][about.list][populate]=*&populate[bottom_row][populate]=*&populate[bottom_row][on][about.default][populate]=*&populate[bottom_row][on][about.links][populate]=*&populate[bottom_row][on][about.list][populate]=*&populate[image][populate]=*`
  const seoURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?fields[0]=contact&populate[SEO][populate]=*&populate[socials][populate]=*`
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  }

  const dataRes = await axios.get(dataURL, { headers })
  const seoRes = await axios.get(seoURL, { headers })

  const data = dataRes.data
  const seo = seoRes.data

  return { props: { data, seo } }
}
