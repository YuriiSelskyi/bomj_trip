import React, {Component} from 'react';
import { geolocated } from 'react-geolocated';
import FilterForCafe from './FilterForCafe';
import Advertising from './Advertising';
import CafeList from './CafeList';
import { ClimbingBoxLoader } from 'react-spinners';
import Fab from '@material-ui/core/Fab';
import { FaPlus } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';

import TextField from '@material-ui/core/TextField';
import '../styles/main.css';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
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
    if(this.props.coords !== null) {
      this.setState({
        myLocation: this.props.coords
      });
    }
    this.setState({
			cafes: data.data,
    });
  };

  render () {
    console.log(this.state)
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
        <div className="plus-button">
          <Fab color="primary" aria-label="Add" onClick={() => this.setState({ open: true })}>
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
                  <IconButton color="inherit" onClick={() => this.setState({ open: false })} aria-label="Close">
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className="header-information" >
                    ADD INFORMATION ABOUT CAFE
                  </Typography>
                </div>
                <div>
                  <Button color="inherit" onClick={() => this.setState({ open: false })}>
                    SAVE
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
            <List className="list">
              <ListItem className="list">
                <TextField
                  id="title"
                  label="Name Cafe"
                  value={this.state.title}
                  onChange={() => {}}
                  margin="normal"
                />

                <TextField
                  id="address"
                  label="Address"
                  value={this.state.address}
                  onChange={() => {}}
                  margin="normal"
                />
                
                <TextField
                  id="workingHours"
                  label="Working Hours"
                  value={this.state.workingHours}
                  onChange={() => {}}
                  margin="normal"
                />
                <TextField
                  id="actions"
                  label="Special Proposition"
                  value={this.state.actions}
                  onChange={() => {}}
                  margin="normal"
                />
              </ListItem>
              <ListItem className="list">
              
              </ListItem>
            </List>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);;
