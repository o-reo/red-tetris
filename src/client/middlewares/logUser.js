import { LOG_USER } from "../actions";

const logUserMiddleware = store => next => action => {
    if (action.type === LOG_USER) {
        console.log(action.userName)
    }
    next(action);
};

export default logUserMiddleware;