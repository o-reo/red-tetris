import pieces from "../utils/tetriminos";
import { putCurrentToBoard, getUncompletedRows, createShiftingArray, emptyCompleteRows } from "../utils/newPiece"

export const createPiece = (state) => {
    const i = Math.floor(Math.random() * Math.floor(7));
    let newState = Object.assign({}, state);
    let newBoard = putCurrentToBoard(state.board, state.current);
    const uncompletedRows = getUncompletedRows(newBoard);
    let piece = {};

    if (uncompletedRows.length !== 20) {
        const shiftingArray = createShiftingArray(uncompletedRows);
        newBoard = emptyCompleteRows(shiftingArray, newBoard);
    }
    piece.position = Object.assign([], pieces[i].position);
    piece.color = pieces[i].color;
    piece.rotation = pieces[i].rotation;
    piece.indexRotation = pieces[i].indexRotation;
    piece.lastMove = 0;
    newState.current = piece;
    newState.board = newBoard;
    return (newState);
};