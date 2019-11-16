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
const KellerkindLink = <Link to="/kellerkind">Read More</Link>
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
            title="Kellerkind"
            abstract="A social event company organizing two festivals for electronic music and art with ~20.000 yearly visitors north of munich."
            link={KellerkindLink}
          />
          <Project
            logo={BamLogo()}
            title="Bäm"
            abstract="Climbing products and other stuff that gives you the bäm effect."
            link={BamLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
