import React from 'react';
import './Square.css';
import {createStore} from 'redux';
import tetrisApp from "../reducers";
import {changeColor} from '../actions/changeColor.js';

const store = createStore(tetrisApp);
store.subscribe(() => console.log(store.getState()));


function handleClick(row, column) {
    console.log('Row = ', row, ' column = ', column);
    store.dispatch(changeColor(row * 10 + column, "red"));
}

function Square(props) {
    let color = props.value.color;
    let row = props.row;
    let column = props.column;

    return (
        <div className={`square ${ color }`}  onClick={() => handleClick(row, column)}></div>
    );
}

export default Square;