import { connect } from 'react-redux';
import Game from '../components/Game.js';
import { createPiece, movePiece, rotatePiece } from "../actions/pieces";
import { BOTTOM, LEFT, RIGHT } from "../utils/direction";


const handleKey = (event, dispatch) => {
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
        dispatch(createPiece());
    }
};

const handleDispatch = (dispatch) => {
    window.onload = function () {
        document.addEventListener('keydown', (event) => handleKey(event, dispatch));
        // setInterval(function () {
        //     dispatch(movePiece(BOTTOM))
        // }, 400);
    }
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({handleDispatch: handleDispatch(dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Game);