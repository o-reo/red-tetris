import clone from "lodash/clone";
import { putCurrentToBoard, getUncompletedRows, createShiftingArray, emptyCompleteRows } from "../utils/newPiece";

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