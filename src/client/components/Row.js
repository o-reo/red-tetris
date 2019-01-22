import React from 'react';
import Square from './Square.js';
import './Row.css';

function Row(props) {
    const array = props.value;
    const row = props.index;

    return (
        <div className="row">
            {array.map((square, index) =>
            <Square key={index}
                    value={square}
                    row={row}
                    column={index}
            />
            )}
        </div>
    );
}

export default Row;