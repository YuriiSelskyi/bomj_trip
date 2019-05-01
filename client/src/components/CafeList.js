import React, { Component } from 'react';

export default class CafeList extends Component {
  constructor(props) {
    super(props);
  }

  renderCafeList = () => {
    const { list } = this.props;
    return list.map((item) => (
      <div>
        <ul>
          <li>{item.name}</li>
          <li>{item.address}</li>
          <li>{item.middleCheck}</li>
          <li>{item.workingHours}</li>
        </ul>
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderCafeList()}
      </div>
    );
  }
}
