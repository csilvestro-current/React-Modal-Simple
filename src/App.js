import React from 'react';
import './App.css';
import LandingModal from './components/LandingModal';

function App() {
  return (
    <div style={styles.container}>
      <LandingModal />
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    background: 'gray',
    height: '100vh',
  }
}