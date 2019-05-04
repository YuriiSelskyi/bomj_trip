import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import {ClimbingBoxLoader} from 'react-spinners';

const noOfItems = 12;
const noOfCards = 3;
const autoPlayDelay = 5000;

export default class Advertising extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: this.props.imgArr || ["https://origami.lviv.ua/wp-content/uploads/slider-pizza-2.jpg.pagespeed.ce.SKOp6RpAao.jpg",
                                    "https://panda-sushi.com.ua/uploads/pages/delivery/39_Delivery.jpg.jpg",
                                    "http://www.fuji-sushi.kiev.ua/wp-content/uploads/2017/07/banner2.png",
                                    "https://afisha.lutsk.ua/sites/image.life/company116/news-13997-210344838630792905175243838994881140790767n-12212-kb.jpg",
                                    "https://static.wixstatic.com/media/3a6d9a_f131f5159e6e43b89bb7045b0805f8d8~mv2_d_8504_2835_s_4_2.jpg/v1/fill/w_630,h_210,al_c,q_80,usm_0.66_1.00_0.01/3a6d9a_f131f5159e6e43b89bb7045b0805f8d8~mv2_d_8504_2835_s_4_2.jpg",
                                    "https://respect-shoes.com.ua/image/data/schfstlivie%20chasu.jpg"]
    };
  }

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(6),
      })
    }, 100);
  }
  //createChildren function has to fill the images from dataBase
  
  createChildren = n => range(n).map(i =>
     <div key={i}
     style={{ height: '150px',
              width:'100%', 
              backgroundImage: `url(${this.state.imgArr[i]})`, 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center center',
              backgroundSize: 'cover'}}>
		 </div>);
		 
	componentDidMount() {
		this.interval = setInterval(this.tick, autoPlayDelay);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick = () => this.setState(prevState => ({
		activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
	}));

	onChange = value => this.setState({ activeItemIndex: value });
		
  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      
       <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={10}
        minimumPlaceholderTime={1000}
        placeholderItem={<div > 
        <ClimbingBoxLoader
                sizeUnit={'px'}
                size={15}
                color={'rgb(147, 149, 235)'}
              />
        </div>}

        // Carousel configurations
        numberOfCards={3}
        gutter={1}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
				requestToChangeActive={this.onChange}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
} 
