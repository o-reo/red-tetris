export const CHANGE_COLOR = 'CHANGE_COLOR';

export function changeColor(index, color) {
    return ({type: CHANGE_COLOR, index, color});
}