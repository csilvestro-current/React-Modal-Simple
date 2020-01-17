import React from 'react';
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackBtn = props => {
    return (
        <button key={props.id} style={styles.container}>
            <Link to='/Home'>
                <IoMdArrowRoundBack />
            </Link>
        </button>
    );
}

export default BackBtn;

const styles = {
    container: {
        // display: 'flex',
        // margin: '1%',
        // padding: '20%',
        width: 100,
        height: 100,
        //height: 50,
        background: 'aqua',
        borderRadius: '50%',
        fontSize: '1.75em'
    },
    p: {
        background: 'grey',
    }
}