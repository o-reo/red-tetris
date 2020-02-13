import { connect } from 'react-redux';

import GameController from '../../../components/Room/GameController';

const mapStateToProps = (state) => ({
    isRoomLeader: state.room.isRoomLeader,
    firstPiece: state.room.pieces[0],
    secondPiece: state.room.pieces[1],
    thirdPiece: state.room.pieces[2],
    gameIsStarted: state.room.gameIsStarted,
    socket: state.room.socket
});

const mapDispatchToProps = dispatch => ({ dispatch: dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
