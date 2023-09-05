import { useEffect } from 'react'
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
  contact,
  socials,
}) {
  const lenis = useLenis()
  const localRouter = useRouter()

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

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CustomHead {...seo} />
      <GlobalStyle />

      <Lenis root>
        <Nav email={contact} />
        {children}
        <Footer email={contact} socials={socials} />
      </Lenis>
    </ThemeProvider>
  )
}
