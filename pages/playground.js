import axios from 'axios'
import { Layout } from 'components'
import { ImageWrapper } from 'components/about'
import { PlaygroundWrapper } from 'components/playground'
import { blurHashToDataURL } from 'lib'
import Image from 'next/image'
import Masonry from 'react-responsive-masonry'
import { Container } from 'styles'

function Playground({ data }) {
  const doc = data.data.attributes
  console.log(doc)

  return (
    <Layout>
      <PlaygroundWrapper>
        <Container>
          <Masonry columnsCount={5} gutter="1rem">
            {doc.images.data.map((item, i) => (
              <ImageWrapper>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.url
                  }
                  alt={item.attributes.alternativeText}
                  width={item.attributes.width}
                  height={item.attributes.height}
                  sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
                  placeholder="blur"
                  blurDataURL={blurHashToDataURL(item.attributes.blurhash)}
                />
              </ImageWrapper>
            ))}
          </Masonry>
        </Container>
      </PlaygroundWrapper>
    </Layout>
  )
}

export default Playground

export async function getStaticProps() {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/playground?populate=*',
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    },
  )
  const data = res.data

  return { props: { data } }
}
