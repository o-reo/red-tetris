import { MOVE_PIECE, CREATE_PIECE, ROTATE_PIECE, LISTENER_GAME } from '../actions/pieces';
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
        current: null,
        isListening: false
    }
};

const listenerGame = (state) => {
    let newState = Object.assign({}, state);

    newState.isListening = true;
    return (newState);
};

const game = (state = initialState(), action) => {
    if (state.current === null) {
        return createPiece(state);
    }
    // else if (Math.floor(Date.now() / 100) - state.current.lastMove  > 5 && state.current.lastMove !== 0) {
    //     return createPiece(state);
    // }
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
            case LISTENER_GAME: {
                return listenerGame(state);
            }
            default: {
                return (state);
            }
        }
    }
};

export default game;