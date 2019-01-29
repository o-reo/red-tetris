var badPosition = {};

function checkNewPosition(oldPosition, newPosition) {
    try {
        newPosition.forEach(function (position) {
            console.log(position);
            if (position.row < 0 || position.row > 19 || position.column < 0 || position.column > 9) {
                throw badPosition;
            }
        });
    } catch (e) {
        if (e !== badPosition) {
            throw e;
        }
        return (false);
    }
    return (true);
}

export function displacePiece(state, direction) {
    let newState = Object.assign({}, state);
    let newCurrent = Object.assign({}, state.current);
    let newPosition = state.current.position.map(function (pos) {
        if (direction === 'down') {
            return ({column: pos.column, row: pos.row + 1});
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
    let newState = Object.assign({}, state);
    let newCurrent = Object.assign({}, state.current);
    const rotation = state.current.rotation[state.current.indexRotation - 1];
    let newPosition = state.current.position.map(function (pos, index) {
        return ({column: pos.column + rotation[index].column, row: pos.row + rotation[index].row});
    });
    if (checkNewPosition(state.current.position, newPosition) === true) {
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
    return (state);
}





