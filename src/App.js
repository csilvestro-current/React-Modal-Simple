import React from 'react';
import './App.css';
import SignInModal from './components/SignInModal';


///SignIn Modal with Local Storage
function App() {
  return (
    <div style={styles.container}>
      <SignInModal />
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