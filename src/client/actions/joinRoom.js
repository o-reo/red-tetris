import io from "socket.io-client";
import { connectToRoom, disconnectFromRoom } from "../utils/socketConnection";

export const JOIN_ROOM = "JOIN_ROOM";
export const joinRoom = (username, room) => {
    return (function(dispatch) {
        dispatch(joinRoomRequest());
        const socket = io('http://localhost:8080/room');
        socket.on("connect", function () {
            socket.emit('join room', { username: username, room: room }, function (data) {
                if (data.connected === true) {
                    connectToRoom(socket, dispatch);
                    dispatch(joinRoomSuccess(username, room));
                    console.log(data);
                    window.onhashchange = function() {
                        socket.disconnect();
                    };
                }
                else {
                    dispatch(joinRoomFailure("username could'nt be connected."));
                }
            });
        });
    });
};

export const JOIN_ROOM_REQUEST = "JOIN_ROOM_REQUEST";
export const joinRoomRequest = () => ({ type: JOIN_ROOM_REQUEST });

export const JOIN_ROOM_FAILURE = "JOIN_ROOM_FAILURE";
export const joinRoomFailure = (error) => ({ type: JOIN_ROOM_FAILURE, error: error });

export const JOIN_ROOM_SUCCESS = "JOIN_ROOM_SUCCESS";
export const joinRoomSuccess = (username, room) => ({ type: JOIN_ROOM_SUCCESS, username: username, room: room });

export const OPPONENT_JOIN_ROOM = "OPPONENT_JOIN_ROOM";
export const opponentJoinRoom = (opponentName) => ({ type: OPPONENT_JOIN_ROOM, newOpponent: opponentName });