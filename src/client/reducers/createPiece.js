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

function putCurrentToBoard(board, current) {
    if (current !== null) {
        let newBoard = Object.assign([], board);
        current.position.forEach(function (pos) {
            newBoard[pos.row * 10 + pos.column].color = current.color;
        });
        return (newBoard);
    } else {
        return (board);
    }
}


function rowIsComplete(row) {
    for (let i = 0; i < 10; i++) {
        if (row.color === "") {
            return (false);
        }
    }
    return (true);
}


function lookForCompleteRow(board) {
    let rows = [];
    let complete = true;
    board.forEach(function (square, index) {
        if (square.color === "") {
            complete = false;
        }
        if (index % 10 === 9) {
            if (complete === true) {
                rows.push(Math.floor(index / 10));
            }
            complete = true;
        }
    });
    return (rows.reverse());
}


function createReplacementArray(completeRows) {
    let rowsToShift = 0;
    let array = Array(20).fill({});
    array = array.map(function (row, index) {
        return ({index: index, rowsToShift: 0});
    });
    array = array.reverse().map(function (row) {
        if (completeRows.includes(row.index) === false) {
            row.rowsToShift = rowsToShift;
        } else {
            row.rowsToShift = 0;
            rowsToShift++;
        }
        return (row);
    });
    return (array.reverse());
}

function emptyRows(board, replacementArray) {
    board.forEach(function (square) {
        let rowsToShift = replacementArray[square.row].rowsToShift;
        if (rowsToShift !== 0) {
            if (square.row - rowsToShift >= 0) {
                board[(square.row * 10 + 10) + square.column].color = board[((square.row - rowsToShift) * 10 + 10) + square.column].color;

                // console.log('index src = ', ((square.row - rowsToShift) * 10 + 10) + square.column, '\tindex dest = ', (square.row * 10 + 10) + square.column);
                // console.log('index dest = ', (square.row * 10 + 10) + square.column, '\t\tindex origin = ', ((square.row - rowsToShift) * 10 + 10) + square.column);

            } else {
                board[(square.row * 10) + square.column].color = "";
                // console.log('blank index = ', (square.row * 10) + square.column);
            }

        }
    });
    return (board.reverse());
}


export function createPiece(state) {
    const i = Math.floor(Math.random() * Math.floor(7));
    // const i = 1;
    let newState = Object.assign({}, state);
    let newBoard = putCurrentToBoard(state.board, state.current);
    const completeRows = lookForCompleteRow(newBoard);
    let piece = {};

    if (completeRows.length !== 0) {
        const replacementArray = createReplacementArray(completeRows);
        newBoard = emptyRows(newBoard.reverse(), replacementArray);


        piece.position = Object.assign([], pieces[i].position);
        piece.color = pieces[i].color;
        piece.rotation = pieces[i].rotation;
        piece.indexRotation = pieces[i].indexRotation;
        piece.lastMove = 0;
        newState.current = piece;
        newState.board = newBoard;
        return (newState);
    }
    else {
        piece.position = Object.assign([], pieces[i].position);
        piece.color = pieces[i].color;
        piece.rotation = pieces[i].rotation;
        piece.indexRotation = pieces[i].indexRotation;
        piece.lastMove = 0;
        newState.current = piece;
        newState.board = newBoard;
        return (newState);
    }
}