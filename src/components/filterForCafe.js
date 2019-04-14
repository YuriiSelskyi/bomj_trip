import React, {Component} from 'react';
import {
  Dropdown,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';
import '../styles/filter-for-cafe.css';

export default class FilterForCafe extends Component {
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
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </ButtonToolbar>
        </div>
      </div>
    );
  }
}
