import io from 'socket.io-client';

export const CHECK_AVAILABILITY = 'CHECK_AVAILABILITY';
export const checkAvailability = (username, room) => {
    return ((dispatch) => {
        dispatch(checkAvailabilityRequest());
        const socket = io('http://localhost:8080/room');
        socket.on('connect', () => {
            console.log(username + ' wants to join room ' + room);
            socket.emit('check availability', {username: username, room: room}, (data) => {
                if (data['canConnect'] === true) {
                    window.location.href = "http://localhost:3000/#" + room + "[" + username + "]";
                    dispatch(checkAvailabilityFailure(data['reasons']));
                }
                else {
                    dispatch(checkAvailabilityFailure(data['reasons']));
                }
            });
        });
    });
};

export const CHECK_AVAILABILITY_REQUEST = 'CHECK_AVAILABILITY_REQUEST';
export const checkAvailabilityRequest = () => ({type: CHECK_AVAILABILITY_REQUEST});

export const CHECK_AVAILABILITY_FAILURE = 'CHECK_AVAILABILITY_FAILURE';
export const checkAvailabilityFailure = (errors) => ({type: CHECK_AVAILABILITY_FAILURE, errors: errors});

export const CHECK_AVAILABILITY_SUCCESS = 'CHECK_AVAILABILITY_SUCCESS';
export const checkAvailabilitySuccess = () => ({ type: CHECK_AVAILABILITY_SUCCESS });

export const DELETE_ERRORS = 'DELETE_ERRORS';
export const deleteErrors = () => ({ type: DELETE_ERRORS });

export const LEAVE_ROOM = 'LEAVE_ROOM';
export const leaveRoom = () => ({type: LEAVE_ROOM});