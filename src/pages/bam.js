import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import CoverImage from 'components/article/coverimage'
import LargeImage from 'components/article/largeimage'
import TwoImage from 'components/article/twoimage'
import FullSizeImage from 'components/article/fullsizeimage'
import LandingPage from 'components/landingpage'

import BamCoverImage from 'img/articles/bam/jj_climbing.jpg'
import AfterClimbImage1 from 'img/articles/bam/afterclimb_wireframe.jpg'
import AfterClimbImage2 from 'img/articles/bam/afterclimb_textured.jpg'
import AfterClimbImage3 from 'img/articles/bam/afterclimb_montage.jpg'
import AfterClimbImage4 from 'img/articles/bam/afterclimb_logo.jpg';
import './bam.css';

import Tour1 from './tour1.png';
import Tour2 from './tour2.png';
import Tour3 from './tour3.png';


const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

function Bam() {
  return (
    <GlobalWrapper>
    <div className = {`tour`}>

    <div className = {`card1`}>
    <LandingPage 
    img = {Tour1}
    title = "Project1"
    text = "Some example text" />
    </div>


    <div className = {`card2`} >
    <LandingPage 
    img = {Tour2}
    title = "Project2"
    text = "Some example text" />
    </div>


    <div className = {`card3`}>
    <LandingPage 
    img = {Tour3}
    title = "Project3" 
    text = "Some example text"
    />
    </div>
    </div>












  

   

      
      <Footer />

    </GlobalWrapper>
  )
}

export default Bam;
