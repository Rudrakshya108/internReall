import React from 'react';
import Phone from './Phone';

function Message() {
    const item=[
        {message:"Hello Sujan Dada, you are looking great. Hey how can I help you?"},
       ]
    return (
        <>
        {item.map((val)=>{
            return(
                <Phone
                    message={val.message}
                />

            )
           
        })}

        </>
    );
}
export default Message;
