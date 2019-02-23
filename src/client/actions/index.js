export const JOIN_ROOM = 'JOIN_ROOM';

export const joinGame = (userName, room) => ({type: JOIN_ROOM, userName: userName, room: room});