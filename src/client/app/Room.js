import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import WebFont from 'webfontloader';

import GameController from '../room/gameController/GameController';
import {env} from '../Store/Actions/Env';
import Board from '../room/game/Game';
// import GameWatcherComponent from './GameWatcherComponent';
import Footer from './Footer';
import {askPiece, listenerGame, movePiece, rotatePiece} from "../Store/Actions/Game";
import {BOTTOM, LEFT, RIGHT} from "../utils/direction";

WebFont.load({google: {families: ['Permanent Marker', 'Orbitron:black']}});


const appStyle = {
    height: '100%'
};

const gameStyle = {
    display: 'flex',
    justifyContent: 'space-around'
};

function handleKey(event, dispatch) {
    if (event.key === 'ArrowLeft') {
        dispatch(movePiece(LEFT));
    }
    if (event.key === 'ArrowRight') {
        dispatch(movePiece(RIGHT));
    }
    if (event.key === 'ArrowDown') {
        dispatch(movePiece(BOTTOM));
    }
    if (event.key === 'ArrowUp') {
        dispatch(rotatePiece());
    }
    if (event.key === ' ') {
        dispatch(askPiece());
    }
}


function connectToRoom(dispatch, hashPlayer, hashRoom, statePlayer, stateRoom) {
    if ((hashPlayer !== statePlayer || hashRoom !== stateRoom) &&
        (hashPlayer !== undefined && hashRoom !== undefined)) {
        dispatch(env(hashPlayer, hashRoom));
    }
}

function Room({match: {params}, dispatch, username, room, isConnected, isListening}) {
    useEffect(() => {
        connectToRoom(dispatch, params.player, params.room, username, room);
        if (!isListening) {
            dispatch(listenerGame());
            document.addEventListener('keydown', (event) => handleKey(event, dispatch));
        }
    });
    return (
        <div style={appStyle}>
            <div style={gameStyle}>
                {/*<GameWatcherComponent/>*/}
                <Board />
                <GameController />
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.env.username,
    room: state.env.room,
    isConnected: state.env.isConnected,
    isListening: state.game.isListening,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);