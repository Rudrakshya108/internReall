import { ArrowBack, Call, VideoCall } from '@material-ui/icons';
import React from 'react';
import logo from '../bbb.jpg';
import './Phone.css';

function Phone(props) {
    var rating=1;
    return (
        <>
        <div className="phoneHeader"><h1>Catch Up Anytime - 24Hours Available</h1></div>

         <div className="phone">
        
        <div className="phoneLeft">
        <div className="headerMobile">
            <div className="iconn">
            <ArrowBack/>

            </div>
            <div className="UserName">
            <div className="para">
            <p><strong>Gaurab G</strong></p>

            </div>

            <div className="online">
            <div>
            <p>Online </p>

            </div>
               

                <div className="circle"></div>
              
            </div>
            

            </div>

            <div className="videoIcon">
            <VideoCall/>

            </div>

            <div className="callIcon">
            <Call/>

            </div>
        </div>
        <div className="messageBigContainer">
           <div className="singleMessageContiner">
           <div className="avatarKo">

           </div>
           <div className="actualMessageContainer">
           <div className="actualMessage">
           <img className="logoKo" src={logo}/>

           </div>

           <div className="messageOnly">
               <p>{props.message}</p>
           </div>

           <div className="messageOnly">
               <p>{props.message} </p>
           </div>

           </div>

           </div>
         
        </div>


        </div>

        <div className="phoneRight">
        <h1>24/7 FOR YOU</h1>
        <p>Wherever you are at any corner, our team is always there anytime for your support and motivation.</p>

 <div className="product_rating">
            {
                Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>🤍💛</p>
                ))
            }
               
            </div>
        </div>
            
        </div>

        </>
       
    )
}

export default Phone
