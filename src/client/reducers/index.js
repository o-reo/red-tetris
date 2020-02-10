import { combineReducers } from 'redux';

import login from '../reducers/env/reducers';
import room from '../reducers/room/roomReducer';

export default combineReducers({
    login,
    room,
});
