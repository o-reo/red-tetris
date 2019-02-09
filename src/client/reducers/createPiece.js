const pieces = [
    {
        position: [{column: 4, row: 0}, {column: 5, row: 0}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
            ]
        ,
        color: 'yellow'
    },
    {
        position: [{column: 4, row: 0}, {column: 4, row: 1}, {column: 4, row: 2}, {column: 4, row: 3}],
        indexRotation: 1,
        rotation:
            [
                [{column: -1, row: 1}, {column: 0, row: 0}, {column: 1, row: -1}, {column: 2, row: -2}],
                [{column: 2, row: -1}, {column: 1, row: 0}, {column: 0, row: 1}, {column: -1, row: 2}],
                [{column: 1, row: 2}, {column: 0, row: 1}, {column: -1, row: 0}, {column: -2, row: -1}],
                [{column: -2, row: -2}, {column: -1, row: -1}, {column: 0, row: 0}, {column: 1, row: 1}],
            ],
        color: 'light-blue'
    },
    {
        position: [{column: 3, row: 0}, {column: 3, row: 1}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 2, row: 0}, {column: 1, row: -1}, {column: 0, row: 0}, {column: -1, row: 1}],
                [{column: 0, row: 2}, {column: 1, row: 1}, {column: 0, row: 0}, {column: -1, row: -1}],
                [{column: -2, row: 0}, {column: -1, row: 1}, {column: 0, row: 0}, {column: 1, row: -1}],
                [{column: 0, row: -2}, {column: -1, row: -1}, {column: 0, row: 0}, {column: 1, row: 1}],
            ]
        ,
        color: 'dark-blue'
    },
    {
        position: [{column: 3, row: 0}, {column: 4, row: 0}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 2, row: -1}, {column: 1, row: 0}, {column: 0, row: -1}, {column: -1, row: 0}],
                [{column: 0, row: 2}, {column: -1, row: 1}, {column: 0, row: 0}, {column: -1, row: -1}],
                [{column: -1, row: 0}, {column: 0, row: -1}, {column: 1, row: 0}, {column: 2, row: -1}],
                [{column: -1, row: -1}, {column: 0, row: 0}, {column: -1, row: 1}, {column: 0, row: 2}],
            ]
        ,
        color: 'red'
    },
    {
        position: [{column: 4, row: 0}, {column: 3, row: 1}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 1, row: 1}, {column: 1, row: -1}, {column: 0, row: 0}, {column: -1, row: 1}],
                [{column: -1, row: 1}, {column: 1, row: 1}, {column: 0, row: 0}, {column: -1, row: -1}],
                [{column: -1, row: -1}, {column: -1, row: 1}, {column: 0, row: 0}, {column: 1, row: -1}],
                [{column: 1, row: -1}, {column: -1, row: -1}, {column: 0, row: 0}, {column: 1, row: 1}],
            ]
        ,
        color: 'purple'
    },
    {
        position: [{column: 3, row: 1}, {column: 4, row: 1}, {column: 5, row: 0}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 1, row: -1}, {column: 0, row: 0}, {column: 0, row: 2}, {column: -1, row: 1}],
                [{column: 1, row: 1}, {column: 0, row: 0}, {column: -2, row: 0}, {column: -1, row: -1}],
                [{column: -1, row: 1}, {column: 0, row: 0}, {column: 0, row: -2}, {column: 1, row: -1}],
                [{column: -1, row: -1}, {column: 0, row: 0}, {column: 2, row: 0}, {column: 1, row: 1}],
            ]
        ,
        color: 'orange'
    },
    {
        position: [{column: 3, row: 1}, {column: 4, row: 1}, {column: 4, row: 0}, {column: 5, row: 0}],
        indexRotation: 1,
        rotation:
            [
                [{column: 1, row: 0}, {column: 0, row: -1}, {column: -1, row: 0}, {column: -2, row: -1}],
                [{column: -1, row: 0}, {column: 0, row: 1}, {column: 1, row: 0}, {column: 2, row: 1}],
                [{column: 1, row: 0}, {column: 0, row: -1}, {column: -1, row: 0}, {column: -2, row: -1}],
                [{column: -1, row: 0}, {column: 0, row: 1}, {column: 1, row: 0}, {column: 2, row: 1}],
            ]
        ,
        color: 'green'
    }
];

const putCurrentToBoard = (board, current) => {
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

const getUncompletedRows = (board) => {
    let rows = [];
    let complete = true;
    board.forEach(function (square, index) {
        if (square.color === "") {
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

const createShiftingArray = (uncompletedRows) => {
    let array = Array(20).fill({}).map(function (x, index) {
        return({index: 19 - index, shiftWith: -1});
    });
    for (let i = 0; i < uncompletedRows.length; i++) {
        if (uncompletedRows[i] !== array[i].index) {
            array[i].shiftWith = uncompletedRows[i];
        }
        else {
            array[i].shiftWith = array[i].index;
        }
    }
    return (array);
};

const emptyCompleteRows = (shiftingArray, board) => {
    board.reverse();
    board = board.map(function (square) {
        const shiftWith = shiftingArray[19 - square.row].shiftWith;
        if (square.row !== shiftWith && shiftWith !== -1) {
            square.color = board[((20 - shiftWith) * 10) - square.column - 1].color;
        }
        else if (shiftWith === -1) {
                square.color = "";
        }
        return (square);
    });
    board.reverse();
    return (board);
};

export const createPiece = (state) => {
    const i = Math.floor(Math.random() * Math.floor(7));
    let newState = Object.assign({}, state);
    let newBoard = putCurrentToBoard(state.board, state.current);
    const uncompletedRows = getUncompletedRows(newBoard);
    let piece = {};

    if (uncompletedRows.length !== 20) {
        const shiftingArray = createShiftingArray(uncompletedRows);
        newBoard = emptyCompleteRows(shiftingArray, newBoard);
    }
    piece.position = Object.assign([], pieces[i].position);
    piece.color = pieces[i].color;
    piece.rotation = pieces[i].rotation;
    piece.indexRotation = pieces[i].indexRotation;
    piece.lastMove = 0;
    newState.current = piece;
    newState.board = newBoard;
    return (newState);
};