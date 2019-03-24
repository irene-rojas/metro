import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Trains from "./Trains/Trains";
import stations from "./stations.json";

class App extends Component {

    state = {
        metroData: [],
    }

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
        })
    }


  render() {
    return (
      <div className="App">

        <button onClick={this.callMetro}>Submit</button>

            {this.state.metroData.map(train => {
                if (train.LineCode !== null) {
                    return (
                        <Trains 
                            key={train.TrainId}
                            trainId={train.TrainId}
                            line={train.LineCode}
                            destination={train.DestinationStationCode}
                        />
                    )
                }

            })}

      </div>
    );
  }
}

export default App;
