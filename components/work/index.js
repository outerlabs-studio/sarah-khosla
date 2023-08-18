'use client'

import { styled } from 'styled-components'
import { Z } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  padding-top: 15rem;
  z-index: ${Z.SECTION};
`
export const ProjectGrid = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const Column = styled.div`
  flex: calc(100% / 3);
  max-width: calc(100% / 3);
  padding: 0 1rem;
`
export const ProjectWrapper = styled.div`
  position: relative;
  height: fit-content;

  img {
    width: 100%;
    height: auto;
  }
`
