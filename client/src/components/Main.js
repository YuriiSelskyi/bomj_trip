import React, {Component} from 'react';
import FilterForCafe from './FilterForCafe';
import Advertising from './Advertising';
import CafeList from './CafeList';
import { ClimbingBoxLoader } from 'react-spinners';

import '../styles/main.css';
class App extends Component {
  state = {
    cafes: null
	};
	
	componentDidMount() {
		this.getAllInstitutions()
      .then(res => {
        this.setState({
					cafes: res.data,
				});
      })
      .catch(err => console.log(err));
	}

	getAllInstitutions = async () => {
    const response = await fetch('/get-all-institutions', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
	};
	
	changeStateCafes = (data) => {
		console.log(data);
    this.setState({
			cafes: data.data,
		});
  };

  render () {
		const { cafes } = this.state;
		if(cafes === null) {
			return (
        <div className="loading">
          <ClimbingBoxLoader
            sizeUnit={"px"}
            size={25}
            color={'rgb(147, 149, 235)'}
          />
        </div>
      );
		}
    return (
      <div>
        <div className="advertising">
          <Advertising />
        </div>
        <div className="main">
          <div className="menu">
            <FilterForCafe changeStateCafes={this.changeStateCafes} />
          </div>
          <div className="cafe-list">
            <CafeList list={cafes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
