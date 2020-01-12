import React, { Component } from 'react';

class LandingModal extends Component {
    render() {
        return (
            <div style={styles.container}>
                <p>LandingModal</p>
            </div>
        );
    }
}

export default LandingModal;

const styles = {
    container: {
        display: 'flex',
        margin: 'auto',
        width: '40%',
        background: 'white',
        borderRadius: 10
    }
}