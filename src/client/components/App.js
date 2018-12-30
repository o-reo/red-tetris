import React from 'react';
import Board from './Board.js';
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Red Tetris</h1>
            <Board className="board"/>
        </div>
        );
};

export default App;