import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useLenis } from '@studio-freight/react-lenis'
import Tempus from '@studio-freight/tempus'
import { GlobalStyle, darkTheme, lightTheme } from 'styles'
import { RealViewport } from 'lib'
import { ThemeProvider } from 'styled-components'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })

  // merge rafs
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  Tempus.add((time) => {
    gsap.updateRoot(time / 1000)
  }, 0)

  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = 'manual'
}

function App({ Component, pageProps }) {
  const lenis = useLenis(ScrollTrigger.update)
  useEffect(ScrollTrigger.refresh, [lenis])

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      {/* {process.env.NODE_ENV !== 'development' && (
        <>
          <Script
            async
            strategy="worker"
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          />
          <Script
            id="gtm-base"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}');`,
            }}
          />
        </>
      )} */}

      <RealViewport />
      <Component {...pageProps} />
    </>
  )
}

export default App
