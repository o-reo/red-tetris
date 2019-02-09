import React from 'react';
import {connect} from 'react-redux';
import Board from '../containers/Board';
import './App.css';

const App = () => (
    <div id="app">
        <h1>Red Tetris</h1>
        <Board className="board"/>
    </div>
);

export default connect()(App);