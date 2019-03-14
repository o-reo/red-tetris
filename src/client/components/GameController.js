import React from 'react';
// import PropTypes from "prop-types"
import PieceView from "./PieceView";

const gameControllerStyle = {
    justifySelf: "end",
    width: "22vh",
    height: "70vh",
    margin: "12.8vh 0 0 0",
    padding: "2vh 2vh 0 2vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#0b1d2d',
    borderColor: '#0b1d2d',
    borderWidth: '1vh 2vh 0 2vh',
    borderStyle: 'outset',
};

const buttonStyle = {
    padding: "1vh",
    fontFamily: "Orbitron",
    fontWeight: "500",
    fontSize: "2vh",
    textAlign: "center",
    color: "#e1301d",
    backgroundColor: "#5a6978",
    borderColor: "#0f1423",
    borderWidth: "1vh 1vh 1vh 1vh",
    borderRadius: "1vh 1vh 1vh 1vh",
    borderStyle: "outset"

};

const StartButton = ({ isRoomLeader, gameIsStarted, startParty }) => {
    return (
        <div>
            {isRoomLeader && gameIsStarted === false ?
                <button style={buttonStyle} onClick={startParty}>Start Game</button>
                :
                null
            }
        </div>
    );
};

const GameController = ({ isRoomLeader, piece0, piece1, piece2, gameIsStarted, startParty }) => {
    console.log(gameIsStarted);
    return (
        <div style={gameControllerStyle}>
            <div>
                <PieceView piece={piece2}/>
                <PieceView piece={piece1}/>
                <PieceView piece={piece0}/>
            </div>
            <StartButton isRoomLeader={isRoomLeader} gameIsStarted={gameIsStarted} startParty={startParty}/>
        </div>);
};

GameController.propTypes = {
    // onLoad: PropTypes.func.isRequired,
    // isListening: PropTypes.bool.isRequired,
};

export default GameController;