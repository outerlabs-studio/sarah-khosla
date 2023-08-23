import { styled } from 'styled-components'

export const ArticleTitle = styled.p`
  font-size: 26px;
  font-weight: 400;
  line-height: 29.5px;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
export const ArticleBase = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 14.5px;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
export const TitleHeader = styled.h1`
  font-size: 15vw; // 128px
  font-weight: 700;
  letter-spacing: -0.5%;
  line-height: 100%;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
