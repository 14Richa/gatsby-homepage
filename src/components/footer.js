import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`

function Footer() {
  return (
    <Section>
      <FooterText>
        This page is open source developed on top of Gabriel's <a href="https://github.com/gabdorf/gabriel-adorf-portfolio">version</a>
        
      </FooterText>
    </Section>
  )
}

export default Footer
