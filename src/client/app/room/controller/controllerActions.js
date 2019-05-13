export const START_PARTY = "START_PARTY";
export const startParty = () => {
    return ((dispatch, getState) => {
        const socket = getState().room.socket;
        socket.emit("start party", (data) => {
            if (data.authorizedToLaunchParty === true) {
                dispatch(startPartySuccess());
                dispatch(askPiece());
            }
            else {
                dispatch(startPartyFailure());
            }
        });
    });
};

export const START_PARTY_SUCCESS = "START_PARTY_SUCCESS";
export const startPartySuccess = () => ({type: START_PARTY_SUCCESS});

export const START_PARTY_FAILURE = "START_PARTY_FAILURE";
export const startPartyFailure = () => ({type: START_PARTY_FAILURE});