import React from 'react'
import { Global, css } from '@emotion/core'
import { fontWeight, fontSize, device, lineHeight, color, space, radius } from '@ticketswap/solar'
import { colors } from '../../styles/theme'

const baseTextStyles = css`
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.copy};
  color: ${colors.darkblue};
  font-size: ${fontSize[16]};
  @media ${device.tablet} {
    font-size: ${fontSize[18]};
  }
`

const globalStyles = css`
  @import url('https://rsms.me/inter/inter.css');
  html {
    font-family: 'Inter', sans-serif;
  }

  ::selection {
    background-color: ${colors.primary};
    color: white;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    border: 0;
  }
  body {
    ${baseTextStyles};
  }
  code,
  var,
  kbd,
  samp,
  tt,
  dir,
  listing,
  plaintext,
  xmp,
  abbr,
  acronym,
  blockquote,
  input,
  textarea,
  q {
    hyphens: none;
  }
  a {
    text-decoration: none;
    color: ${colors.primary};
  }
  button {
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    border-radius: ${radius.md};
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 ${space[4]} ${color.earthFocusAlpha};
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ol,
  ul {
    list-style: none;
  }
  img,
  video {
    max-width: 100%;
  }
  img {
    border-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }
`

export default () => {
  return (
    <Global
      styles={css`
        ${globalStyles};
      `}
    />
  )
}
