import React from 'react';
import {Money}  from '@material-ui/icons';
import './Card1.css';

function Card1(props) {
   return (
      <>
    
      <div className="cardBackground">

     
      <div className="card">

         <div className="forImage">
         

         <Money className="homeIcon"/>
         


         </div>

         <div className="contentTitle">
         <h3>{props.title}</h3>

         </div>

         <div className="contentDetails">
        <p>{props.description}</p>
<div className="readMore"><strong><a href="">Read More...</a></strong></div>
         </div>

         
            
            </div>

      </div>
          
      </>
    )
}

export default Card1
