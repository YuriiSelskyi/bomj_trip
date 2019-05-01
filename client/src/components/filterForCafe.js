import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import {
  Dropdown,
  ButtonToolbar,
  // Button,
} from 'react-bootstrap';
import "react-awesome-button/dist/styles.css";
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
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.changeRadioButtons('nearYou')}
          >
            Nearest
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.changeRadioButtons('chipest')}
          >
            Cheapest
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.changeRadioButtons('popular')}
          >
            Popular
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.changeRadioButtons('best')}
          >
            The best
          </Button>
        </div>
        <div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('wiFi')}
            >
              <FaWifi />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('paymentByCard')}
            >
              <FaCcVisa />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('discounts')}
            >
              <FaPercent />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('vegeterianMenu')}
            >
              <FaPagelines />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('liveMusic')}
            >
              <FaMusic />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('businessLunch')}
            >
              <FaCoffee />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('alcohol')}
            >
              <FaGlassMartini />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('terrace')}
            >
              <FaTree />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onPress={() => this.changeCheckboxButtons('allNight')}
            >
              <FaClock />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
