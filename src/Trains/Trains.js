import React from 'react';
import "./Trains.css";

const Trains = (props) => {

    return (

        <div className={`train train_${props.line}`}>

            <p id="destination">Destination: {props.destination}</p>

            <p id="arrival">Expected arrival: {props.min} min</p>

            <p id="cars">Cars: {props.cars}</p>
            
        </div>

    )

}

export default Trains;