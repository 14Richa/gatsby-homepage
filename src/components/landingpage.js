import React from 'react'



const LandingPage = props => {
  return (
   <div className={`card card1`} style= {{width:"400px"}}>
    <img className = {`card-img-top`} src = {props.img}/>
 
    <div className={`card-body`}>

    <h4 className ={`card-title`}>{props.title}</h4>
    <p className = {`card-text`}>{props.text}</p>
    <button className={`btn`}>See Project</button>
  </div>
</div>
)

}

export default LandingPage;
