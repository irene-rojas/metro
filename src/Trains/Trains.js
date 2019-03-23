import React from 'react';
import train from "./train.png";

const Trains = (props) => {

    return (

        <div>
            <img 
                src={train} 
                alt="train" 
                width="150px" 
            />
            <br/>
            Train ID: {props.trainId}
            <br/>
            Line Color: {props.line}
            <br/>
            No line color = out of service.
        </div>

    )

}

export default Trains;