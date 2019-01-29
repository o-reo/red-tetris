export const MOVE_PIECE = 'MOVE_PIECE';
export const CREATE_PIECE = 'CREATE_PIECE';
export const ROTATE_PIECE = 'ROTATE_PIECE';

export function movePiece(direction) {
    return ({type: MOVE_PIECE, direction});
}

export function createPiece() {
    return ({type: CREATE_PIECE})
}

export function rotatePiece() {
    return ({type: ROTATE_PIECE})
}