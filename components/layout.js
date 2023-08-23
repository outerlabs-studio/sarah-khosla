import { useEffect } from 'react'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import Router, { useRouter } from 'next/router'
import { Nav, Footer } from 'components'

export default function Layout({ children }) {
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

  useEffect(() => {
    if (
      localRouter.pathname === '/' ||
      localRouter.pathname === '/about' ||
      localRouter.pathname === '/playground'
    ) {
      document.body.classList.remove('light')
    }
  }, [localRouter.pathname])

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
