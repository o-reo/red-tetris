import { connect } from 'react-redux';
import Game from '../components/Game.js';
import { askPiece, movePiece, rotatePiece, listenerGame } from "../actions/game";
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
        dispatch(askPiece());
    }
};

const startParty = (dispatch, state) => {//Gmadec a rajouté state
    document.addEventListener('keydown', (event) => {console.log("KEY_DOWN:");console.log(state.isListening);alert("KEY_DOWN");handleKey(event, dispatch)});
    dispatch(listenerGame());
    // setInterval(function () {
    //     dispatch(movePiece(BOTTOM))
    // }, 400);
};

const mapStateToProps = (state) => ({
    isListening: state.game.isListening,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoad: () => startParty(dispatch, ownProps),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);