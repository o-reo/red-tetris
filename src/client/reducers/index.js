import { combineReducers } from 'redux';
import { CHANGE_COLOR } from '../actions/changeColor.js';

function initialState() {
    return {
        board: Array(200).fill({color: ""}),
        current: null
    }
}

function modifySquare(state, action) {
    let newState = Object.assign({}, state);
    let newBoard = Object.assign([], state.board);
    newBoard[action.index] = {color: action.color};
    newState.board = newBoard;
    return (newState);
}

function game(state = initialState(), action) {
    switch (action.type) {
        case CHANGE_COLOR:
        {
            return modifySquare(state, action);
        }
        default:
        {
            return state;
        }
    }
}

export default combineReducers({
    game
});