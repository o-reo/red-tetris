const joinRoomMiddleware = store => next => action => {
    //alert("JOIN_ROOM");
    next(action);
};

export default joinRoomMiddleware;