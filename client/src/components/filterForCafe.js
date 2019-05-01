import React, {Component} from 'react';
import {
  Dropdown,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
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
    // TODO: change data state
    checkboxButtons: {
      wiFi: false,
      paymentByCard: false,
      discounts: false,
      vegeterianMenu: false,
      liveMusic: false,
      businessLunch: false,
      alcohol: false,
      terrace: false,
      allNight: false,
    },
    radioButtons: {
      nearYou: true,
      chipest: false,
      popular: false,
      best: false,
    },
    // confirm: false,
  }

  changeCheckboxButtons = (name) => {
    const { checkboxButtons } = this.state;
    this.setState(prevState => ({
      ...prevState,
      checkboxButtons: {
        ...prevState.checkboxButtons,
        [name]: !checkboxButtons[name],
      },
    }));
  }

  changeRadioButtons = (name) => {
    this.setState(prevState => ({
      ...prevState,
      radioButtons: {
        nearYou: false,
        chipest: false,
        popular: false,
        best: false,
        [name]: true,
      },
    }));
  }

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
            <Button
              className="filter"
              variant="outline-primary"
              onClick={() => this.changeRadioButtons('nearYou')}
            >
              Nearest
            </Button>
            <Button
              className="filter"
              variant="outline-primary"
              onClick={() => this.changeRadioButtons('chipest')}
            >
              Cheapest
            </Button>
            <Button
              className="filter"
              variant="outline-primary"
              onClick={() => this .changeRadioButtons('popular')}
            >
              Popular
            </Button>
            <Button
              className="filter"
              variant="outline-primary"
              onClick={() => this.changeRadioButtons('best')}
            >
              The best
            </Button>
          </ButtonToolbar>
        </div>
        <div>
          <div className="cheak-box">
            <AwesomeButton
              className="primary"
              type="primary"
              onPress={() => this.changeCheckboxButtons('wiFi')}
            >
              <FaWifi />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('paymentByCard')}
            >
              <FaCcVisa />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('discounts')}
            >
              <FaPercent />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('vegeterianMenu')}
            >
              <FaPagelines />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('liveMusic')}
            >
              <FaMusic />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('businessLunch')}
            >
              <FaCoffee />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('alcohol')}
            >
              <FaGlassMartini />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('terrace')}
            >
              <FaTree />
            </AwesomeButton>
            <AwesomeButton
              className="primary" 
              type="primary"
              onPress={() => this.changeCheckboxButtons('allNight')}
            >
              <FaClock />
            </AwesomeButton>
          </div>
        </div>
      </div>
    );
  }
}
