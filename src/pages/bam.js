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
import Tour4 from './tour4.png';
import Tour5 from './tour5.png';
import Tour6 from './tour6.png';

const PalettteLink = <a href = " https://14richa.github.io/Responsive-Design-Sass/" target = "_blank"> Read More</a>
const LandingPage1= <a href = "https://14richa.github.io/UI-Flexbox/" target = "_blank"> Read More </a>
const LandingPage2 = <a href = "https://14richa.github.io/UI-Grid/" target = "_blank"> Read More </a>
const LandingPage3 = <a href = " https://14richa.github.io/landing-Page1/" targrt = "_blank"> Read More </a>
const LandingPage4 = <a href = " https://14richa.github.io/landing-Page2/" target = "_blank"> Read More </a>
const LandingPage6 = <a href = "https://14richa.github.io/UI-Grid/" target = "_blank"> Read More </a>
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
    title = "Landing Page 1"
    text = "Some example text"
   
    link={PalettteLink} />
    </div>


    <div className = {`card2`} >
    <LandingPage 
    img = {Tour2}
    title = "Landing Page 2"
    text = "Some example text"
    link = {LandingPage1} />
    </div>


    <div className = {`card3`}>
    <LandingPage 
    img = {Tour3}
    title = "Landing Page 3" 
    text = "Some example text"
    link = {LandingPage2}
    />
    </div>

    <div className = {`card3`}>
    <LandingPage 
    img = {Tour4}
    title = "Landing Page 4" 
    text = "Some example text"
    link = {LandingPage4}
    />
    </div>

    <div className = {`card3`}>
    <LandingPage 
    img = {Tour5}
    title = "Landing Page 5" 
    text = "Some example text"
    link = {LandingPage3}
    />
    </div>


    <div className = {`card3`}>
    <LandingPage 
    img = {Tour6}
    title = "Landing Page 6" 
    text = "Some example text"
    link = {LandingPage6}
    />
    </div>
    </div>












  

   

      
      <Footer />

    </GlobalWrapper>
  )
}

export default Bam;
