export const rotatePiece = (state) => {
    let newState = Object.assign({}, state);
    let newCurrent = Object.assign({}, state.current);
    const rotation = state.current.rotation[state.current.indexRotation - 1];
    let newPosition = state.current.position.map(function (pos, index) {
        return ({column: pos.column + rotation[index].column, row: pos.row + rotation[index].row});
    });
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
};