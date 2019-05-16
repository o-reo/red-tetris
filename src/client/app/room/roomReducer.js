import clone from "lodash/clone";

import {
    JOIN_ROOM_SUCCESS,
    JOIN_ROOM_FAILURE,
    START_PARTY_SUCCESS,
    FETCH_PIECES_SUCCESS,
    GET_PIECE,
    MOVE_PIECE,
    ROTATE_PIECE,
    UPDATE_ROOM
} from "./roomActions";
import getNewPosition from "../../utils/getNewPosition";
import {createShiftingArray, emptyCompleteRows, getUncompletedRows, putCurrentToBoard} from "../../utils/newPiece";
// import {startParty} from "./controller/controllerActions";

const initialBoard = () => {
    const squares = Array(200).fill({color: "white"});
    const board  = squares.map((square, index) => (
        {...square, ...{row: Math.floor(index / 10), column: index % 10}}
    ));
    return (board);
};

const initialState = () => {
    return ({
        board: initialBoard(),
        current: null,
        pieces: [],
        indexPieces: 0,
        username: null,
        room: null,
        gameIsStarted: null,
        socket: null,
        isRoomLeader: null,
        players: null,
        errors: null
    });
};

export const joinRoomSuccess = (state, action) => {
    let newState = clone(state);

    newState.username = action.username;
    newState.room = action.room;
    newState.socket = action.socket;
    newState.players = action.players;
    newState.isRoomLeader = action.isRoomLeader;
    return (newState);
};

export const joinRoomFailure = (state, action) => {
    let newState = clone(state);

    newState.errors = action.errors;
    return (newState);
};

export const updateRoom = (state, action) => {
    let newState = clone(state);

    newState.players = action.players;
    if (action.leaderName === state.username) {
        newState.isRoomLeader = true;
    }
    return (newState);
};

const startParty = (state) => {
    let newState = clone(state);

    newState.gameIsStarted = true;
    return (newState);
};

export const fetchPieces = (state, action) => {
    let newState = clone(state);

    if (newState.pieces.length !== 0) {
        newState.pieces = newState.pieces.concat(action.pieces);
    }
    else {
        newState.pieces = action.pieces;
    }
    return (newState);
};

export const getPiece = (state) => {
    const piece = state.pieces[0];
    let newState = clone(state);
    newState.board = putCurrentToBoard(state.board, state.current);
    const uncompletedRows = getUncompletedRows(newState.board);
    if (uncompletedRows.length !== 20) {
        const shiftingArray = createShiftingArray(uncompletedRows);
        newState.board = emptyCompleteRows(shiftingArray, newState.board);
    }
    newState.pieces.shift();
    newState.indexPieces++;
    newState.current = piece;
    return (newState);
};

export const movePiece = (state, action) => {
    let newState = clone(state);
    newState.current.lastMove = Math.floor(Date.now() / 100);
    newState.current.position = getNewPosition(state.current.position, action.direction);
    return (newState);
};

export const rotatePiece = (state) => {
    let newState = clone(state);
    const rotation = state.current.rotation[state.current.indexRotation - 1];
    newState.current.position.forEach((position, index) => {
        position.column += rotation[index].column;
        position.row += rotation[index].row;
    });
    if (newState.current.indexRotation < 4) {
        newState.current.indexRotation++;
    } else {
        newState.current.indexRotation = 1;
    }
    newState.current.lastMove = Math.floor(Date.now() / 100);
    return (newState);
};

function room(state = initialState(), action) {
    switch (action.type) {
        case JOIN_ROOM_SUCCESS:
            return joinRoomSuccess(state, action);
        case JOIN_ROOM_FAILURE:
            return joinRoomFailure(state, action);
        case START_PARTY_SUCCESS:
            return (startParty(state));
        case FETCH_PIECES_SUCCESS:
            return (fetchPieces(state, action));
        case GET_PIECE:
            return (getPiece(state));
        case MOVE_PIECE:
            return (movePiece(state, action));
        case ROTATE_PIECE:
            return rotatePiece(state);
        case UPDATE_ROOM:
            return (updateRoom(state, action));
        default:
            return state;
    }
}

export default room;