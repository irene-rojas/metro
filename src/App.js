import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
        metroData: []
    }

    callMetro = () => {
        axios.get('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/B03', {
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

      </div>
    );
  }
}

export default App;
