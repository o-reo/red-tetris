import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import WebFont from 'webfontloader';

import GameController from './controller/Controller';
// import { env } from '../../Store/Actions/Env';
import Board from './board/Board';
import {joinRoom} from "./roomActions";
import PopUp from './PopUp';
import Footer from "../Footer";
import {askPiece, movePiece, rotatePiece} from "./roomActions";
import {BOTTOM, LEFT, RIGHT} from "../../utils/direction";

WebFont.load({google: {families: ['Permanent Marker', 'Orbitron: black']}});

const gameStyle = {
    display: 'flex',
    justifyContent: 'space-around'
};

function handleKey(event, dispatch) {
    switch (event.key) {
        case 'ArrowLeft':
            dispatch(movePiece(LEFT));
            break;
        case 'ArrowRight':
            dispatch(movePiece(RIGHT));
            break;
        case 'ArrowDown':
            dispatch(movePiece(BOTTOM));
            break;
        case 'ArrowUp':
            dispatch(rotatePiece());
            break;
        case ' ':
            dispatch(askPiece());
            break;
    }
}

function Room({dispatch, errors, match: {params}}) {

    console.log(window.RTCPeerConnection);

    useEffect(() => {
        dispatch(joinRoom(params.player, params.room));
    }, []);

    return (
        <div onKeyDown={(e) => handleKey(e, dispatch)} tabIndex={0} >
            {errors === null ?
                <div style={gameStyle}>
                    {/*<GameWatcherComponent/>*/}
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

const mapStateToProps = (state) => ({
    errors: state.room.errors
});

const mapDispatchToProps = dispatch => ({ dispatch: dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Room);