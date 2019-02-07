import { connect } from 'react-redux';
import App from '../components/App.js';
import {createPiece, movePiece, rotatePiece} from "../actions";

function handleKey(event, dispatch) {
    if (event.key === 'ArrowLeft') {
        dispatch(movePiece('left'));
    }
    if (event.key === 'ArrowRight') {
        dispatch(movePiece('right'));
    }
    if (event.key === 'ArrowDown') {
        dispatch(movePiece('down'));
    }
    if (event.key === 'ArrowUp') {
        dispatch(rotatePiece());
    }
    if (event.key === ' ') {
        dispatch(createPiece());
    }
}

function handleDispatch(dispatch) {
    document.addEventListener('keydown', (event) => handleKey(event, dispatch));
    setInterval(function () {
        dispatch(movePiece('down'))
    }, 300);
}

function mapStateToProps(state) {
    return (state);
}

function mapDispatchToProps(dispatch) {
    return ({
        handleDispatch: handleDispatch(dispatch)
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
