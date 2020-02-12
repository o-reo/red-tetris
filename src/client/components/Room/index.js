import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import GameController from '../../containers/Room/GameController';
import GameWatcher from "../../containers/Room/GameWatcher";

import { joinRoom, movePiece, rotatePiece } from "../../actions/room";
import { BOTTOM, LEFT, RIGHT, LOWEST } from "../../utils/direction";

import Board from '../../containers/Room/Board';
import PopUp from './PopUp';
import Footer from "../shared/Footer";

WebFont.load({google: {families: ['Permanent Marker', 'Orbitron: black']}});

const gameStyle = {
    display: 'flex',
    justifyContent: 'space-around'
};

function handleKey(dispatch, interval) {
    return function(e) {
        switch (e.key) {
            case 'Escape':
                clearInterval(interval);
                break;
            case 'ArrowLeft':
                dispatch(movePiece(LEFT));
                break;
            case 'ArrowRight':
                dispatch(movePiece(RIGHT));
                break;
            case 'ArrowDown':
                dispatch(movePiece(BOTTOM));
                break;
            case ' ':
                dispatch(movePiece(LOWEST));
                break;
            case 'ArrowUp':
                dispatch(rotatePiece());
                break;

        }
    }
}

export default ({dispatch, intervalMove, errors, match: {params}}) => {

    useEffect(() => {
        dispatch(joinRoom(params.player, params.room));
        const interval = setInterval(() => {
            dispatch(movePiece(BOTTOM));
        }, intervalMove);

        const curriedEvent = handleKey(dispatch, interval);
        document.addEventListener('keydown', curriedEvent);

        return () => {
            document.removeEventListener('keydown', curriedEvent);
            clearInterval(interval);
        }
    });

    return (
        <div onKeyDown={(e) => handleKey(e, dispatch)} tabIndex={0} >
            {errors === null ?
                <div style={gameStyle}>
                    <GameWatcher/>
                    <Board/>
                    <GameController/>
                </div>
                :
                <PopUp errors={errors}/>
            }
            <Footer/>
        </div>
    )
}
