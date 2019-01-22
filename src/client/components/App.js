import React from 'react';
// import Board from './Board.js';
import VisibleBoard from '../containers/Board.js';
import './App.css';

const App = () => {
    return (
        <div id="app">
            <h1>Red Tetris</h1>
            <VisibleBoard className="board"/>
        </div>
    );
};

export default App;