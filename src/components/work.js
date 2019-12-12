import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import KellerkindLogo from 'img/kellerkindlogo'
import PalettteAppLogo from 'img/palettteapplogo'
import LifeTimeLogo from 'img/lifetimelogo'
import BamLogo from 'img/bamlogo'

const LifeTimeLink = <a href = "https://github.com/14Richa/stream_react" target = "_blank">Github Repo </a>
const PalettteLink = <a href = "https://videos-react.herokuapp.com" target = "_blank"> Live Demo</a>
const KellerkindLink = <a href = "https://14richa.github.io/2019-03-23/casestudy1" target = "_blank">Read More</a>
const WebScraperLink = <a href = "https://gfycat.com/definitereasonableafghanhound" target = "_blank">Demo Gif</a>
const SRTLink = <a href = "https://srt-data.netlify.com/" target = "_blank">Live Demo</a>

const BamLink = <Link to="/bam">Read More</Link>

function Work() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            // logo={LifeTimeLogo()}
            title="Twitch with a Twist"
            abstract="A streaming web-app connected with streaming software and streamed to a localhost."
            link={LifeTimeLink}
          />
          <Project
            // logo={LifeTimeLogo()}
            title="Web Scraper"
            abstract="A simple webscraper to extract relevant information from NSE website for any tickr. Built using Puppeteer abd Express"
            link={WebScraperLink}
          />
          <Project 
          title = "Data Visualisation App"
          abstract = "Built a minimal application to visualize Sachin Tendulkar's batting scores across different cuts. Used shards and react to render different components."
          link = {SRTLink}
          />
          <Project
            // logo={PalettteAppLogo()}
            title="Minimal Youtube Clone"
            abstract="Minimal video search app without any clutter."
            link={PalettteLink}
          />
          <Project
            // logo={KellerkindLogo()}
            title="Web Performance Optimization"
            abstract="A case-study on performance and user-interface improvement for webcompat. Identified bottlenecks in FCP, FMP and TTI rendering with Lighthouse and Pagespeed insights"
            link={KellerkindLink}
          />
          {/*<Project 
          title = "Github Finder"
          abstract = "dgbfvksjdf"
          link = {BamLink}
          />*/}
          <Project
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
