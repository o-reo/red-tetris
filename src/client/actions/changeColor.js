export const MOVE_PIECE = 'MOVE_PIECE';
export const CREATE_PIECE = 'CREATE_PIECE';
export const ROTATE_PIECE = 'ROTATE_PIECE';

export function movePiece(direction) {
    return ({type: MOVE_PIECE, direction});
}

export function createPiece(position, color) {
    return ({type: CREATE_PIECE, position, color})
}

export function rotatePiece(indexRotation, rotation) {
    return ({type: ROTATE_PIECE, rotation})
}