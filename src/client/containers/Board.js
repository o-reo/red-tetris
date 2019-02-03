import { connect } from 'react-redux';
import Board from '../components/Board.js'

function insertCurrentIntoBoard(board, current) {
    for (let i = 0; i < 4; i++) {
        board[(current.position[i].row * 10) + current.position[i].column].color = current.color;
    }
    return (board);
}

function mapStateToProps(state) {
    let board = state.pieces.board.map((square) => Object.assign({}, square));
    if (state.pieces.current !== null) {
        board = insertCurrentIntoBoard(board, state.pieces.current);
    }
    return ({board});
}

export default connect(
    mapStateToProps
)(Board);