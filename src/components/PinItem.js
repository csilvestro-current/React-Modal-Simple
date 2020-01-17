import React from 'react';
import { Link } from "react-router-dom";

const PinItem = props => {
    return (
        <div key={props.id} style={styles.container}>
            <Link to='/DetailedView'>
                {/* <img style={styles.avatar} src={props.val.pinUrl} alt="Logo" /> */}
                <p style={styles.p}>{props.val.pinThumb}</p>
                <p>{props.val.pinUrl}</p>
            </Link>
        </div>
    );
}

export default PinItem;

const styles = {
    container: {
        // display: 'flex',
        margin: '1%',
        width: '20%',
        height: 250,
        background: 'aqua',
        borderRadius: 10
    },
    p: {
        background: 'grey',
    }
}