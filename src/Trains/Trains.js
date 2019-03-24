import React from 'react';
import "./Trains.css";

const Trains = (props) => {

    return (

        <div className="train">

            {/* <div className="card"> */}

                <div className="lineColor" id={props.line}></div>

                <p id="destination">Destination: {props.destination}</p>

                <p id="arrival">Expected arrival: {props.min} min</p>

                <p id="cars">Cars: {props.cars}</p>
        
            {/* </div> */}

        </div>

    )

}

export default Trains;