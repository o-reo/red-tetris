import { combineReducers } from 'redux';
import { MOVE_PIECE, CREATE_PIECE, ROTATE_PIECE } from '../actions/index.js';
import { createPiece } from "./createPiece";
import { movePiece } from "./movePiece";
import { rotatePiece } from "./rotatePiece";

const initialState = () => {
    const board = Array(200).fill({color: "white"});
    return {
        board: board.map(function(square, index) {
            const coord = {row: Math.floor(index / 10), column: index % 10};
            return ({...square, ...coord});
        }),
        current: null
    }
};

const pieces = (state = initialState(), action) => {
    if (state.current === null) {
        return createPiece(state);
    }
    else if (Math.floor(Date.now() / 100) - state.current.lastMove  > 5 && state.current.lastMove !== 0) {
        return createPiece(state);
    }
    else {
        switch (action.type) {
            case CREATE_PIECE: {
                return createPiece(state);
            }
            case MOVE_PIECE: {
                return movePiece(state, action.direction);
            }
            case ROTATE_PIECE: {
                return rotatePiece(state);
            }
            default: {
                return (state);
            }
        }

    }
};

export default combineReducers({pieces});