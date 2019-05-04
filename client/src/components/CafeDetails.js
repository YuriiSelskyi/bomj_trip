import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import Advertising from './Advertising';
import MapContainer from './GoogleMap';
import Footer from './Footer';
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
  }

  renderStars = (index) => {
    return [...Array(index)].map((e, i) => <FaStar key={i}/>);
  }

  render () {
    const { data, red } = this.state;
    const element = data.list.find((item) => item.id === data.id);
    if(red) {
      return <Redirect to={{ pathname: '/'}} />
    }
    console.log(element)
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
                image="https://tomato.ua/image/resize/storage/restaurants/5838548e2d36c300197aa20e/14975145605942424054acc_59424233817ef7.79381270.jpeg?w=1200&h=1200"
                title="Contemplative Reptile"
                className="image"
              />
              <CardContent>
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
<<<<<<< HEAD
                  <div className="icons"> {element.about}</div>
                 
=======
                  <div className="icons"> Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica</div>
>>>>>>> bc9ccf8a5a8d2c71983e5bf4bc1244797537ef25
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
<<<<<<< HEAD

                <div>
=======
                <div className="map-block">
                  <MapContainer />
>>>>>>> bc9ccf8a5a8d2c71983e5bf4bc1244797537ef25
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
