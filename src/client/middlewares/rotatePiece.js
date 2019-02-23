import checkNewPosition from "../utils/checkNewPosition";
import { movePiece } from "../actions/pieces";
import { TOP, BOTTOM, LEFT, RIGHT, ALREADY_TAKEN } from "../utils/direction";
import { ROTATE_PIECE } from "../actions/pieces";

const rotatePieceMiddleware = store => next => action => {
    if (action.type === ROTATE_PIECE) {
        const board = store.getState().game.board;
        const position = store.getState().game.current.position;
        const indexRotation = store.getState().game.current.indexRotation - 1;
        const rotation = store.getState().game.current.rotation[indexRotation];
        let newPosition = position.map(function (pos, index) {
            return ({column: pos.column + rotation[index].column, row: pos.row + rotation[index].row});
        });
        const error = checkNewPosition(position, newPosition, board, "rotate");
        if (error === true) {
            next(action);
        }
        else {
            if (error.side === LEFT) {
                next(movePiece(RIGHT));
            }
            else if (error.side === RIGHT) {
                next(movePiece(LEFT));
            }
            else if (error.side === BOTTOM) {
                next(movePiece(TOP));
            }
            else if (error.side === TOP) {
                next(movePiece(BOTTOM));
            }
            else if (error.type === ALREADY_TAKEN) {
                next(movePiece(TOP));
            }
            rotatePieceMiddleware(store)(next)(action);
        }
    }
    else {
        next(action);
    }
};

export default rotatePieceMiddleware;