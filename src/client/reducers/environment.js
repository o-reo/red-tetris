// import { LOG_USER} from "../actions";

const initialState = () => {
    return ({
       userName: null,
       room: null
    });
};

const environment = (state = initialState(), action) => {
    // console.log(state);
    // console.log(action);
    return (state);
};

export default environment;