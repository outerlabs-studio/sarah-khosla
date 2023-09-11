import { useLenis } from '@studio-freight/react-lenis'
import axios from 'axios'
import { Layout } from 'components'
import { ImageWrapper } from 'components/about'
import { PlaygroundWrapper } from 'components/playground'
import gsap from 'gsap'
import { blurHashToDataURL } from 'lib'
import Image from 'next/image'
import { useRef } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Container } from 'styles'

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
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 330: 1, 440: 3, 820: 5 }}
          >
            <Masonry gutter="1rem">
              {doc.images.data.map((item, i) => (
                <ImageWrapper key={i}>
                  <Image
                    className="anim-image"
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      item.attributes.url
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
          </ResponsiveMasonry>
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
