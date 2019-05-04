import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Advertising from './Advertising';
import Footer from './Footer';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
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
  FaStar,
  FaMapMarker,
  FaHome,
} from 'react-icons/fa';
import '../styles/cafe-details.css';
import '../styles/footer.css';

export class CafeDetails extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      data: location.data || JSON.parse(localStorage.getItem('data')),
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      red: false,
    };
    if (location.data !== undefined) {
      localStorage.setItem('data', JSON.stringify(location.data));
    }
  }

  renderStars = (index) => {
    return [...Array(index)].map((e, i) => <FaStar key={i}/>);
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render () {
    const { data, red } = this.state;
    const element = data.list.find((item) => item.id === data.id);
    if(red) {
      return <Redirect to={{ pathname: '/'}} />
    }
    const location = element.location.split(" ");
    let degreesFirst = location[0].split("°");
    let minutaFirst = degreesFirst[1].split("'");
    let secFirst = minutaFirst[1].split('"');
    let degreesSecond = location[1].split("°");
    let minutaSecond = degreesSecond[1].split("'");
    let secSecond = minutaSecond[1].split('"');
    let degreesF = parseFloat(degreesFirst[0]);
    let minutaF = parseFloat(minutaFirst[0]);
    let secF = parseFloat(secFirst[0]);
    let degreesS = parseFloat(degreesSecond[0]);
    let minutaS = parseFloat(minutaSecond[0]);
    let secS = parseFloat(secSecond[0]);
    let totalSecondsF = (((minutaF*60) + secF)/3600) + degreesF;
    let totalSecondsS = (((minutaS*60) + secS)/3600) + degreesS;
    if(secFirst[1] === 'S') {
      totalSecondsF = (totalSecondsF*(-1));
    }
    if(secSecond[1] === 'W') {
      totalSecondsS = (totalSecondsS*(-1));
    }
    const myLocation = JSON.parse(localStorage.getItem('myLocation'));
    const pathCoordinates = [
      { lat: totalSecondsF, lng: totalSecondsS },
      { lat: myLocation.latitude, lng: myLocation.longitude }
    ];
    return (
      <div>
        <div className="advertising">
          <Advertising />
        </div>
        <div className="blua">
          <Fab
            color="primary"
            aria-label="Add"
            onClick={() => this.setState({red:true})}
            className="button-redirect-home"
          >
            <FaHome size={30} />
          </Fab>
        </div>
        <div className="main-block">
          <Card className="card card-main" key={element.id} >
            <CardActionArea>
              <CardMedia
                component="img"
                image={element.photos}
                title="Contemplative Reptile"
                className="image"
              />
              <CardContent className="BBB">
              <div className="JJJJJ">
                <Typography gutterBottom variant="h5" component="h2" className="title">
                {element.title}
                </Typography>
                <Typography component="div">
                  <div className="iconse">
                    <div>
                      Rate
                      {this.renderStars(element.rating)}
                    </div>
                    <div >
                    <FaMapMarker />
                    {element.address}
                    </div>
                    <div>
                      <FaClock />
                      {element.workingHours}
                    </div>
                  </div>

                  <div className="icons"> {element.about}</div>
                
                </Typography >
                <div className="common-for-box">
                {element.paymentByCard ? (<FaCcVisa  />) : null}
                {element.wiFi ? (<FaWifi  />) : null}
                {element.discount ? (<FaPercent />) : null}
                {element.vegetarianMenu ? (<FaPagelines />) : null}
                {element.liveMusic ? (<FaMusic />) : null}
                {element.businessLunch ? (<FaCoffee />) : null}
                {element.alcohol ? (<FaGlassMartini />) : null}
                {element.terrace ? (<FaTree/>) : null}
                {element.allNight ? (<FaClock/>) : null}</div>
                </div>
                <div className= "map-block">
                  <Map
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    style={{
                      width: '100%',
                      height: '50%'
                    }}
                    initialCenter={{
                      lat: totalSecondsF,
                      lng: totalSecondsS
                    }}
                    zoom={15}
                    className="map"
                  >
                    <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'cafe'}
                      position={{lat: totalSecondsF, lng: totalSecondsS}}
                    />
                    <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'myLocation'}
                      position={{lat: myLocation.latitude, lng: myLocation.longitude }}
                    />
                    <Polyline
                      path={pathCoordinates}
                      geodesic={true}
                      options={{
                          strokeColor: "#ff2527",
                          strokeOpacity: 0.75,
                          strokeWeight: 2,
                        }}
                    />
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
                    >
                      <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                      </div>
                    </InfoWindow>
                  </Map>
                </div>

                
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper ({
  apiKey: 'AIzaSyCnSpJkRWDVv0zfiYlByxm9s3_NicrOTtQ',
}) (CafeDetails);
