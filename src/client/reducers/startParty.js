import clone from "lodash/clone";

export const startPartySuccess = (state) => {
    let newState = clone(state);
    newState.isStarted = true;
    console.log("START_PARTY:");
    console.log(newState);
    alert("START_PARTY");
    return (newState);
};