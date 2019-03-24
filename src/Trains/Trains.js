import React from 'react';
import logo from "./logo.png";
import "./Trains.css";

const Trains = (props) => {

    return (

        <div className={`train_${props.line}`}>

            <img 
                src={logo} 
                alt="train" 
            />
            <br/>
            Line Color: {props.line}
            <br/>
            Destination: {props.destination}
            <br/>
            Expected arrival: {props.min} min
            <br/>
            You are at {props.location}
            <br/>

            
        </div>

    )

}

export default Trains;