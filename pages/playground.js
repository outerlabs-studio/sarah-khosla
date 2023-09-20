import { useLenis } from '@studio-freight/react-lenis'
import axios from 'axios'
import { Layout } from 'components'
import { PlaygroundWrapper, ImageWrapper } from 'components/playground'
import gsap from 'gsap'
import { blurHashToDataURL } from 'lib'
import Image from 'next/image'
import { useRef } from 'react'
import Masonry from 'react-masonry-css'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Container, sizes } from 'styles'

function Playground({ data, seo }) {
  const doc = data.data.attributes
  const seoDoc = seo.data.attributes
  const sectionRef = useRef(null)
  const lenis = useLenis()

  // not sure why but adding lenis fixes the animations
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { autoAlpha: 1, delay: 0.1 }, 0)

      gsap.utils.toArray('.anim-image').forEach((item, index) => {
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
  }, [lenis])

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
      <PlaygroundWrapper ref={sectionRef}>
        <Container>
          <Masonry
            className="masonary-grid"
            columnClassName="masonary-grid-column"
            breakpointCols={{ 440: 1, 820: 3, default: 5 }}
          >
            {doc.images.data.map((item, i) => (
              <ImageWrapper key={i}>
                <Image
                  className="anim-image"
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.url
                  }
                  alt={item.attributes.alternativeText}
                  width={item.attributes.width}
                  height={item.attributes.height}
                  sizes={`(min-width: ${sizes.tablet}px) 18.61vw, (min-width: ${sizes.phone}px) calc(33.33vw - 13px), 92.86vw`}
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
