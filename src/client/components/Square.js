import React from 'react';
import {connect} from 'react-redux';
import './Square.css';

const Square = ({index, color}) => (
    <div className={`square ${color}`}>
    </div>
);

export default connect()(Square);