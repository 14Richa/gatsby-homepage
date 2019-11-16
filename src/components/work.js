import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import KellerkindLogo from 'img/kellerkindlogo'
import PalettteAppLogo from 'img/palettteapplogo'
import LifeTimeLogo from 'img/lifetimelogo'
import BamLogo from 'img/bamlogo'

const LifeTimeLink = <Link to="/lifetime">Read More</Link>
const PalettteLink = <a href = "https://videos-react.herokuapp.com" target = "_blank"> Read More</a>
const KellerkindLink = <a href = "https://14richa.github.io/2019-03-23/casestudy1" target = "_blank">Read More</a>
const BamLink = <Link to="/bam">Read More</Link>

function Work() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={LifeTimeLogo()}
            title="Twitch with a Twist"
            abstract="A streaming web-app connected with streaming software and streamed to a localhost."
            link={LifeTimeLink}
          />
          <Project
            logo={PalettteAppLogo()}
            title="Minimal Youtube Clone"
            abstract="Minimal video search app without any clutter."
            link={PalettteLink}
          />
          <Project
            logo={KellerkindLogo()}
            title="Web Performance Optimization"
            abstract="A case-study on performance and user-interface improvement for webcompat. Identified bottlenecks in FCP, FMP and TTI rendering with Lighthouse and Pagespeed insights"
            link={KellerkindLink}
          />
          <Project
            logo={BamLogo()}
            title="Landing Pages for smooth landing"
            abstract="Experimenting different design for different use cases."
            link={BamLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
