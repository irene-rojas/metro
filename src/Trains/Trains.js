import React from 'react';
import "./Trains.css";

const Trains = (props) => {

    return (

        <div className={`train train_${props.line}`}>

            Destination: {props.destination}
            <br/>
            Expected arrival: {props.min} min
            <br/>
            Cars: {props.cars}
            
        </div>

    )

}

export default Trains;