import React from 'react';
import { connect } from 'react-redux';
import './Square.css';

function Square({index, color}) {
    return (
        <div className={`square ${ color }`}>
        </div>
    );
}

export default connect()(Square);