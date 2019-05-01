import React, { Component } from 'react';
import FilterForCafe from '../components/filterForCafe';
import './App.css';

class App extends Component {
  state = {
    data: "Hello"
  };

  render() {
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
