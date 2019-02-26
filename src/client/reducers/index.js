import { combineReducers } from 'redux';
import game from "./game"
import env from "./env"

export default combineReducers({
    env,
    game,
});