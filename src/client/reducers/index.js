import { combineReducers } from 'redux';
import { MOVE_PIECE, CREATE_PIECE, ROTATE_PIECE } from '../actions/changeColor.js';
import { rotatePiece } from "../actions/changeColor";

function initialState() {
    return {
        board: Array(200).fill({color: "", active: false, state: 'free'}),
        activePiece: 1,
        current: null
    }
}

function createPiece(state, action) {
    let newState = Object.assign({}, state);
    let newBoard = Object.assign([], state.board);
    newBoard.map(function(square) {
        if (square.state === 'active') {
            square.state = 'occupied';
        }
        return square;
    });
    newBoard[action.position[0]] = {color: action.color, state: 'active'};
    newBoard[action.position[1]] = {color: action.color, state: 'active'};
    newBoard[action.position[2]] = {color: action.color, state: 'active'};
    newBoard[action.position[3]] = {color: action.color, state: 'active'};
    newState.board = newBoard;
    console.log(newBoard);
    return (newState);
}

function getNewBoard(board, direction) {
    let newPosition = [];
    let newBoard = Object.assign([], board);
    newBoard.map(function(square, index) {
            if (square.state === 'active') {
                if (direction === 'left' && index % 10 !== 0 && board[index - 1].state !== 'occupied') {
                    newPosition.push({index: index - 1, color: square.color});
                    newBoard[index] = {color: '', state: 'free'};
                }
                else if (direction === 'right' && index % 10 !== 9 && board[index + 1].state !== 'occupied') {
                    newPosition.push({index: index + 1, color: square.color});
                    newBoard[index] = {color: '', state: 'free'};
                }
                else if (direction === 'down' && index + 10 < 200 && board[index + 10].state !== 'occupied') {
                    newPosition.push({index: index + 10, color: square.color});
                    newBoard[index] = {color: '', state: 'free'};
                }
            }
            return 0;
        }
    );
    if (newPosition[0] !== undefined && newPosition[1] !== undefined && newPosition[2] !== undefined && newPosition[3] !== undefined) {
        newBoard[newPosition[0].index] = {color: newPosition[0].color, state: 'active'};
        newBoard[newPosition[1].index] = {color: newPosition[1].color, state: 'active'};
        newBoard[newPosition[2].index] = {color: newPosition[2].color, state: 'active'};
        newBoard[newPosition[3].index] = {color: newPosition[3].color, state: 'active'};
        return (newBoard);
    }
    else {
        return (board);
    }
}

function moveTetris(state, action) {
    let newState = Object.assign({}, state);
    let newBoard = Object.assign([], state.board);
    newBoard = getNewBoard(newBoard, action.direction);
    newState.board = newBoard;
    return (newState);

}

function game(state = initialState(), action) {
    switch (action.type) {
        case CREATE_PIECE: {
            return createPiece(state, action);
        }
        case MOVE_PIECE: {
            return moveTetris(state, action);
        }
        case ROTATE_PIECE: {
            return rotatePiece(state, action);
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    game
});