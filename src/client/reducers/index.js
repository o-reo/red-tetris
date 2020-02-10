import { combineReducers } from 'redux';

import login from './env';
import room from './room';

export default combineReducers({
    login,
    room,
});
