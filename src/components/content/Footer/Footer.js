import React from 'react';
import './Footer.css';
import logo from '../bbb.jpg';
import logo1 from './fb.jpg';
import logo2 from './ins.jpg';
import logo3 from './th.png';
import logo4 from './twitter.jpg';

function Footer() {
    return (
        <>
        <div className="footerMain">
        <div className="footer">
        <div className="footerLeft">
        <div className="forLogoAndDesc">
            <div className="forLogo">
            <img className="forLogoImage" src={logo}/>

            </div>

            <div className="forDesc">
            <p><strong>For the best reley on the best.</strong></p>

            </div>
        </div>

        </div>

        <div className="footerCenter">
        <h4>Visit Our</h4>
        <div className="uiList">
            <ul><li>
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
            
            </div>

            <div className="footerCenterAndRightBich">
            <h4>Useful Links</h4>
        <div className="uiList">
            <ul><li>
                <a href="#">Join Now</a>
            </li>

            <li>
                <a href="#">My Details</a>
            </li>

            <li>
                <a href="#">Login</a>
            </li>

            <li>
                <a href="#">Forget Password</a>
            </li>
            </ul>
        </div>


            </div>

            <div className="footerRight">
            <h4>Social</h4>
        <div className="uiList">
            <ul><li>
                <a href="https://www.facebook.com/anika.sapkota/"><img src={logo1}/></a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/anika-sapkota-b430771a0/"><img src={logo3}/></a>
            </li>

            <li>
                <a href="https://twitter.com/anika_sapkota"><img src={logo4}/></a>
            </li>

            <li>
                <a href="https://www.instagram.com/anika_sapkota"><img src= {logo2}/></a>
            </li>
            </ul>
        </div>


            
            </div>

          
        

        </div>

        <div className="copyRight">
                <p>Copyright@Anika,Nepal</p>
            </div>

        </div>
       
            
        </>
    )
}

export default Footer
