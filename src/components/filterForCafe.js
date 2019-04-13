import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

export default class FilterForCafe extends Component {
  render () {
    return (
      <div>
        <div>
          <Button variant="primary" size="lg" block>
            Block level button
          </Button>
          <Button variant="secondary" size="lg" block>
            Block level button
          </Button>
        </div>;
      </div>
    );
  }
}
