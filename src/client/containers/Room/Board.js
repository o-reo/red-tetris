import { connect } from 'react-redux';
import clone from 'lodash/clone';

import Board from '../../components/Room/Board';

const insertCurrentIntoBoard = (board, current) => {
    for (let i = 0; i < 4; i++) {
        board[(current.position[i].row * 10) + current.position[i].column].color = current.color;
    }
    return (board);
};

const mapStateToProps = (state) => {
    let board = state.room.board.map((square) => clone(square));
    if (state.room.current !== null) {
        board = insertCurrentIntoBoard(board, state.room.current);
    }
    return ({board});
};

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
