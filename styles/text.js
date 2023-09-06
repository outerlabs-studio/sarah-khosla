import styled, { css } from 'styled-components'
import media from './media'

export const ArticleTitle = css`
  font-size: 40px;
  font-weight: 400;
  line-height: 41.5px;
`
export const ArticleTitleText = styled.p`
  ${ArticleTitle}
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
export const ArticleBase = css`
  font-size: 0.95vw;
  font-weight: 400;
  line-height: 1.2vw;

  ${media.desktop`
    font-size: 1.5vw;
    line-height: 1.6vw;
  `};
  ${media.tablet`
    font-size: 14px;
    line-height: 15.5px;
  `};

  ${media.phone`
    font-size: 16px;
    line-height: 17.5px;
  `};
`
export const ArticleBaseText = styled.p`
  ${ArticleBase}
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`

export const TitleHeader = css`
  font-size: 15vw; // 128px
  font-weight: 700;
  letter-spacing: -0.5%;
  line-height: 100%;

  ${media.phone`font-size: 33.5vw;`};
`
export const TitleHeaderText = styled.h1`
  ${TitleHeader}
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
