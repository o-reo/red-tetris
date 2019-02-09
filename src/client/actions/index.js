export const MOVE_PIECE = 'MOVE_PIECE';
export const CREATE_PIECE = 'CREATE_PIECE';
export const ROTATE_PIECE = 'ROTATE_PIECE';

export const movePiece = (direction) => ({type: MOVE_PIECE, direction});

export const createPiece = () => ({type: CREATE_PIECE});

export const rotatePiece = () => ({type: ROTATE_PIECE});