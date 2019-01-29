import { combineReducers } from 'redux';
import { MOVE_PIECE, CREATE_PIECE, ROTATE_PIECE } from '../actions/index.js';
import { createPiece } from "./createPiece";
import { displacePiece, rotatePiece } from "./displacePiece";

function initialState() {
    const board = Array(200).fill({color: "", state: 'free'});
    return {
        board: board.map(function(square, index) {
            const coord = {row: Math.floor(index / 10), column: index % 10};
            return ({...square, ...coord});
        }),
        activePiece: 1,
        current: null
    }
}

function game(state = initialState(), action) {
    switch (action.type) {
        case CREATE_PIECE: {
            return createPiece(state);
        }
        case MOVE_PIECE: {
            return displacePiece(state, action.direction);
        }
        case ROTATE_PIECE: {
            return rotatePiece(state);
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    game
});