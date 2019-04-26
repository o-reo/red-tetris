import clone from "lodash/cloneDeep";

export const fetchPieces = (state) => {
    return (state);
};

export const fetchPiecesRequest = (state) => {
    let newState = clone(state);
    newState.isFetchingPieces = true;
    return (newState);
};

export const fetchPiecesSuccess = (state, action) => {
    let newState = clone(state);
    if (Object.entries(newState.pieces[0]).length !== 0) {
        newState.pieces = newState.pieces.concat(action.pieces);
    }
    else {
        newState.pieces = action.pieces;
    }
    return (newState);
};

export const fetchPiecesFailure = (state) => {
    let newState = clone(state);
    newState.isFetchingPieces = false;
    return (newState);
};