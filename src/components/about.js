import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
// import WhenInView from 'components/wheninView'

// const Reveal = styled.div`
//   opacity: ${props => (props.visible ? '1' : '0')};
//   transform: translateY(${props => (props.visible ? '0px' : '30px')});
//   transition: all 1s;
// `

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

function About() {
  return (
    <div>
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Hi. I'm Richa, a front-end developer based in&nbsp;Bangalore. I focus on writing clean,elegant and efficient code.
          </Big>
          <p>
            I grew up in Delhi and <i>studied</i> Business Administration. After working at product companies in business dev roles, I realized my heart lies in tech and building stuff. So I packed my bags and arrived in Bangalore, silicon valley of India.
          </p>
          <p>
            I am proficient in ReactJS, Javascript and GastbyJS. I am always eager to learn new technologies and look forward to apply them in my work. I care about performance optimization, frictionless UI and readability in code.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about my family, movies and Cult.fit. 
            I am also active in various meet-ups in and around Bangalore
            
          </p>
        </Fragment>
      }
    />
    </div>
    
  )
}

export default About
