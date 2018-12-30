import React from 'react';
import './Square.css';


function changeColor(id) {
    console.log('ID = ', id);
}

function renderSquare(id, color) {
    if (color !== undefined && color === 'red') {
        return (<div id={id} className="square red" onClick={() => changeColor(id)}></div>);
    }
    return (<div id={id} className="square" onClick={() => changeColor(id)}></div>);
}

const Square = ({id, color}) => (
    renderSquare(id, color)
);

export default Square;