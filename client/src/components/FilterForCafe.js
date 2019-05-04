import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
  constructor(props) {
    super(props);
    this.state = {
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
        nearYou: false,
        cheapest: false,
        popular: false,
      },
    };
  }
  

  getFilteredCafe = state => {
    this.getFilteredInstitution (state)
      .then (res => {
        this.props.changeStateCafes(res);
      })
      .catch (err => console.log (err));
  };

  getFilteredInstitution = async state => {
    const response = await fetch ('/get-filtered-institution', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (state),
    });
    const body = await response.json ();

    if (response.status !== 200) {
      throw Error (body.message);
    }

    return body;
  };

  changeCheckboxButtons = name => {
    const {checkboxButtons} = this.state;
    this.setState (
      prevState => ({
        ...prevState,
        checkboxButtons: {
          ...prevState.checkboxButtons,
          [name]: !checkboxButtons[name],
        },
      }),
      () => this.getFilteredCafe (this.state)
    );
  };

  changeRadioButtons = name => {
    const {radioButtons} = this.state;
    this.setState (
      prevState => ({
        ...prevState,
        radioButtons: {
          ...prevState.radioButtons,
          nearYou: false,
          cheapest: false,
          popular: false,
          [name]: !radioButtons[name],
        },
      }),
      () => this.getFilteredCafe(this.state)
    );
  };

  refresh = () => {
    this.setState (
      prevState => ({
        ...prevState,
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
      }),
      () => this.getFilteredCafe (this.state)
    );
  };

  render () {
    const {checkboxButtons} = this.state;
    return (
      <div>
        <div className="radio-button">
          <BottomNavigation showLabels className="Eee">
            <BottomNavigationAction
              className="filter"
              label="Cheapest"
              icon={<RestoreIcon className="filter" />}
              onClick={() => this.changeRadioButtons ('cheapest')}
            />
            <BottomNavigationAction
              className="filter"
              label="Popular"
              icon={<FavoriteIcon className="filter" />}
              onClick={() => this.changeRadioButtons ('popular')}
            />
            <BottomNavigationAction
              className="filter"
              label="Nearest"
              icon={<LocationOnIcon className="filter" />}
              onClick={() => this.changeRadioButtons ('nearYou')}
            />
          </BottomNavigation>
        </div>
        <div className="check-box">
          <Button
            className={
              checkboxButtons.wiFi
                ? 'common-style-for-cheak-box wiFi different-cheak-box shadows'
                : 'common-style-for-cheak-box wiFi different-cheak-box'
            }
            onClick={() => this.changeCheckboxButtons ('wiFi')}
          >
            <FaWifi color="white" />
          </Button>
          <Button
            className={
              checkboxButtons.paymentByCard
                ? 'common-style-for-cheak-box paymentByCard different-cheak-box shadows'
                : 'common-style-for-cheak-box paymentByCard different-cheak-box'
            }
            variant="contained"
            onClick={() => this.changeCheckboxButtons ('paymentByCard')}
          >
            <FaCcVisa color="white" />
          </Button>
          <Button
            className={
              checkboxButtons.discounts
                ? 'common-style-for-cheak-box discounts different-cheak-box shadows'
                : 'common-style-for-cheak-box discounts different-cheak-box'
            }
            variant="contained"
            color="primary"
            onClick={() => this.changeCheckboxButtons ('discounts')}
          >
            <FaPercent color="white" />
          </Button>
        </div>
        <div className="check-box">
          <Button
            className={
              checkboxButtons.vegetarianMenu
                ? 'common-style-for-cheak-box vegetarianMenu different-cheak-box shadows'
                : 'common-style-for-cheak-box vegetarianMenu different-cheak-box'
            }
            variant="contained"
            color="primary"
            onClick={() => this.changeCheckboxButtons ('vegetarianMenu')}
          >
            <FaPagelines color="white" />
          </Button>
          <Button
            className={
              checkboxButtons.liveMusic
                ? 'common-style-for-cheak-box liveMusic different-cheak-box shadows'
                : 'common-style-for-cheak-box liveMusic different-cheak-box'
            }
            variant="contained"
            color="primary"
            onClick={() => this.changeCheckboxButtons ('liveMusic')}
          >
            <FaMusic color="white" />
          </Button>
          <Button
            className={
              checkboxButtons.businessLunch
                ? 'common-style-for-cheak-box businessLunch different-cheak-box shadows'
                : 'common-style-for-cheak-box businessLunch different-cheak-box'
            }
            variant="contained"
            color="primary"
            onClick={() => this.changeCheckboxButtons ('businessLunch')}
          >
            <FaCoffee color="white" />
          </Button>
        </div>
        <div className="check-box">
          <Button
            className={
              checkboxButtons.alcohol
                ? 'common-style-for-cheak-box alcohol different-cheak-box shadows'
                : 'common-style-for-cheak-box alcohol different-cheak-box'
            }
            variant="contained"
            color="primary"
            onClick={() => this.changeCheckboxButtons ('alcohol')}
          >
            <FaGlassMartini color="white" />
          </Button>
          <Button
            className={
              checkboxButtons.terrace
                ? 'common-style-for-cheak-box terrace different-cheak-box shadows'
                : 'common-style-for-cheak-box terrace different-cheak-box'
            }
            variant="contained"
            color="primary"
            onClick={() => this.changeCheckboxButtons ('terrace')}
          >
            <FaTree color="white" />
          </Button>
          <Button
            className={
              checkboxButtons.allNight
                ? 'common-style-for-cheak-box allNight different-cheak-box shadows'
                : 'common-style-for-cheak-box allNight different-cheak-box'
            }
            variant="contained"
            color="primary"
            onClick={() => this.changeCheckboxButtons ('allNight')}
          >
            <FaClock color="white" />
          </Button>
        </div>
        <div className="refresh">
          <Button className="button" onClick={() => this.refresh ()}>
            Refresh
          </Button>
        </div>
      </div>
    );
  }
}