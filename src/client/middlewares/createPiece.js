import { CREATE_PIECE } from "../actions/pieces";

const createPieceMiddleware = store => next => action => {
    if (action.type === CREATE_PIECE) {
        next(action);
    }
    else {
        next(action);
    }
};

export default createPieceMiddleware;