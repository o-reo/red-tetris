import { combineReducers } from 'redux';

import login from '../../login/loginReducer';
import game from './Game';
import env from './Env';

export default combineReducers({
    login,
    env,
    game,
});