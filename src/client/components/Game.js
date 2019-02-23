import React from 'react';
import PropTypes from "prop-types"
import Board from '../containers/Board';
import logo from '../assets/logo.svg';

const gameStyle = {
    width: "35vh",
    height: "80vh",
    margin: "2.7vh 0 0 0",
    padding: "2vh 2vh 0 2vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#0b1d2d',
    borderColor: '#0b1d2d',
    borderWidth: '1vh 2vh 0 2vh',
    borderStyle: 'outset',
};

const titleStyle = {
    fontFamily: "Orbitron",
    fontWeight: "500",
    fontSize: "4vh",
    textAlign: "center",
    color: "#e1301d"
};

const Game = ({onLoad, state, room, player}) => {
    if (state.game.isListening === false) {
        onLoad();
    }
    return (
        <div style={gameStyle} id={"game"}>
            <img src={logo} className="App-logo" alt="react-logo"/>
            <h1 style={titleStyle}>RED TETRIS</h1>
            <Board/>
        </div>);
};

Game.propTypes = {
    onLoad: PropTypes.func.isRequired,
    // isListening: PropTypes.bool.isRequired,
};

export default Game;