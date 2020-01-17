import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './components/Routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
export default App;

// const styles = {
//   //modal: {
//     // display: 'flex',
//     // flexDirection: 'column',
//     // justifyContent: 'center',
//     // alignContent: 'center',
//     // background: 'gray',
//     // height: '100vh',
//   //}
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     background: 'smokegrey',
//     padding: '4%',
//     height: '100vh',
//   }
// }