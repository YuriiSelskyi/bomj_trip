import React, {Component} from 'react';
import FilterForCafe from './FilterForCafe';
import Advertising from './Advertising';
import CafeList from './CafeList';

import '../styles/main.css';

class App extends Component {
  state = {
    data: 'Hello'
  };

  componentDidMount () {
    // Call our fetch function below once the component mounts
    this.callBackendAPI ()
      .then (res => this.setState ({data: res.data}))
      .catch (err => console.log (err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch ('/express_backend');
    const body = await response.json ();

    if (response.status !== 200) {
      throw Error (body.message);
    }

    return body;
  };

  render () {
		const list = [
			{
				name: 'Pizza house',
				address: 'dfgdf',
				middleCheck: 200,
				actions: 'asdasdasdas',
				workingHours: '07.30 - 00.00',
			},
			{
				name: 'Білий Лев',
				address: '21345ytuhgf',
				middleCheck: 300,
				actions: 'asdasdasdas',
				workingHours: '08.30 - 00.00',
			},
			{
				name: 'Корки і крихти',
				address: '4352345',
				middleCheck: 400,
				actions: 'asdasdasdas',
				workingHours: '04.30 - 00.00',
			},
			{
				name: 'Port wine bar',
				address: '21345ytasgf',
				middleCheck: 500,
				actions: 'asdasdasdas',
				workingHours: '07.30 - 00.00',
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
