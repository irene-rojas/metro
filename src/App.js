import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Trains from "./Trains/Trains";

class App extends Component {

    state = {
        metroData: [],
        pluralTrains: ""
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

            this.state.metroData.map(train => {
                this.setState({
                    pluralTrains: train.TrainId
                })
                console.log(this.state.pluralTrains);
            })
        })
    }


  render() {
    return (
      <div className="App">

        <button onClick={this.callMetro}>Submit</button>

        {/* <Trains
            key={this.state.trainId}    
        /> */}

        {/* {this.state.trainId.map} */}

      </div>
    );
  }
}

export default App;
