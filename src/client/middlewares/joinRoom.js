import io from "socket.io-client";
import {JOIN_ROOM} from "../actions";

const logUserMiddleware = store => next => action => {
    if (action.type === JOIN_ROOM) {


        const socket = io('http://localhost:8080');
        socket.emit('join room', { username: action.userName, room: action.room });

        return ("test");
    }
    return (next(action));
};

export default logUserMiddleware;