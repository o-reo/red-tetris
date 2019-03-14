import clone from "lodash/clone";

import {
    MOVE_PIECE,
    GET_PIECE,
    ROTATE_PIECE,
    LISTENER_GAME,
    FETCH_PIECES_REQUEST,
    FETCH_PIECES_SUCCESS,
    FETCH_PIECES_FAILURE,
    START_PARTY_SUCCESS,
} from '../actions/game';

import {
    fetchPiecesRequest,
    fetchPiecesSuccess,
    fetchPiecesFailure
} from "./fetchPieces"

import { getPiece } from "./getPiece";
import { movePiece } from "./movePiece";
import { rotatePiece } from "./rotatePiece";
import { startPartySuccess} from "./startParty";

const initialState = () => {
    const board = Array(200).fill({color: "white"});
    return {
        board: board.map((square, index) => {
            const coord = {row: Math.floor(index / 10), column: index % 10};
            return ({...square, ...coord});
        }),
        current: null,
        isFetchingPieces: false,
        pieces: [{}, {}, {}],
        indexPieces: 0,
        isListening: false,
        isStarted: false
    }
};

const listenerGame = (state) => {
    let newState = clone(state);
    newState.isListening = true;
    return (newState);
};

const game = (state = initialState(), action) => {
    // else if (Math.floor(Date.now() / 100) - state.current.lastMove  > 5 && state.current.lastMove !== 0) {
    //     return getPiece(state);
    // }
    switch (action.type) {
        case GET_PIECE: {
            return getPiece(state);
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
        case FETCH_PIECES_REQUEST: {
            return fetchPiecesRequest(state);
        }
        case FETCH_PIECES_SUCCESS: {
            return fetchPiecesSuccess(state, action);
        }
        case FETCH_PIECES_FAILURE: {
            return fetchPiecesFailure(state);
        }
        case START_PARTY_SUCCESS: {
            return startPartySuccess(state);
        }
        default: {
            return (state);
        }
    }
};

export default game;