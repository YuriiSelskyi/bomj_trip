import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render () {
    const { google } = this.props;
    console.log(google);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        // defaultCenter={{ lat: google.currentLocation.lat, lng: google.currentLocation.lng }}
      >

        <Marker name={'Current location'} />

        <InfoWindow>
          <div>
            <h1>{this.props.google.map}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper ({
  apiKey: 'AIzaSyCnSpJkRWDVv0zfiYlByxm9s3_NicrOTtQ',
}) (MapContainer);
