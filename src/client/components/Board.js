import React from 'react';
import Row from './Row.js';
import './Board.css';

function createBoard(array) {
    let board = [];
    for (let i = 0; i < 20; i++)
        board.push(
            <Row key={i}
                 index={i}
                 value={(array.slice(i * 10, i * 10 + 10))}
            />
                );
    return (board);
}

function Board(obj) {
    let board = createBoard(obj.board);
    return (
        <div className="board">
            {board}
        </div>
    );
}

export default Board;