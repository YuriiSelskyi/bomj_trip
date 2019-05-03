import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Select from '@material-ui/core/Select';
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
		checkboxButtons: {
			wiFi: false,
			paymentByCard: false,
			discount: false,
			vegetarianMenu: false,
			liveMusic: false,
			businessLunch: false,
			alcohol: false,
			terrace: false,
			allNight: false,
		},
		radioButtons: {
			nearYou: true,
			cheapest: false,
			popular: false,
		}
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
        cheapest: false,
        popular: false,
        best: false,
        [name]: true,
      },
    }));
  };

  styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

  render() {
    return (
      <div>

        <div class = "radio-button">
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction className = "filter" label="Cheapest" icon={<RestoreIcon className = "filter" />} onClick={() => this.changeRadioButtons('chipest')} />
            <BottomNavigationAction className = "filter" label="Popular" icon={<FavoriteIcon className = "filter" />} onClick={() => this.changeRadioButtons('popular')} />
            <BottomNavigationAction className = "filter" label="Nearest" icon={<LocationOnIcon className = "filter" />} onClick={() => this.changeRadioButtons('nearYou')} />
          </BottomNavigation>
        </div>
        <div className = "check-box">
            <Button
              className = "common-style-for-cheak-box wiFi different-cheak-box"

              variant="contained"
              onClick={() => this.changeCheckboxButtons('wiFi')}
            >
              <FaWifi /> 
            </Button>
            <Button
              className = "common-style-for-cheak-box paymentByCard"
              variant="contained"
              onClick={() => this.changeCheckboxButtons('paymentByCard')}
            >
              <FaCcVisa />
            </Button>
            <Button
              className = "common-style-for-cheak-box discounts "
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('discounts')}
            >
              <FaPercent color="black" />
            </Button>
            <Button
              className = "common-style-for-cheak-box vegeterianMenu different-cheak-box"
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('vegeterianMenu')}
            >
              <FaPagelines color="black" />
            </Button>
            <Button
              className = "common-style-for-cheak-box liveMusic"
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('liveMusic')}
            >
              <FaMusic color="black" />
            </Button>
            <Button
              className = "common-style-for-cheak-box businessLunch"
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('businessLunch')}
            >
              <FaCoffee color="black" />
            </Button>
            <Button
              className = "common-style-for-cheak-box alcohol different-cheak-box"
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('alcohol')}
            >
              <FaGlassMartini color="black" />
            </Button>
            <Button
              className = "common-style-for-cheak-box terrace"
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('terrace')}
            >
              <FaTree color="black" />
            </Button>
            <Button
              className = "common-style-for-cheak-box allNight"
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('allNight')}
            >
              <FaClock color="black" />
            </Button>
        </div>
      </div>
    );
	}
}
