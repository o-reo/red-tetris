export const putCurrentToBoard = (board, current) => {
    if (current !== null) {
        let newBoard = Object.assign([], board);
        current.position.forEach(function (pos) {
            newBoard[pos.row * 10 + pos.column].color = current.color;
        });
        return (newBoard);
    } else {
        return (board);
    }
};

export const getUncompletedRows = (board) => {
    let rows = [];
    let complete = true;
    board.forEach(function (square, index) {
        if (square.color === "white") {
            complete = true;
        }
        if (index % 10 === 9) {
            if (complete === true) {
                rows.push(Math.floor(index / 10));
            }
            complete = false;
        }
    });
    return (rows.reverse());
};

export const createShiftingArray = (uncompletedRows) => {
    let array = Array(20).fill({}).map(function (x, index) {
        return({index: 19 - index, shiftWith: -1});
    });
    uncompletedRows.forEach(function (uncompletedRow, index) {
        if (uncompletedRow !== array[index].index) {
            array[index].shiftWith = uncompletedRow;
        }
        else {
            array[index].shiftWith = array[index].index;
        }
    });
    return (array);
};

export const emptyCompleteRows = (shiftingArray, board) => {
    board.reverse();
    board = board.map(function (square) {
        const shiftWith = shiftingArray[19 - square.row].shiftWith;
        if (square.row !== shiftWith && shiftWith !== -1) {
            square.color = board[((20 - shiftWith) * 10) - square.column - 1].color;
        }
        else if (shiftWith === - 1) {
            square.color = "white";
        }
        return (square);
    });
    board.reverse();
    return (board);
};