import { useRef } from 'react'
import axios from 'axios'
import { Layout } from 'components'
import { ImageWrapper } from 'components/about'
import { PlaygroundWrapper } from 'components/playground'
import gsap from 'gsap'
import { blurHashToDataURL } from 'lib'
import Image from 'next/image'
import Masonry from 'react-responsive-masonry'
import { useIsomorphicLayoutEffect, useRaf } from 'react-use'
import { Container } from 'styles'

function Playground({ data, seo }) {
  const doc = data.data.attributes
  const seoDoc = seo.data.attributes

  let imageRef = useRef([])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      imageRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, yPercent: 20 },
          {
            opacity: 1,
            duration: 1,
            yPercent: 0,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: item,
              start: 'top+=20% bottom',
              end: 'bottom bottom',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    })

    return () => ctx.revert
  }, [])

  return (
    <Layout
      seo={{
        title: `Playground | ${seoDoc.SEO.title}`,
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
      <PlaygroundWrapper>
        <Container>
          <Masonry columnsCount={5} gutter="1rem">
            {doc.images.data.map((item, i) => (
              <ImageWrapper ref={(el) => (imageRef.current[i] = el)} key={i}>
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
  const dataURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/playground?populate=*`
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
