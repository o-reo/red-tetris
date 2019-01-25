import React from 'react';
import { connect } from 'react-redux';
import './Square.css';
import { changeColor } from "../actions/changeColor";

const Square = ({index, color, dispatch}) => {
    return (
        <div
            className={`square ${ color }`}
            onClick={() => dispatch(changeColor(index, "red"))}
        >
        </div>
    );
};

export default connect()(Square);