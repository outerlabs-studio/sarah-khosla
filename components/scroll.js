'use client'

import { useEffect } from 'react'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import Router from 'next/router'
import { initializeAnimations, useLenisWithRefresh } from 'lib'

export default function ScrollWrapper({ children }) {
  initializeAnimations()
  useLenisWithRefresh()

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

  return <Lenis root>{children}</Lenis>
}
