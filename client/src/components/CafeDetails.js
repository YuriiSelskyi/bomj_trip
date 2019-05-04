import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Advertising from './Advertising';
import MapContainer from './GoogleMap';
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Fab from '@material-ui/core/Fab';
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
  FaHome,
  FaTree,
  FaClock,
  FaStar,
  FaMapMarker,
  FaHome,
} from 'react-icons/fa';
import '../styles/cafe-details.css';
import '../styles/footer.css';

      red: false,
class CafeDetails extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      data: location.data || JSON.parse(localStorage.getItem('data')),
      red: false,
    };
    if (location.data !== undefined) {
      localStorage.setItem('data', JSON.stringify(location.data));
    }
    const { data, red } = this.state;

    if(red) {
      return <Redirect to={{ pathname: '/'}} />
    }
  renderStars = (index) => {
    return [...Array(index)].map((e, i) => <FaStar key={i}/>);
  }

  render () {
    const { data, red } = this.state;
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
    const element = data.list.find((item) => item.id === data.id);
    if(red) {
      return <Redirect to={{ pathname: '/'}} />
    }
    console.log(element)
                image={element.photos}
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

                  <div className="icons"> {element.about}</div>
                
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

                <div>
                </div>
                    </div>
                    <div>
                      <FaClock />
                      {element.workingHours}
        <div>
          <Footer/>
        </div>
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

                <div>
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

export default CafeDetails;
