import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class Advertising extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: this.props.imgArr || ["https://origami.lviv.ua/wp-content/uploads/slider-pizza-2.jpg.pagespeed.ce.SKOp6RpAao.jpg",
                                    "https://panda-sushi.com.ua/uploads/pages/delivery/39_Delivery.jpg.jpg",
                                    "http://www.fuji-sushi.kiev.ua/wp-content/uploads/2017/07/banner2.png"]
    };
  }

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(3),
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
    // <div key={i}>

    //     <img src="http://www.fuji-sushi.kiev.ua/wp-content/uploads/2017/07/banner2.png"></img>
    // </div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
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
        placeholderItem={<div style={{ height: 200,}}>Placeholder</div>}

        // Carousel configurations
        numberOfCards={3}
        gutter={1}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
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

// export default class Advertising extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }