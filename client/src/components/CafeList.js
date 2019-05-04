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
    id: null,
  };

  redirect = (index) => {
    this.setState({
      redirect: true,
      id: index,
    })
  }
  
  renderStars = (index) => {
    const { list } = this.props;
    return [...Array(list[index].popular)].map((e, i) => <FaStar key={i}/>);
  }

  renderCafeList = () => {
    const {list} = this.props;
    return list.map((item, index) => (
      <Card className="card" key={index} onClick={() => this.redirect(item.id)}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.photos}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography component="div">
                <div className="icons"><div>{this.renderStars(index)}</div><div><FaClock /> {item.workingHours}</div></div>
                <div><FaMapMarker /> {item.address}</div>
                {item.about !== null ? `${item.about.substr(0,100)}...` : 'WE DO NOT HAVE ANY INFORMATION ABOUT THIS CAFE...'}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="learn-more">
            <Button size="small" color="primary" onClick={() => this.redirect(item.id)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
    ));
  };

  render () {
    const { redirect, id } = this.state;
    const { list, myLocation } = this.props;
    if(redirect) {
      return <Redirect to={{
        pathname: '/cafe-details',
        data: {
          list,
          id,
          myLocation,
        }
      }} />
    }

    return (
      <div className="list">
        {this.renderCafeList()}
      </div>
    );
  }
}
