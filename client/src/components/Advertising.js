import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class Advertising extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: this.props.imgArr || ["https://images.freeimages.com/images/small-previews/773/koldalen-4-1384902.jpg"],
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
     style={{ height: '85px', backgroundImage: `url(${this.state.imgArr[0]})` }}>
     </div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
  render() {
    console.log("sadasd" + this.state.imgArr)
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
      placeholderItem={<div style={{ height: 200 }}>Placeholder</div>}

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