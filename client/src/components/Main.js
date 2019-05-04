import React, {Component} from 'react';
import {geolocated} from 'react-geolocated';
import FilterForCafe from './FilterForCafe';
import Advertising from './Advertising';
import CafeList from './CafeList';
import {ClimbingBoxLoader} from 'react-spinners';
import Fab from '@material-ui/core/Fab';
import {FaPlus} from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ImageUploader from 'react-images-upload';
import Footer from './Footer';

import TextField from '@material-ui/core/TextField';
import '../styles/main.css';

function Transition (props) {
  return <Slide direction="up" {...props} />;
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      cafes: null,
      pictures: [],
    }
    this.newCafe = {
      title: null,
      workingHours: null,
      address: null,
      actions: null,
      wiFi: false,
      paymentByCard: false,
      discount: false,
      vegetarianMenu: false,
      liveMusic: false,
      businessLunch: false,
      alcohol: false,
      terrace: false,
      allNight: false,
      pictures: [],
    };
  }

  componentDidMount () {
    this.getAllInstitutions ()
      .then (res => {
        this.setState ({
          cafes: res.data,
        });
      })
      .catch (err => console.log (err));
  }

  getAllInstitutions = async () => {
    const response = await fetch ('/get-all-institutions', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const body = await response.json ();

    if (response.status !== 200) {
      throw Error (body.message);
    }

    return body;
  };

  changeStateCafes = data => {
    if (this.props.coords !== null) {
      this.setState ({
        myLocation: this.props.coords,
      });
    }
    this.setState ({
      cafes: data.data,
    });
  };

  onDrop = picture => {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
    this.newCafe.pictures = this.newCafe.pictures.concat(picture);
  };

  changeDataCafe = (event, name) => {
    this.newCafe[name] = event.target.value;
  };

  changeCheckbox = (name) => {
    this.newCafe[name] = !this.newCafe[name];
  }

  handleClose = () => {
    this.newCafe = {
      title: null,
      workingHours: null,
      address: null,
      actions: null,
      wiFi: false,
      paymentByCard: false,
      discount: false,
      vegetarianMenu: false,
      liveMusic: false,
      businessLunch: false,
      alcohol: false,
      terrace: false,
      allNight: false,
      pictures: [],
    };
  }

  render () {
    const { cafes } = this.state;
    if (cafes === null) {
      return (
        <div className="loading">
          <ClimbingBoxLoader
            sizeUnit={'px'}
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
        <div className="plus-button">
          <Fab
            color="primary"
            aria-label="Add"
            onClick={() => this.setState ({open: true})}
            className="shadow"
          >
            <FaPlus />
          </Fab>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar>
              <Toolbar className="toolbar">
                <div className="header-popup">
                  <IconButton
                    color="inherit"
                    onClick={() => this.setState ({open: false})}
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    color="inherit"
                    className="header-information"
                  >
                    ADD INFORMATION ABOUT CAFE
                  </Typography>
                </div>
                <div>
                  <Button
                    color="inherit"
                    onClick={() => this.setState ({open: false})}
                  >
                    SAVE
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem className="list">
                <TextField
                  id="title"
                  label="Name Cafe"
                  value={this.state.title}
                  onChange={(event) => this.changeDataCafe(event, 'title')}
                  margin="normal"
                />

                <TextField
                  id="address"
                  label="Address"
                  value={this.state.address}
                  onChange={(event) => this.changeDataCafe(event, 'address')}
                  margin="normal"
                />

                <TextField
                  id="workingHours"
                  label="Working Hours"
                  value={this.state.workingHours}
                  onChange={(event) => this.changeDataCafe(event, 'workingHours')}
                  margin="normal"
                />
                <TextField
                  id="actions"
                  label="Special Proposition"
                  value={this.state.actions}
                  onChange={(event) => this.changeDataCafe(event, 'actions')}
                  margin="normal"
                />
              </ListItem>
              <ListItem className="list">
                <div className="check-and-upload">
                  <div className="upload">
                    <FormGroup row className="list">
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('wiFi')}
                            color="primary"
                          />
                        }
                        label="WiFi"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('paymentByCard')}
                            color="primary"
                          />
                        }
                        label="Credit Card"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('discount')}
                            color="primary"
                          />
                        }
                        label="Discounts"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('vegetarianMenu')}
                            color="primary"
                          />
                        }
                        label="Vegeterian menu"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('liveMusic')}
                            color="primary"
                          />
                        }
                        label="Live Music"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('businessLunch')}
                            color="primary"
                          />
                        }
                        label="Business Lunch"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('alcohol')}
                            color="primary"
                          />
                        }
                        label="Alcohol"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('terrace')}
                            color="primary"
                          />
                        }
                        label="Terracce"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => this.changeCheckbox('allNight')}
                            color="primary"
                          />
                        }
                        label="24 hours"
                      />
                    </FormGroup>
                  </div>
                  <div className="upload">
                    <ImageUploader
                      className={
                        this.newCafe.pictures.length === 0 ? 'shadow' : 'shadow-grean'
                      }
                      name="Upload image"
                      withIcon={true}
                      buttonText="Choose images"
                      onChange={this.onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                      singleImage={true}
                    />
                  </div>
                </div>
              </ListItem>
            </List>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className="save-button"
              onClick={() => this.setState ({open: false})}
            >
              SAVE
            </Button>
          </Dialog>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

    );
  }
}

export default geolocated ({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
}) (App);
