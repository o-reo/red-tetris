export const TOP = 'top';
export const BOTTOM = 'bottom';
export const LEFT = 'left';
export const RIGHT = 'right';
export const AGAINSTSIDE = 'againstSide';
export const ALREADYTAKEN = "alreadyTaken";

const positionWrong = (type, side) => ({type: type, side: side});

export const checkNewPosition = (oldPosition, newPosition, board) => {
    try {
        newPosition.forEach(function (position) {
            if (position.row < 0) {
                throw positionWrong(AGAINSTSIDE, TOP);
            }
            else if (position.row > 19) {
                throw positionWrong(AGAINSTSIDE, BOTTOM);
            }
            else if (position.column < 0) {
                throw positionWrong(AGAINSTSIDE, LEFT);
            }
            else if (position.column > 9) {
                throw positionWrong(AGAINSTSIDE, RIGHT);
            }
            else if (board[position.row * 10 + position.column].color !== "") {
                throw positionWrong(ALREADYTAKEN,null);
            }
        });
    } catch (e) {
        return (e);
    }
    return (true);
};

export const movePiece = (state, direction) => {
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
    if (checkNewPosition(state.current.position, newPosition, state.board) === true) {
        newCurrent.lastMove = Math.floor(Date.now() / 100);
        newCurrent.position = newPosition;
        newState.current = newCurrent;
    }
    return (newState);
};