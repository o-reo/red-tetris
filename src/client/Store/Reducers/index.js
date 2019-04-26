import { combineReducers } from 'redux';
import game from "./Game"
import env from "./Env"

export default combineReducers({
    env,
    game,
});