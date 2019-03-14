import { connect } from 'react-redux';
import App from '../components/App.js';
import { env } from "../actions/env";

const connectToRoom = (dispatch, ownProps, statePlayer, stateRoom) => {
    const hashPlayer = ownProps.match.params.player;
    const hashRoom = ownProps.match.params.room;

    if ((hashPlayer !== statePlayer || hashRoom !== stateRoom) &&
        (hashPlayer !== undefined && hashRoom !== undefined)) {
        dispatch(env(hashPlayer, hashRoom));
    }
};

const mapStateToProps = (state) => ({
    username: state.env.username,
    room: state.env.room,
    isConnected: state.env.isConnected,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    connectToRoom: (username, room) => connectToRoom(dispatch, ownProps, username, room),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);