import React from 'react';
import './New.css';
import logo from './bbb.jpg';
import logo1 from './aaa.jpg';


function New(props) {
    return (
        <>
        <div className="New">
           
            <div className="container">
            <div className="containerCard">
                <div className="cardImage">
                <img src={props.image}  />
               
                

                </div>
                <div className="cardImageLabel">
                <p><strong>{props.names}</strong></p>
                <p>{props.position}</p>

                </div>
            </div>

            </div>
        </div>

        </>
        
    )
}

export default New
