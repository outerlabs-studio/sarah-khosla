import { useEffect } from 'react'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import Router, { useRouter } from 'next/router'
import { Nav, Footer } from 'components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, darkTheme, lightTheme } from 'styles'

export default function Layout({ children, theme }) {
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
      <GlobalStyle />

      <Lenis root>
        <Nav />
        {children}
        <Footer />
      </Lenis>
    </ThemeProvider>
  )
}
