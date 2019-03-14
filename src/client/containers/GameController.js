import { connect } from 'react-redux';
import GameController from '../components/GameController.js';
import { startParty} from "../actions/game";

const mapStateToProps = (state) => ({
    isRoomLeader: state.env.isRoomLeader,
    piece0: state.game.pieces[0],
    piece1: state.game.pieces[1],
    piece2: state.game.pieces[2],
    gameIsStarted: state.game.isStarted
});

const mapDispatchToProps = (dispatch) => ({
    // startParty: () => startParty(dispatch, ownProps),
    startParty: () => dispatch(startParty()),
});


export default connect(mapStateToProps, mapDispatchToProps)(GameController);