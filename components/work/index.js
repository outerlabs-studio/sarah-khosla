'use client'

import { styled } from 'styled-components'
import { Z } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  padding-top: 15rem;
  z-index: ${Z.SECTION};
`
export const ProjectGrid = styled.div`
  columns: 3;
  gap: 1rem;
`
export const ProjectWrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  margin-bottom: 2.25rem;

  img {
    width: 100%;
    height: auto;
  }
`
