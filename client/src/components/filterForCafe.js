import React, {Component} from 'react';
import {
  Dropdown,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';
import {
  FaWifi,
  FaCcVisa,
  FaPercent,
  FaPagelines,
  FaMusic,
  FaCoffee,
  FaGlassMartini,
  FaTree,
  FaClock,
} from 'react-icons/fa';
import '../styles/filter-for-cafe.css';

export default class FilterForCafe extends Component {
  state = {
    wiFi: false,
    paymentByCard: false,
    discounts: false,
    vegetarianMenu: false,
    liveMusic: false,
    businessLunch: false,
    alcohol: false,
    terrace: false,
    allNight: false
  }

  componentDidUpdate(prevProps, prevState) {
    this.getFilteredInstitution(this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  getFilteredInstitution = async (state) => {
    const response = await fetch('/get-filtered-institution', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  render () {
    return (
      <div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown"
            >
              TOP 10
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">TOP 5</Dropdown.Item>
              <Dropdown.Item href="#/action-2">TOP 20</Dropdown.Item>
              <Dropdown.Item href="#/action-3">TOP 100</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <ButtonToolbar className="radio-button">
            <Button className="filter" variant="outline-primary">Nearest</Button>
            <Button className="filter" variant="outline-success">Cheapest</Button>
            <Button className="filter" variant="outline-danger">Popular</Button>
            <Button className="filter" variant="outline-info">The best for you</Button>
          </ButtonToolbar>
        </div>
        <div>
          <ButtonToolbar>
            <Button
              name="wiFi"
              onClick={() => {
                this.setState({  wiFi: !this.state.wiFi });
              }}
            >
              <FaWifi />
            </Button>
            <Button
              name="paymentByCard"
              onClick={() => {this.setState({  paymentByCard: !this.state.paymentByCard })}}
            >
              <FaCcVisa />
            </Button>
            <Button
              name="discounts"
              onClick={() => {
                console.log(this.state);
                this.setState({  discounts: !this.state.discounts })
              }}
            >
              <FaPercent />
            </Button>
            <Button
              name="vegetarianMenu"
              onClick={() => {this.setState({  vegetarianMenu: !this.state.vegetarianMenu })}}
            >
              <FaPagelines />
            </Button>
            <Button
              name="liveMusic"
              onClick={() => {this.setState({  liveMusic: !this.state.liveMusic })}}
            >
              <FaMusic />
            </Button>
            <Button
              name="businessLunch"
              onClick={() => {this.setState({  businessLunch: !this.state.businessLunch })}}
            >
              <FaCoffee />
            </Button>
            <Button
              name="alcohol"
              onClick={() => {this.setState({  alcohol: !this.state.alcohol })}}
            >
              <FaGlassMartini />
            </Button>
            <Button
              name="terrace"
              onClick={() => {this.setState({  terrace: !this.state.terrace })}}
            >
              <FaTree />
            </Button>
            <Button
              name="allNight"
              onClick={() => {this.setState({  allNight: !this.state.allNight })}}
            >
              <FaClock />
            </Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
