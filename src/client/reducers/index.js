import { combineReducers } from 'redux';
import game from "./game"
import environment from "./environment"

export default combineReducers({
    environment,
    game,
});