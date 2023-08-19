'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Tempus from '@studio-freight/tempus'
import { useLenis } from '@studio-freight/react-lenis'

export function initializeAnimations() {
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
}

export function useLenisWithRefresh() {
  const lenis = useLenis(ScrollTrigger.update)
  useEffect(ScrollTrigger.refresh, [lenis])
}
