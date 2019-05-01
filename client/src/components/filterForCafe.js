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
    },
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
    return (
      <div>
        <div>
          <FormControl variant="filled">
            <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
            <Select
              native
              value={this.state.age}
              onChange={() => {}}
              input={<FilledInput name="age" id="filled-age-native-simple" />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </div>
        <div>
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction label="Cheapest" icon={<RestoreIcon />} onClick={() => this.changeRadioButtons('chipest')} />
            <BottomNavigationAction label="Popular" icon={<FavoriteIcon />} onClick={() => this.changeRadioButtons('popular')} />
            <BottomNavigationAction label="Nearest" icon={<LocationOnIcon />} onClick={() => this.changeRadioButtons('nearYou')} />
          </BottomNavigation>
        </div>
        <div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('wiFi')}
            >
              <FaWifi />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('paymentByCard')}
            >
              <FaCcVisa />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('discounts')}
            >
              <FaPercent />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('vegeterianMenu')}
            >
              <FaPagelines />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('liveMusic')}
            >
              <FaMusic />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('businessLunch')}
            >
              <FaCoffee />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('alcohol')}
            >
              <FaGlassMartini />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('terrace')}
            >
              <FaTree />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.changeCheckboxButtons('allNight')}
            >
              <FaClock />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
