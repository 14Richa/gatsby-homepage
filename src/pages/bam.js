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

const PalettteLink = <a href = "https://14richa.github.io/Responsive-Design-Sass/" target = "_blank"> Read More</a>
const LandingPage1 = <a href = "https://14richa.github.io/UI-Flexbox/" target = "_blank"> Read More </a>
const LandingPage2 = <a href = "https://14richa.github.io/UI-Grid/" target = "_blank"> Read More </a>
const LandingPage3 = <a href = "https://14richa.github.io/landing-Page1/" targrt = "_blank"> Read More </a>
const LandingPage4 = <a href = "https://14richa.github.io/landing-Page2/" target = "_blank"> Read More </a>
const LandingPage6 = <a href = "https://14richa.github.io/landing-Page3/" target = "_blank"> Read More </a>
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

    <div >
    <LandingPage 
    img = {Tour1}
    title = "Landing Page - Tours"
    text = "Responsive page designed for travel websites. HTML5, CSS, SASS"
   
    link={PalettteLink} />
    </div>


    <div >
    <LandingPage 
    img = {Tour2}
    title = "Landing Page - Hotel reviews"
    text = "Responsive page designed for hotels where customers can leave comments/reviews."
    link = {LandingPage1} />
    </div>


    <div >
    <LandingPage 
    img = {Tour3}
    title = "Landing Page - Realtors" 
    text = "Landing page which is suitable for businesses who want to showcase a lot of pictures/art. Extensive use of Flexbox and Grid."
    link = {LandingPage2}
    />
    </div>

    <div >
    <LandingPage 
    img = {Tour4}
    title = "Digital Visiting Card" 
    text = "Minimalistic visiting card which can bring inbound traffic from online visits."
    link = {LandingPage4}
    />
    </div>

    <div >
    <LandingPage 
    img = {Tour5}
    title = "Landing Page - Tours" 
    text = "Responsive page designed for travel/tour websites. HTML5, CSS, SASS"
    link = {LandingPage3}
    />
    </div>


    <div >
    <LandingPage 
    img = {Tour6}
    title = "Split screen Sign-up Page" 
    text = "Clean page to have a hastlefree Sign-up link for users."
    link = {LandingPage6}
    />
    </div>
    </div>












  

   

      
      <Footer />

    </GlobalWrapper>
  )
}

export default Bam;
