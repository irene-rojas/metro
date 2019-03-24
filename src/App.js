import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Trains from "./Trains/Trains";

class App extends Component {

    state = {
        metroData: [],
    }

    // componentDidMount() {
    //     this.callMetro();
    // }

    // train positions api
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


    // train predictions api
    callMetro = () => {
        axios.get('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/C13', {
            headers: {
                "api_key": String(process.env.REACT_APP_METRO_KEY)
            }
        })
        .then(res => {
            this.setState({
                metroData: res.data.Trains
            })
            console.log(this.state.metroData);
        })
    }


  render() {
    return (
      <div className="App">

        <button onClick={this.callMetro}>Submit</button>
        <br/>

        There are currently {this.state.metroData.length} trains in service.

        {/* train position */}
        {/* {this.state.metroData.map(train => {
            if (train.Line !== null) {
                return (
                    <Trains 
                        key={train.TrainId}
                        trainId={train.TrainId}
                        line={train.Line}
                        destination={train.DestinationStationCode}
                    />
                )
            }
        })} */}

        {/* arrival times */}
        {this.state.metroData.map((train, index) => {
            if (train.Line !== null) {
                return (
                    <Trains 
                        key={index}
                        line={train.Line}
                        destination={train.DestinationName}
                        location={train.LocationName}
                        min={train.Min}
                    />
                )
            }
        })}

      </div>
    );
  }
}

export default App;
