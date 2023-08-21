/**
 * @file link.js
 * @desc A custom link component with styled anchor tags and Next.js Link integration.
 */

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  color: ${(props) => props.color || 'var(--white)'};
  /* transition: opacity 0.2s ease-in-out; */
  cursor: pointer;
`

/**
 * CustomLink component.
 * @component
 * @param {object} props - Component props.
 * @param {string} [props.href] - The URL to navigate when the link is clicked.
 * @param {string} [props.target] - The target attribute for the anchor tag.
 * @param {string} [props.color] - The color of the link.
 * @param {string} [props.underline] - Should the link be underlined?
 * @param {React.ReactNode} props.children - The content of the link.
 * @returns {React.ReactElement} CustomLink component.
 */
const CustomLink = (props) => {
  const {
    href,
    target,
    rel = target ? 'noopener noreferrer' : undefined,
    color,
    underline = false,
    children,
    ...rest
  } = props

  if (href) {
    return (
      <Link href={href} target={target} passHref legacyBehavior>
        <StyledLink color={color} underline={underline}>
          {children}
        </StyledLink>
      </Link>
    )
  }

  return (
    <StyledLink color={color} underline={underline} {...rest}>
      {children}
    </StyledLink>
  )
}

export default CustomLink
