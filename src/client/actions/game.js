export const GET_PIECE = 'GET_PIECE';
export const getPiece = () => ({type: GET_PIECE});

export const askPiece = () => {
    return ((dispatch, getState) => {
        // const socket = getState().env.socket;
        // const board = getState().env.board;
        const numberOfPieces = getState().game.pieces.length;
        if (numberOfPieces <= 5) {
            dispatch(fetchPieces());
        }
        dispatch(getPiece());
    })
};

export const MOVE_PIECE = 'MOVE_PIECE';
export const movePiece = (direction) => ({type: MOVE_PIECE, direction: direction});

export const ROTATE_PIECE = 'ROTATE_PIECE';
export const rotatePiece = () => ({type: ROTATE_PIECE});

export const LISTENER_GAME = 'LISTENER_GAME';
export const listenerGame = () => ({type: LISTENER_GAME});

export const fetchPieces = () => {
    return ((dispatch, getState) => {
        const socket = getState().env.socket;
        const indexPiece = getState().game.indexPieces;
        dispatch(fetchPiecesRequest());
        socket.emit("fetch pieces", indexPiece, (data) => {
            if (data.pieces !== null) {
                //console.log("FETCH_PIECES:");
                //console.log(data.pieces);
                //alert("FETCH_PIECE")
                dispatch(fetchPiecesSuccess(data.pieces));
            } else {
                dispatch(fetchPiecesFailure());
            }
        });
    });
};

export const FETCH_PIECES_REQUEST = "FETCH_PIECES_REQUEST";
export const fetchPiecesRequest = () => ({type: FETCH_PIECES_REQUEST});

export const FETCH_PIECES_SUCCESS = "FETCH_PIECES_SUCCESS";
export const fetchPiecesSuccess = (pieces) => ({type: FETCH_PIECES_SUCCESS, pieces: pieces});

export const FETCH_PIECES_FAILURE = "FETCH_PIECES_FAILURE";
export const fetchPiecesFailure = () => ({type: FETCH_PIECES_FAILURE});


export const START_PARTY = "START_PARTY";
export const startParty = () => {
    return ((dispatch, getState) => {
        const socket = getState().env.socket;
        const isStarted= getState().game.isStarted;
        if (isStarted === false) {
            socket.emit("start party", (data) => {
                if (data.authorizedToLaunchParty === true) {
                    dispatch(startPartySuccess());
                    dispatch(askPiece());
                }
                else {
                    dispatch(startPartyFailure());
                }
            });
        }
        else {
            dispatch(startPartyFailure());
        }
    });
};

export const START_PARTY_SUCCESS = "START_PARTY_SUCCESS";
export const startPartySuccess = () => ({type: START_PARTY_SUCCESS});

export const START_PARTY_FAILURE = "START_PARTY_FAILURE";
export const startPartyFailure = () => ({type: START_PARTY_FAILURE});