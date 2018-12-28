import React from 'react';
import './Square.css';

function renderSquare(id) {
    if (Math.floor(id / 10) === 19) {
        return (<div id={id} className="square red"></div>);
    }
    return (<div id={id} className="square"></div>);
}

const Square = ({id}) => (
    renderSquare(id)
);

export default Square;