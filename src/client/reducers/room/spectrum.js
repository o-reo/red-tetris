export const updateSpectrum = (state, action) => ({
    ...state, ...{
        players: {
            ...state.players, ...{
                [action.playerName]: {
                    ...state.players[action.playerName],
                    spectrum: action.spectrum
                }
            }
        }
    }
});
// {
// export const updateSpectrum = (state, action) => {
//     console.log(action);
//     console.log(state);
// console.log({...state.players, ...{...state.players[action.playerName], ...{spectrum: action.spectrum}}});
// console.log({...state, ...{players: {...state.players, ...{[action.playerName]: {...state.players[action.playerName], spectrum: action.spectrum }}}}});
// return state;
// };
