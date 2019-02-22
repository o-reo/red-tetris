import { MOVE_PIECE } from "../actions/pieces";
import checkNewPosition from "../utils/checkNewPosition";
import getNewPosition from "../utils/getNewPosition";

const movePieceMiddleware = store => next => action => {
    if (action.type === MOVE_PIECE) {
        const board = store.getState().game.board;
        const position = store.getState().game.current.position;
        const newPosition = getNewPosition(position, action.direction);
        if (checkNewPosition(position, newPosition, board) === true) {
            next(action);
        }
    }
    else {
        next(action);
    }
};

export default movePieceMiddleware;