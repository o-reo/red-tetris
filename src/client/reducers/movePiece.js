import getNewPosition from "../utils/getNewPosition";

export const movePiece = (state, direction) => {
    let newState = Object.assign({}, state);
    let newCurrent = Object.assign({}, state.current);

    newCurrent.lastMove = Math.floor(Date.now() / 100);
    newCurrent.position = getNewPosition(state.current.position, direction);
    newState.current = newCurrent;
    return (newState);
};