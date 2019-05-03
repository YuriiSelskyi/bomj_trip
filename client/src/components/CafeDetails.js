import React, {Component} from 'react';
import Advertising from './Advertising';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
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
} from 'react-icons/fa';
import '../styles/cafe-details.css';

class CafeDetails extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      data: location.data || JSON.parse(localStorage.getItem('data')),
    };
    if (location.data !== undefined) {
      localStorage.setItem('data', JSON.stringify(location.data));
    }
  }

  renderStars = (index) => {
    return [...Array(index)].map((e, i) => <FaStar key={i}/>);
  }

  render () {
    const { data } = this.state;
    const element = data.list.find((item) => item.id === data.id);
    console.log(element)
    return (
      <div>
        <div className="advertising">
          <Advertising />
        </div>
        <div className="main-block">
          <Card className="card card-main" key={element.id} >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://newsroom.unsw.edu.au/sites/default/files/styles/full_width/public/thumbnails/image/5_junk_food_shutterstock_1.jpg?itok=X29w4W_j"
                title="Contemplative Reptile"
                className="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {element.title}
                </Typography>
                <Typography component="div">
                  <div className="icons">
                    <div>
                      Rate
                      {this.renderStars(element.rating)}
                    </div>
                    <div>
                      <FaClock />
                      {element.workingHours}
                    </div>
                  </div>
                  <div>
                    <FaMapMarker />
                    {element.address}
                  </div>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
                {element.paymentByCard ? (<FaCcVisa />) : null}
                {element.wiFi ? (<FaWifi />) : null}
                {element.discount ? (<FaPercent />) : null}
                {element.vegetarianMenu ? (<FaPagelines />) : null}
                {element.liveMusic ? (<FaMusic />) : null}
                {element.businessLunch ? (<FaCoffee />) : null}
                {element.alcohol ? (<FaGlassMartini />) : null}
                {element.terrace ? (<FaTree />) : null}
                {element.allNight ? (<FaClock />) : null}
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}

export default CafeDetails;
