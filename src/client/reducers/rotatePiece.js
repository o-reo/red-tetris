import { checkNewPosition, movePiece } from "./movePiece";
import { TOP, BOTTOM, LEFT, RIGHT, ALREADYTAKEN } from "./movePiece";

export const rotatePiece = (state) => {
    let error;
    let newState = Object.assign({}, state);
    let newCurrent = Object.assign({}, state.current);
    const rotation = state.current.rotation[state.current.indexRotation - 1];
    let newPosition = state.current.position.map(function (pos, index) {
        return ({column: pos.column + rotation[index].column, row: pos.row + rotation[index].row});
    });
    if ((error = checkNewPosition(state.current.position, newPosition, state.board)) === true) {
        if (newCurrent.indexRotation < 4) {
            newCurrent.indexRotation++;
        } else {
            newCurrent.indexRotation = 1;
        }
        newCurrent.lastMove = Math.floor(Date.now() / 100);
        newCurrent.position = newPosition;
        newState.current = newCurrent;
        newCurrent.position = newPosition;
        newState.current = newCurrent;
        return (newState);
    }
    else {
        if (error.side === LEFT) {
            newState = movePiece(state, "right");
            newState = movePiece(newState);
        }
        else if (error.side === RIGHT) {
            newState = movePiece(state, "left");
            newState = movePiece(newState);
        }
        else if (error.side === TOP) {
            newState = movePiece(state, "down");
            newState = movePiece(newState);

        }
        else if (error.side === BOTTOM) {
            newState = movePiece(state, "up");
            newState = movePiece(newState);
        }
        else if (error.type === ALREADYTAKEN) {
            newState = movePiece(state, "up");
            newState = movePiece(newState);
        }
        return (newState);
    }
};