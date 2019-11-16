import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

import ScenographicsLogo from 'img/scenographicslogo'

const ScenographicsLink = (
  <a href="http://medium.com/scenographics">Read More on Medium ↗</a>
)

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Project
          title="Scenographics"
          abstract="Tech tidbits and other good stuff"
          link={ScenographicsLink}
        />
      }
    />
  )
}

export default Writing
