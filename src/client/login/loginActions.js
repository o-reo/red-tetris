import io from 'socket.io-client';
// import { connectToRoom } from '../utils/socketConnection';
// import { fetchPieces } from './Game';

export const AUTHENTICATION = 'AUTHENTICATION';
export const env = (username, room) => {
    return ((dispatch) => {
        dispatch(authenticationRequest());
        const socket = io('http://localhost:8080/room');
        socket.on('connect', () => {
            socket.emit('join room', { username: username, room: room }, (data) => {
                if (data.connected === true) {
                    // connectToRoom(socket, dispatch);
                    dispatch(authenticationSuccess(username, room, socket, data.players, data.isRoomLeader));
                    // dispatch(fetchPieces());
                    window.onhashchange = () => {
                        dispatch(leaveRoom());
                        socket.disconnect();
                    };
                }
                else {
                    dispatch(authenticationFailure('username could\'nt be connected.'));
                }
            });
        });
    });
};

export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const authenticationRequest = () => ({ type: AUTHENTICATION_REQUEST });

export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const authenticationFailure = (error) => ({ type: AUTHENTICATION_FAILURE, error: error });

export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const authenticationSuccess = (username, room, socket, players, isRoomLeader) =>
    ({ type: AUTHENTICATION_SUCCESS, username: username, room: room, socket: socket,
        players: players, isRoomLeader: isRoomLeader });

export const LEAVE_ROOM = 'LEAVE_ROOM';
export const leaveRoom = () => ({ type: LEAVE_ROOM });