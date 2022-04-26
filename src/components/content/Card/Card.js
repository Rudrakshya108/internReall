import React from 'react';
import Card1 from './Card1';
import './Card.css';



function Card() {
    const data=[{id:1, title:'Expert', description:'Est eos rebum gubergren dolore ea. Dolore et voluptua invidunt magna sed ut et stet dolore, gubergren et labore diam voluptua. Ipsum voluptua'},
    {id:2, title:'Quality', description:'Os rebum gubergren dolore ea. Dolore et voluptua invidunt magna sed ut et stet dolore, gubergren et labore diam voluptua. Ipsum voluptua'},
    {id:3, title:'Trust', description:'Rebum gubergren dolore ea. Dolore et voluptua invidunt magna sed ut et stet dolore, gubergren et labore diam voluptua. Ipsum voluptua'},];
   

   
    return (
        <>
         <div className="cardBack">
         {data.map((val)=>{
             return(
                
                 <Card1
                     title={val.title}
                     description={val.description}
                 />

               
                
             );
         })}
         </div>
        

        </>
       
    )
}
        

    
    

export default Card
