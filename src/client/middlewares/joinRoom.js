const joinRoomMiddleware = store => next => action => {
    next(action);
};

export default joinRoomMiddleware;