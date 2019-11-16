import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

import ScenographicsLogo from 'img/scenographicslogo'

const ScenographicsLink = (
  <a href="https://14richa.github.io/" target = "_blank">Read More on Github. ↗</a>
)

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Project
          title="geekGirl"
          abstract="Tech tidbits and other good stuff"
          link={ScenographicsLink}
        />
      }
    />
  )
}

export default Writing
