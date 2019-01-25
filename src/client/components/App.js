import React from 'react';
import Board from '../containers/Board';
import './App.css';

const App = () => {
    return (
        <div id="app">
            <h1>Red Tetris</h1>
            <Board className="board"/>
        </div>
    );
};

export default App;