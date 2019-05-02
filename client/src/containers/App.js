import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CafeDetails from '../components/CafeDetails';
import Main from '../components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/cafe-details" component={CafeDetails} />
      </Router>
    );
  }
}

export default App;
