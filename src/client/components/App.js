import React from 'react';
import { connect } from 'react-redux';
import Board from '../containers/Board';
import './App.css';
import { createPiece, movePiece, rotatePiece } from "../actions/changeColor";

const tetriminos = [
    {   position: [[4, 5, 14, 15]],
        color: 'red'
    },
    {   position: [[4, 14, 24, 34]],
        rotation: [[9, 14, -9, -18]],
        color: 'light-blue'},
    {
        position: [4, 14, 15, 16],
        indexRotation: 0,
        rotation: [[1, -10, -1, 8], [11, 2, -9, -20], [8, 19, 10, 1], [-21, -12, -1, 10]],
        color: 'dark-blue'
    },
    {position: [[5, 14, 15, 25]], color: 'yellow'},
    {position: [[14, 15, 5, 6]], color: 'purple'},
    {position: [[5, 14, 15, 24]], color: 'orange'},
    {position: [[5, 13, 14, 15]], color: 'green'}
];

function handleKey(event, dispatch) {
    if (event.key === 'ArrowLeft') {
        dispatch(movePiece('left'));
    }
    if (event.key === 'ArrowRight') {
        dispatch(movePiece('right'));
    }
    if (event.key === 'ArrowDown') {
        dispatch(movePiece('down'));
    }
    if (event.key === ' ') {
        const tetri = tetriminos[2];
        dispatch(createPiece(tetri.position, tetri.color));
    }
}

function handleDispatch(dispatch) {
    document.addEventListener('keydown', (event) =>
        handleKey(event, dispatch)
    );
    setInterval(function() {dispatch(movePiece('down'))}, 1000);
}

function App({dispatch}) {
    handleDispatch(dispatch);
    return (
        <div id="app">
            <h1>Red Tetris</h1>
            <Board className="board"/>
        </div>
    );
}

export default connect()(App);