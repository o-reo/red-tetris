import { combineReducers } from 'redux';

import login from '../../app/login/loginReducer';
import room from '../../app/room/roomReducer';

export default combineReducers({
    login,
    room,
});