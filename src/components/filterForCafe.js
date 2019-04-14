import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/filter-for-cafe.css';

export default class FilterForCafe extends Component {
  render () {
    return (
      <div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown">
              TOP 10
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">TOP 5</Dropdown.Item>
              <Dropdown.Item href="#/action-2">TOP 20</Dropdown.Item>
              <Dropdown.Item href="#/action-3">TOP 100</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
