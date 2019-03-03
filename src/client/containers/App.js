import { connect } from 'react-redux';
import App from '../components/App.js';
import { joinRoom } from "../actions/joinRoom";

const connectToRoom = (dispatch, ownProps, statePlayer, stateRoom) => {
    const hashPlayer = ownProps.match.params.player;
    const hashRoom = ownProps.match.params.room;

    if ((hashPlayer !== statePlayer || hashRoom !== stateRoom) &&
        (hashPlayer !== undefined && hashRoom !== undefined)) {
        dispatch(joinRoom(hashPlayer, hashRoom));
    }
};

const mapStateToProps = (state) => ({
    username: state.env.username,
    room: state.env.room,
    isConnected: state.env.isConnected,
    playersList: state.env.playersList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    connectToRoom: (username, room) => connectToRoom(dispatch, ownProps, username, room),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);