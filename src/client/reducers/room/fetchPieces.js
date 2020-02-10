export const fetchPieces = (state, action) => ({...state, ...{pieces: [...state.pieces, ...action.pieces]}});
