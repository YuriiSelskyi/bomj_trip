import React, {Component} from 'react';
import FilterForCafe from './FilterForCafe';
import Advertising from './Advertising';
import CafeList from './CafeList';

import '../styles/main.css';
class App extends Component {
  state = {
    data: 'Hello'
  };

  render () {
		const list = [
			{
				name: 'Pizza house',
				address: 'dfgdf',
				middleCheck: 200,
				actions: 'asdasdasdas',
				workingHours: '07.30 - 00.00',
				popular: 4,
			},
			{
				name: 'Білий Лев',
				address: '21345ytuhgf',
				middleCheck: 300,
				actions: 'asdasdasdas',
				workingHours: '08.30 - 00.00',
				popular: 3,
			},
			{
				name: 'Корки і крихти',
				address: '4352345',
				middleCheck: 400,
				actions: 'asdasdasdas',
				workingHours: '04.30 - 00.00',
				popular: 2,
			},
			{
				name: 'Port wine bar',
				address: '21345ytasgf',
				middleCheck: 500,
				actions: 'asdasdasdas',
				workingHours: '07.30 - 00.00',
				popular: 5,
			},
		];

    return (
      <div>
        <div className="advertising">
          <Advertising />
        </div>
        <div className="main">
          <div className="menu">
            <FilterForCafe />
          </div>
          <div className="cafe-list">
            <CafeList list={list} />
            <p>{this.state.data[0].testTablecol}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
