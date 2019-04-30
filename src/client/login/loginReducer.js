import clone from "lodash/clone";
import {
    CHECK_AVAILABILITY_FAILURE,
    CHECK_AVAILABILITY_REQUEST,
    CHECK_AVAILABILITY_SUCCESS,
    DELETE_ERRORS
} from "./loginActions";


const initialState = () => ({
    isChecking: false,
    errors: null,
});

function checkAvailabilityRequest(state) {
    let newState = clone(state);

    newState.errors = null;
    newState.isChecking = true;
    return (newState);
}

function checkAvailabilitySuccess(state) {
    let newState = clone(state);

    newState.isChecking = false;
    return (newState);
}

function checkAvailabilityFailure(state, action) {
    let newState = clone(state);

    newState.errors = action.errors;
    newState.isChecking = false;
    return (newState);
}


function deleteErrors(state) {
    let newState = clone(state);

    newState.errors = null;
    return (newState);
}

function login(state = initialState(), action) {
    switch (action.type) {
        case CHECK_AVAILABILITY_FAILURE:
            return (checkAvailabilityFailure(state, action));
        case CHECK_AVAILABILITY_REQUEST:
            return (checkAvailabilityRequest(state));
        case CHECK_AVAILABILITY_SUCCESS:
            return (checkAvailabilitySuccess(state));
        case DELETE_ERRORS:
            return (deleteErrors(state));
        default:
            return (state);
    }
}

export default login;