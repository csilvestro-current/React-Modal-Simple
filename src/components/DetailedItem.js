import React from 'react';
import { Link } from "react-router-dom";

const DetailedItem = props => {
    return (
        <div key={props.id} style={styles.container}>
            <Link to='/DetailedView' style={styles.tmbnail}>
                pic
            </Link>
            <div style={styles.info}>
                <div>buttons</div>
                <div>url</div>
                <h1>title</h1>
                <p>description</p>
                <h2>Comments</h2>
                <p>link</p>
            </div>
        </div>
    );
}

export default DetailedItem;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '15%',
        width: 800,
        height: 250,
        background: 'aqua',
        borderRadius: 10,
        padding: '2%'
    },
    tmbnail: {
        width: '30%',
        borderRadius: 10,
    },
    info: {
        background: 'grey',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginLeft: '10%'
        
    }
}