import React from 'react';
import {connect} from 'react-redux';

const squareStyle = {
    height: "2.7824vh",
    width: "2.7824vh",
    borderStyle: "outset",
    borderWidth: "0.1vh",
    borderColor: "#749099"
};

const whiteSquare = {backgroundColor: "#5a6978"};
const redSquare = {backgroundColor: "#e12108"};
const darkblueSquare = {backgroundColor: "#262ee6"};
const yellowSquare = {backgroundColor: "#feef0c"};
const greenSquare = {backgroundColor: "#76f541"};
const lightblueSquare = {backgroundColor: "#16e3dc"};
const purpleSquare = {backgroundColor: "#b500ec"};
const orangeSquare = {backgroundColor: "#ff9b00"};

const Square = ({index, color}) => (
    <div style={Object.assign({},squareStyle, eval(color + "Square"))} >
    </div>
);

export default connect()(Square);