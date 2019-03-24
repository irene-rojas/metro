import React from 'react';
import logo from "./logo.png";
import "./Trains.css";

const Trains = (props) => {

    return (

        <div className="trains">
            <img 
                src={logo} 
                alt="train" 
            />
            <br/>
            Train ID: {props.trainId}
            <br/>
            Line Color: {props.line}
            <br/>
            Destination: {props.destination}
        </div>

    )

}

export default Trains;