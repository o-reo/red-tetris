import React from 'react';
import './Board.css';
import Square from "./Square";

function insertCurrentIntoBoard(board, current) {
    for (let i = 0; i < 4; i++) {
        board[(current.position[i].row * 10) + current.position[i].column].color = current.color;
    }
    return (board);
}

function Board({board, current}) {
    let boardCopy = board.map((square) => Object.assign({}, square));
    if (current !== null) {
        boardCopy = insertCurrentIntoBoard(boardCopy, current);
    }
    return (
        <div className="board">
            {
                boardCopy.map((square, index) =>
                    <Square
                        key={index}
                        index={index}
                        color={square.color}
                    />)
            }
        </div>
    );
}

export default Board;