import React from 'react';
import "./Trains.css";

const Trains = (props) => {

    return (

        <div className={`train train_${props.line}`}>

                <div id="destination">
                    Destination:
                    <br/>
                    {props.destination}
                </div>

                <div id="arrival">
                    Arrival:
                    <br/>
                    {props.min} min
                </div>

                <div id="cars">
                    Cars:
                    <br/>
                    {props.cars}
                </div>
        
        </div>

    )

}

export default Trains;