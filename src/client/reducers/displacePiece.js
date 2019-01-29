function againstSide(side)
{
    return ({type: "againstSide", side: side});
}

function checkNewPosition(oldPosition, newPosition) {
    try {
        newPosition.forEach(function (position) {
            if (position.row < 0) {
                throw againstSide("top");
            }
            else if (position.row > 19) {
                throw againstSide("bottom");
            }
            else if (position.column < 0) {
                throw againstSide("left");
            }
            else if (position.column > 9) {
                throw againstSide("right");
            }
        });
    } catch (e) {
        return (e);
    }
    return (true);
}

export function movePiece(state, direction) {
    let newState = Object.assign({}, state);
    let newCurrent = Object.assign({}, state.current);
    let newPosition = state.current.position.map(function (pos) {
        if (direction === 'down') {
            return ({column: pos.column, row: pos.row + 1});
        }
        if (direction === 'up') {
            return ({column: pos.column, row: pos.row - 1});
        }
        if (direction === 'left') {
            return ({column: pos.column - 1, row: pos.row});
        }
        if (direction === 'right') {
            return ({column: pos.column + 1, row: pos.row});
        } else {
            return (pos);
        }
    });
    if (checkNewPosition(state.current.position, newPosition) === true) {
        newCurrent.position = newPosition;
        newState.current = newCurrent;
        console.log('movement accepted');
    }
    return (newState);
}


export function rotatePiece(state) {
    let error;
    let newState = Object.assign({}, state);
    let newCurrent = Object.assign({}, state.current);
    const rotation = state.current.rotation[state.current.indexRotation - 1];
    let newPosition = state.current.position.map(function (pos, index) {
        return ({column: pos.column + rotation[index].column, row: pos.row + rotation[index].row});
    });
    if ((error = checkNewPosition(state.current.position, newPosition)) === true) {
        if (newCurrent.indexRotation < 4) {
            newCurrent.indexRotation++;
        } else {
            newCurrent.indexRotation = 1;
        }
        newCurrent.position = newPosition;
        newState.current = newCurrent;
        newCurrent.position = newPosition;
        newState.current = newCurrent;
        return (newState);
    }
    else {
        if (error.side === "left") {
            console.log(error.side);
            newState = movePiece(state, "right");
            newState = rotatePiece(newState);
        }
        else if (error.side === "right") {
            console.log(error.side);
            newState = movePiece(state, "left");
            newState = rotatePiece(newState);
        }
        else if (error.side === "top") {
            console.log(error.side);
            newState = movePiece(state, "down");
            newState = rotatePiece(newState);

        }
        else if (error.side === "bottom") {
            console.log(error.side);
            newState = movePiece(state, "up");
            newState = rotatePiece(newState);
        }
        return (newState);
    }
}





