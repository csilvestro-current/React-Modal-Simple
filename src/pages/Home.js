import React, {Component} from 'react';
import PinItem from '../components/PinItem'
//function App() {
class Home extends Component {
  state = {
    pins: [{
      //pinId:
      pinUrl: require('../images/js.jpg'),
      pinTitle: 'JavaScript',
      pinPrice: '$1.99',
      pinThumb: 'small'
    },
    {
      //pinId:
      pinUrl: require('../images/js.jpg'),
      pinTitle: 'Cheese',
      pinPrice: '$3.49',
      pinThumb: 'large'
    },
    {
      //pinId:
      pinUrl: require('../images/js.jpg'),
      pinTitle: 'Cheese',
      pinPrice: '$3.49',
      pinThumb: 'large'
    }]
  }

  render() {
  let pinList = this.state.pins.map((element, i) => {
    //Pass through the key and value from the props comp.
  return <PinItem key={i} val={element}/>
  })
  return (
    <div style={styles.container}>
      {pinList}
    </div>
  );
  }
}
export default Home;

const styles = {
  //modal: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignContent: 'center',
    // background: 'gray',
    // height: '100vh',
  //}
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: 'smokegrey',
    padding: '4%',
    height: '100vh',
  }
}