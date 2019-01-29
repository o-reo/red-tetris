import React from 'react';
import { connect } from 'react-redux';
import Board from '../containers/Board';
import './App.css';
import { createPiece, movePiece, rotatePiece } from "../actions";

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
    if (event.key === 'ArrowUp') {
        dispatch(rotatePiece());
    }
    if (event.key === ' ') {
        dispatch(createPiece());
    }
}

function handleDispatch(dispatch) {
    document.addEventListener('keydown', (event) =>
        handleKey(event, dispatch)
    );
    // setInterval(function() {dispatch(displacePiece('down'))}, 1000);
}

function App({dispatch, board}) {
    handleDispatch(dispatch);
    console.log(board);
    return (
        <div id="app">
            <h1>Red Tetris</h1>
            <Board className="board"/>
        </div>
    );
}

export default connect()(App);