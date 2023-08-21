import { useEffect } from 'react'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import Router from 'next/router'
import { Nav, Footer } from 'components'

export default function Layout({ children }) {
  const lenis = useLenis()

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
    <>
      <Lenis root>
        <Nav />
        {children}
        <Footer />
      </Lenis>
    </>
  )
}
