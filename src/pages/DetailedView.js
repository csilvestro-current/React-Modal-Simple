import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import DetailedItem from '../components/DetailedItem';
import BackBtn from '../components/buttons/BackBtn';

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
        <DetailedItem style={styles.deModal}/>
      </section>
      <section style={styles.deItemContainer}>
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
    //alignItems: 'center',
    background: 'grey',
    padding: '4%',
    height: '100vh',
  },
  deItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  deItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2%',
  },
  deModal:{
    marginLeft:'10%'
  }
}