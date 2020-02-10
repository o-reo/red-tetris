import clone from "lodash/clone";

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
