import clone from "lodash/clone";

export const startPartySuccess = (state) => {
    let newState = clone(state);
    newState.isStarted = true;
    return (newState);
};