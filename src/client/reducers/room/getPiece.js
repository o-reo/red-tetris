import clone from "lodash/clone";
import { putCurrentToBoard, getUncompletedRows, createShiftingArray, emptyCompleteRows } from "../../utils/newPiece";

const updateSpectrum = (socket, board) => {
    let spectrum = [];
    board.forEach((bloc, index) => {
        const row = Math.floor(index / 10);
        const column = index % 10;
        if (column === 0) {
            spectrum[row] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (bloc.color !== 'white') {
            spectrum[row][column] = 1;
        }
    });
    socket.emit('update spectrum', spectrum);
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
    updateSpectrum(newState.socket, newState.board);
    return (newState);
};
