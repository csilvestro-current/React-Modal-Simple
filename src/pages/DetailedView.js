import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import DetailedItem from '../components/DetailedItem';


class DetailedView extends Component {
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
  // let pinList = this.state.pins.map((element, i) => {
  //   //Pass through the key and value from the props comp.
  // return <PinItem key={i} val={element}/>
  // })
  return (
    <div style={styles.container}>
      <section style={styles.deItem}>
        <BackBtn />
        <DetailedItem />
      </section>
      <section>
        <h2>More like this</h2>
        <div>More list here....</div>
      </section>
    </div>
  );
  }
}
export default DetailedView;

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
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    background: 'smokegrey',
    padding: '4%',
    height: '100vh',
  }
}