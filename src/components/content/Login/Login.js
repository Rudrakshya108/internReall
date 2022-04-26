import React from 'react';
import './Login.css';
import logo from './bbb.jpg';
import logo1 from './aaa.jpeg';


function Login() {
  
    

 
    return (
        <>
        <div className="mainNav">
        <div className="Logo">
            <h3>
                <span>S</span>OFTWARE
                <span>N</span>EPAL
            </h3>
        </div>

        <div className="menuLink">
            <ul>
                <li>
                <a href="#">Home</a>
                </li>
                   
                   <li>
                   <a href="#">About</a>
                   </li>

                   <li>
                   <a href="#">Contact</a>

                   </li>
                   
                   
                    <li>
                    <a href="#">Join Us</a>
                </li>
            </ul>
        </div>

        <div className="socialMedia">
            <ul className="socialMediaDesktop">
                <li>
                    <a href="#" target=""></a>
                </li>
            </ul>
        </div>

      
            
        </div>
        <section className="heroSection">
          <div className="left">
          <h1 className="animation">Hire the best<br/>To get the best</h1>
          <div className="buttons">
          <button className="button1">Join Us</button>
          <button className="button2">Contact Us</button>

          </div>
         

          </div>

          <div className="right">
          <div className="rightBackgroundImage">
          <img src={logo} className="image1"/>
          
          

          </div>
          

     
         
              
              </div>
              
            
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="yellow" fill-opacity="1" d="M0,224L30,218.7C60,213,120,203,180,208C240,213,300,235,360,208C420,181,480,107,540,101.3C600,96,660,160,720,176C780,192,840,160,900,170.7C960,181,1020,235,1080,256C1140,277,1200,267,1260,229.3C1320,192,1380,128,1410,96L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        <section className="secondHero">
            <div className="secondHeroHeader">
            <div className="secondHeroHeader1a"> <p><strong>YOU ARE HEARTLY</strong></p></div>
               

                <div  className="secondHeroHeader2"><h1>
                <span>W</span>ELCOME <span>T</span>O <span>S</span>OFTWARE <span>N</span>EPAL
                </h1></div>
            </div>
        </section>
        
        const height = window.innerHeight;

// window width
const width = window.innerWidth;

console.log(height, width);
       
        </>
    )
}

export default Login
