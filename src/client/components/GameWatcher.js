import React from 'react';
// import PropTypes from "prop-types"

const gameWatcherStyle = {
    justifySelf: "end",
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

// const titleStyle = {
//     fontFamily: "Orbitron",
//     fontWeight: "500",
//     fontSize: "4vh",
//     textAlign: "center",
//     color: "#e1301d"
// };

const GameWatcher = () => {
    return (
        <div style={ gameWatcherStyle } >
        </div>);
};

GameWatcher.propTypes = {
    // onLoad: PropTypes.func.isRequired,
    // isListening: PropTypes.bool.isRequired,
};

export default GameWatcher;