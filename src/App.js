import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Trains from "./Trains/Trains";

class App extends Component {

    state = {
        metroData: [],
        trainId: ""
    }

    // callMetro = () => {
    //     axios.get('https://api.wmata.com/TrainPositions/TrainPositions?contentType=json', {
    //         headers: {
    //             "api_key": String(process.env.REACT_APP_METRO_KEY)
    //         }
    //     })
    //     .then(res => {
    //         this.setState({
    //             metroData: res.data.TrainPositions,
    //         })
    //         console.log(this.state.metroData);
    //     })
    // }

    callMetro = () => {
        axios.get('https://api.wmata.com/TrainPositions/TrainPositions?contentType=json', {
            headers: {
                "api_key": String(process.env.REACT_APP_METRO_KEY)
            }
        })
        .then(res => {
            this.setState({
                metroData: res.data.TrainPositions,
            })
            console.log(this.state.metroData);
            // works to here

            let trainId = this.state.metroData.map(train => {
                console.log(trainId); //undefined
                console.log(train); //return each train
                // need to map through each returned train to get to TrainId
            })
        })
    }


  render() {
    return (
      <div className="App">

        <button onClick={this.callMetro}>Submit</button>

        {this.state.metroData.map(index => (
            <Trains
                key={index}
            />
        ))}

      </div>
    );
  }
}

export default App;
