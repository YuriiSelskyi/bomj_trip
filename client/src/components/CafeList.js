import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  FaStar,
  FaClock,
  FaMapMarker,
} from 'react-icons/fa';
import '../styles/cafe-list.css';
export default class CafeList extends Component {
  state = {
    redirect: false,
    indexElement: null,
  };

  redirect = (index) => {
    this.setState({
      redirect: true,
      indexElement: index,
    })
  }
  
  renderStars = (index) => {
    const { list } = this.props;
    return [...Array(list[index].popular)].map((e, i) => <FaStar key={i}/>);
  }

  renderCafeList = () => {
    const {list} = this.props;
    return list.map((item, index) => (
      <Card className="card" key={index} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://newsroom.unsw.edu.au/sites/default/files/styles/full_width/public/thumbnails/image/5_junk_food_shutterstock_1.jpg?itok=X29w4W_j"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography component="p">
                <div className="icons"><div>{this.renderStars(index)}</div><div><FaClock /> {item.workingHours}</div></div>
                <p><FaMapMarker /> {item.address}</p>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary" onClick={() => this.redirect(index)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
    ));
  };

  render () {
    const { redirect, indexElement } = this.state;
    const { list } = this.props;
    if(redirect) {
      return <Redirect to='/cafe-details' />
    }

    return (
      <div className="list">
        {/* <Route path="/" exact component={HomePage} /> */}
        {this.renderCafeList()}
      </div>
    );
  }
}
