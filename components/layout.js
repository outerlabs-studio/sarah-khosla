import { useEffect, useState } from 'react'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import Router, { useRouter } from 'next/router'
import { Nav, Footer, CustomHead } from 'components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, darkTheme, lightTheme } from 'styles'
import axios from 'axios'

export default function Layout({
  children,
  theme,
  seo = {
    title: 'Sarah Khosla | Independent Designer',
    description: '',
    image: { url: 'https://website.com/og.jpg' },
    keywords: ['sarah', 'khosla'],
  },
}) {
  const lenis = useLenis()
  const localRouter = useRouter()
  const [data, setData] = useState(null)

  useEffect(() => {
    function onHashChangeStart(url) {
      url = '#' + url.split('#').pop()
      lenis.scrollTo(url)
    }

    Router.events.on('hashChangeStart', onHashChangeStart)

    return () => {
      Router.events.off('hashChangeStart', onHashChangeStart)
    }
  }, [lenis])

  useEffect(() => {
    // https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
    // {
    //   fields: [
    //     'contact',
    //   ],
    //   populate: {
    //     'SEO': {
    //       populate: '*'
    //     },
    //     'socials': {
    //       populate: '*'
    //     }
    //    }
    // }
    const res = axios
      .get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?fields[0]=contact&populate[SEO][populate]=*&populate[socials][populate]=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        },
      )
      .then((res) => setData(res.data.data.attributes))
    setData(data)
  }, [])

  console.log(data)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CustomHead {...seo} />
      <GlobalStyle />

      <Lenis root>
        <Nav />
        {children}
        <Footer email={data && data.contact} socials={data && data.socials} />
      </Lenis>
    </ThemeProvider>
  )
}
