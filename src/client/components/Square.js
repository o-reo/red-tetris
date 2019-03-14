import React from 'react';
import {connect} from 'react-redux';
import clone from "lodash/clone";
import PropTypes from "prop-types"

const squareStyle = {
    height: "2.5vh",
    width: "2.5vh",
    borderStyle: "outset",
    borderWidth: "0.2vh",
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

const Square = ({index, color}) => {
    if (color === "white") { return <div style={Object.assign({}, squareStyle, whiteSquare)} > </div> }
    if (color === "red") { return <div style={Object.assign({}, squareStyle, redSquare)} > </div> }
    if (color === "darkblue") { return <div style={Object.assign({}, squareStyle, darkblueSquare)} > </div> }
    if (color === "yellow") { return <div style={Object.assign({}, squareStyle, yellowSquare)} > </div> }
    if (color === "green") { return <div style={Object.assign({}, squareStyle, greenSquare)} > </div> }
    if (color === "lightblue") { return <div style={Object.assign({}, squareStyle, lightblueSquare)} > </div> }
    if (color === "purple") { return <div style={Object.assign({}, squareStyle, purpleSquare)} > </div> }
    if (color === "orange") { return <div style={Object.assign({}, squareStyle, orangeSquare)} > </div> }
};

Square.propTypes = {
    index: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

export default connect()(Square);