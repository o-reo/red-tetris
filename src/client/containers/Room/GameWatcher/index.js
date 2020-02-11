import { connect } from 'react-redux';

import GameWatcher from '../../../components/Room/GameWatcher'

const mapStateToProps = (state) => ({
    players: state.room.players
    // isRoomLeader: state.room.isRoomLeader,
    // firstPiece: state.room.pieces[0],
    // secondPiece: state.room.pieces[1],
    // thirdPiece: state.room.pieces[2],
    // gameIsStarted: state.room.gameIsStarted,
});

const mapDispatchToProps = dispatch => ({ dispatch: dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(GameWatcher);
