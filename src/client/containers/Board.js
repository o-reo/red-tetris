import { connect } from 'react-redux';
import clone from "lodash/clone";
import Board from '../components/Board.js'

const insertCurrentIntoBoard = (board, current) => {
    for (let i = 0; i < 4; i++) {
        board[(current.position[i].row * 10) + current.position[i].column].color = current.color;
    }
    return (board);
};

const mapStateToProps = (state) => {
    let board = state.game.board.map((square) => clone(square));
    if (state.game.current !== null) {
        board = insertCurrentIntoBoard(board, state.game.current);
    }
    return ({board});
};

export default connect(mapStateToProps)(Board);