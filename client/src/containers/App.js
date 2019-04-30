import React, { Component } from 'react';
import FilterForCafe from '../components/filterForCafe';
import './App.css';

class App extends Component {
  state = {
    data: "Hello"
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="advertising">
          <h1>Advertising</h1>
        </div>
        <div className="main">
          <div className="menu">
            <FilterForCafe />
          </div>
          <div className="cafe-list">
            <p>{this.state.data[0].testTablecol}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
