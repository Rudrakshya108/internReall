import React from 'react';
import logo from './bbb.jpg';
import logo1 from './aaa.jpeg';
import logo2 from './ccc.jpg';
import logo3 from './ddd.jpg';

import New from './New';
import './New1.css';

function New1() {
    const imageSizes=[{image:logo, names:'Mr Bibek', position:'Senior Manager'},
    {image:logo1, names:'Mrs Jesica',position:'Senior Manager' },
    {image:logo2, names:'Mrs Ramita',position:'React Expert' },
    {image:logo3, names:'Mrs Susmita',position:'Software Engineer' },
    
   
    {image:logo2, names:'Mr Gaurab',position:'Phyton expert' },
];
    return (
        <>
         <div className="weBestTitle"><p><strong>WE BEST FEATURE</strong></p></div>
            <div className="weBestMaind"><h1>The Best Team You May Rely On</h1></div>
        <div className="images">
        {imageSizes.map((val)=>{
             return(
                
                 <New
                  image={val.image}
                     names={val.names}
                     position={val.position}
                    
                 />
                  
                    
                 
               
                
             );
         })}
            

        </div>
        
        </>
    )
}


export default New1
