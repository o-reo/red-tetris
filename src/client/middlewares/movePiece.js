import {MOVE_PIECE, ROTATE_PIECE} from "../actions/game";
import checkNewPosition from "../utils/checkNewPosition";
import getNewPosition from "../utils/getNewPosition";
import {askPiece} from '../actions/game'

const movePieceMiddleware = store => next => action => {
    if (action.type === MOVE_PIECE && store.getState().game.current !== null) {
        const board = store.getState().game.board;
        const position = store.getState().game.current.position;
        const newPosition = getNewPosition(position, action.direction);
        if (checkNewPosition(position, newPosition, board) === true) {
            console.log("POS:");
            console.log(position);
            console.log("NEW_POS:");
            console.log(newPosition);
            //alert("00BLOCKED ??");
            next(action);
        }
        else {
            console.log("POS:");
            console.log(position);
            console.log("NEW_POS:");
            console.log(newPosition);
            //alert("ROW: " + newPosition[0].row + "POS_ROW: " + position[0].row);
            if (
                newPosition[0].row - 1 === position[0].row &&
                newPosition[1].row - 1 === position[1].row &&
                newPosition[2].row - 1 === position[2].row &&
                newPosition[3].row - 1 === position[3].row &&
                newPosition[0].column >= 0 && newPosition[0].column <= 9 &&
                newPosition[1].column >= 0 && newPosition[1].column <= 9 &&
                newPosition[2].column >= 0 && newPosition[2].column <= 9 &&
                newPosition[3].column >= 0 && newPosition[3].column <= 9
            )
            {
                alert("NEW_PIECE");
                askPiece();
            }
        }
    }
    else if (action.type === MOVE_PIECE && store.getState().game.current === null) {
     //   alert("00WTF")
    }
    else {
        //alert("11WTF")
        next(action);
    }
};


export default movePieceMiddleware;
/*
const mapStateToProps = (state) => ({
    isListening: state.game.isListening,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoad: () => startParty(dispatch, ownProps),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);*/