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

  :hover {
    .top {
      opacity: 0;
    }
  }
`
export const ProjectWrapper = styled.a`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 2.25rem;
  cursor: pointer;

  :hover {
    opacity: 0;
  }

  .top {
    position: relative;
    z-index: 4;
    opacity: 1;
  }

  .bottom {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }

  img {
    width: 100%;
    height: auto;
  }
`
