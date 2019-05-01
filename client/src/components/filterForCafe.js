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
  };

  styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

  render () {
    console.log(this.state);
    return (
      <div>
        <div>
          <FormControl variant="filled" className = "dropDown">
            <InputLabel htmlFor="filled-age-native-simple" ><div className = "dropDown"> TOP </div> </InputLabel>
            <Select
              native
              value={this.state.age}
              onChange={() => {}}
              input={<FilledInput name="TOP" id="filled-age-native-simple" />}
            >
              <option value="" />
              <option value={10}>Top 10</option>
              <option value={20}>Top 50</option>
              <option value={30}>Top 100</option>
            </Select>
          </FormControl>
        </div>
        <div className = "radio-button">
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction className = "filter" label="Cheapest" icon={<RestoreIcon />} onClick={() => this.changeRadioButtons('chipest')} />
            <BottomNavigationAction className = "filter" label="Popular" icon={<FavoriteIcon />} onClick={() => this.changeRadioButtons('popular')} />
            <BottomNavigationAction className = "filter" label="Nearest" icon={<LocationOnIcon />} onClick={() => this.changeRadioButtons('nearYou')} />
          </BottomNavigation>
        </div>
        <div className = "check-box">
            <Button
              className = "wiFi"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('wiFi')}
            >
              <FaWifi /> 
            </Button>
            <Button
              className = "paymentByCard"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('paymentByCard')}
            >
              <FaCcVisa />
            </Button>
            <Button
              className = "discounts"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('discounts')}
            >
              <FaPercent />
            </Button>
            <Button
              className = "vegeterianMenu"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('vegeterianMenu')}
            >
              <FaPagelines />
            </Button>
            <Button
              className = "liveMusic"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('liveMusic')}
            >
              <FaMusic />
            </Button>
            <Button
              className = "businessLunch"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('businessLunch')}
            >
              <FaCoffee />
            </Button>
            <Button
              className = "alcohol"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('alcohol')}
            >
              <FaGlassMartini />
            </Button>
            <Button
              className = "terrace"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('terrace')}
            >
              <FaTree />
            </Button>
            <Button
              className = "allNight"
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('allNight')}
            >
              <FaClock />
            </Button>
        </div>
      </div>
    );
  }
}
