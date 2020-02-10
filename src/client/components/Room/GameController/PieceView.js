import React from 'react';

import Square from '../Square';

const pieceViewStyle = {
    width: '11.95vh',
    height: '11.95vh',
    margin: '2.5vh',
    display: 'flex',
    flexWrap: 'wrap',
    borderColor: '#0f1423',
    borderWidth: '2vh 2vh 2vh 2vh',
    borderRadius: '1vh 1vh 1vh 1vh',
    borderStyle: 'inset'
};

function createArray(piece) {
    let array = Array(16).fill({color: 'white'});
    if (piece !== undefined) {
        piece.position.forEach((position) => {
            array[(position.row * 4) + position.column - 3] = { color: piece.color };
        });
    }
    return (array);
}

function PieceView({ piece }) {
    const array = createArray(piece);

    return (<div style={pieceViewStyle}>
        {
            array.map((square, index) =>
                <Square
                    key={index}
                    index={index}
                    color={square.color}
                />)
        }
    </div>);
}

// PieceView.propTypes = {
//     piece: PropTypes.object.isRequired,
// };

export default PieceView;
